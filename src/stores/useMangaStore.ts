import {
  collection,
  getDocs,
  doc as docu,
  getDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { defineStore } from "pinia";
import { inject, ref } from "vue";
import { v4 } from "uuid";
import type { IManga, IMangaTreending } from "@/interfaces";
import useDate from "@/composables/useDate";
import useArray from "@/composables/useArray";
export default defineStore("mangaStore", () => {
  const db = <any>inject("db");
  const storage = <any>inject("storage");
  const { getBeforeWeekMondayDate, getMondayDate } = useDate();
  const {groupBy} = useArray();
  async function getGenres() {
    try {
      const res = await getDocs(collection(db, "mangaGenres"));
      const data: any[] = [];
      res.forEach((doc) => {
        const docData = doc.data();
        data.push({ id: doc.id, name: docData.name });
      });
      return { success: true, data: data };
    } catch (err) {
      console.log("ERROR GET GENRES", err);
      return { success: false, data: [] };
    }
  }
  const mangasTreending = ref<IMangaTreending[]>([]);

  async function fillTreendingMangasSinceMonday() {
    const monday = getMondayDate(new Date());
    // console.log("MONDAY", monday, monday.getHours());
    const q = query(
      collection(db, "chapter_views"),
      where("updated_date", ">=", monday.getTime())
    );
    const res = await getDocs(q);
    // const mangasTreending = ref<any[]>([]);
    const resData:any[] = [];
    
    res.docs.forEach((doc) => {
        resData.push({id: doc.id, ...doc.data()});
    });

    let data = groupBy('manga_id', resData);
   data = data.sort((a,b) => b.data.length - a.data.length);
    data = data.slice(0,5);

    console.log("WAKITA", data);
    res.docs
      .sort((a, b) => b.data().updated_date - a.data().updated_date)
      .forEach((doc) => {
        const mangaTreending = mangasTreending.value.find(
          (w) => w.manga_id == doc.data().manga_id
        );
        //w.visite_ids.includes(doc.data().visitor_id)
        if (mangaTreending) {
          if (
            mangasTreending.value.find(
              (w) => !w.visite_ids.includes(doc.data().visitor_id)
            )
          )
            mangaTreending.visite_ids.push(doc.data().visitor_id);
        } else if (mangasTreending.value.length < 5)
          mangasTreending.value.push(<any>{
            manga_id: doc.data().manga_id,
            visite_ids: [doc.data().visitor_id],
            stars: 0,
          });
      });
  }

  async function fillTreendingMangasSinceLastMonday() {
    // IF DON'T HAVE ENOUGH MANGAS THEN FIND MORE IN THE LAST WEEK
    if (!(mangasTreending.value.length < 5)) return;
    const monday = getMondayDate(new Date());
    const beforeWeekMonday = getBeforeWeekMondayDate(new Date());
    // BW = BEFORE WEEK
    const q = query(
      collection(db, "chapter_views"),
      where("updated_date", ">=", beforeWeekMonday.getTime()),
      where("updated_date", "<", monday.getTime())
    );
    const res = await getDocs(q);
    res.docs
      .sort((a, b) => b.data().updated_date - a.data().updated_date)
      .forEach((doc) => {
        const mangaTreending = mangasTreending.value.find(
          (w) => w.manga_id == doc.data().manga_id
        );
        if (mangaTreending) {
          if (
            mangasTreending.value.find(
              (w) => !w.visite_ids.includes(doc.data().visitor_id)
            )
          )
            mangaTreending.visite_ids.push(doc.data().visitor_id);
        } else if (mangasTreending.value.length < 5)
          mangasTreending.value.push(<any>{
            manga_id: doc.data().manga_id,
            visite_ids: [doc.data().visitor_id],
            stars: 0,
          });
      });
  };

  async function fillTreendingMangasUntilLastMonday(){
 // IF DON'T HAVE ENOUGH MANGAS THEN FIND MORE IN ALL TIME
 if (!(mangasTreending.value.length < 5)) return;
 const beforeWeekMonday = getBeforeWeekMondayDate(new Date());
 const q = query(
   collection(db, "chapter_views"),
   where("updated_date", "<", beforeWeekMonday.getTime())
 );
 const res = await getDocs(q);
 res.docs
   .sort((a, b) => b.data().updated_date - a.data().updated_date)
   .forEach((doc) => {
     const mangaTreending = mangasTreending.value.find(
       (w) => w.manga_id == doc.data().manga_id
     );
     if (mangaTreending) {
       if (
         mangasTreending.value.find(
           (w) => !w.visite_ids.includes(doc.data().visitor_id)
         )
       )
         mangaTreending.visite_ids.push(doc.data().visitor_id);
     } else if (mangasTreending.value.length < 5)
       mangasTreending.value.push(<any>{
         manga_id: doc.data().manga_id,
         visite_ids: [doc.data().visitor_id],
         stars: 0,
       });
   });
  };

  async function fillTreendingMangasStars(){
    for(const mangaT of mangasTreending.value){
        // console.log("mangaT", mangaT);
        const q = query(
            collection(db, "manga_rate"),
            where("manga_id", "==", mangaT.manga_id)
          );
          const res = await getDocs(q);
          res.forEach(doc => {
              mangaT.stars = (mangaT.stars?((doc.data().rate+mangaT.stars)/2):doc.data().rate);
            //   console.log("STARS", doc.data().rate, mangaT.stars, doc.data());
          });
    };
  };

  async function fillTreendingMangasData(){
    for(const mangaT of mangasTreending.value){
        // console.log("mangaT", mangaT);
       const docRef = docu(db, 'mangas', mangaT.manga_id);
       const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            mangaT.name = docSnap.data().name;
            mangaT.description = docSnap.data().description;
            mangaT.type = docSnap.data().type;
            mangaT.story_status = docSnap.data().story_status;
            mangaT.demography = docSnap.data().demography;
            mangaT.bannerUrl = docSnap.data().bannerUrl;
            mangaT.coverUrl = docSnap.data().coverUrl;
        }
    };
  };
  async function fillTreendingMangasChapters(){
    for(const mangaT of mangasTreending.value){
        // console.log("mangaT", mangaT);
        const q = query(
            collection(db, "chapters"),
            where("manga_id", "==", mangaT.manga_id)
          );
          const res = await getDocs(q);
          mangaT.chapters = res.docs.length;
    };
  }

  async function getTreendingMangas() {
    mangasTreending.value = [];
    
console.log("getTreendingMangas", new Date().getMinutes() + ':' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
    await fillTreendingMangasSinceMonday();
    console.log("fillTreendingMangasSinceMonday", new Date().getMinutes() + ':' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
    await fillTreendingMangasSinceLastMonday();
    console.log("fillTreendingMangasSinceLastMonday", new Date().getMinutes() + ':' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
    await fillTreendingMangasUntilLastMonday();
    console.log("fillTreendingMangasUntilLastMonday", new Date().getMinutes() + ':' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
    await fillTreendingMangasStars();
    console.log("fillTreendingMangasStars", new Date().getMinutes() + ':' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
    await fillTreendingMangasChapters();
    console.log("fillTreendingMangasChapters", new Date().getMinutes() + ':' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
    await fillTreendingMangasData();
    console.log("fillTreendingMangasData", new Date().getMinutes() + ':' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
    mangasTreending.value = mangasTreending.value.sort((a,b) => b.visite_ids.length - a.visite_ids.length);
console.log("MANGA TREENDING", mangasTreending.value);
  }

  async function saveMangas(data: IManga) {
    const date = new Date();
    console.log("BLOB", data.banner!.blob);
    // return;
    const bannerRef = storageRef(storage, "banners/" + v4());
    const bannerSnapshot = await uploadBytes(bannerRef, data.banner!.blob);
    const bannerUrl = await getDownloadURL(bannerSnapshot.ref);
    data.bannerUrl = bannerUrl;
    const coverRef = storageRef(storage, "covers/" + v4());
    const coverSnapshot = await uploadBytes(coverRef, data.cover!.blob);
    const coverUrl = await getDownloadURL(coverSnapshot.ref);
    data.coverUrl = coverUrl;
    if (data.id) {
      data.created_date = date.getTime();
    } else delete data.id;
    data.updated_date = date.getTime();
    delete data.banner;
    delete data.cover;
    const res = await setDoc(docu(db, "mangas", v4()), data);
    console.log("saveMangas", res);
  }

  return {
    getGenres,
    saveMangas,
    getTreendingMangas,
    mangasTreending,
  };
});
