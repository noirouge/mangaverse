import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import {ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage";
import { defineStore } from "pinia";
import { inject, ref } from "vue";
import { v4 } from 'uuid';
import type { IManga } from "@/interfaces";
export default defineStore('mangaStore', () => {
    const db = <any>inject("db");
    const storage = <any>inject("storage");
   async function getGenres(){
        try{
            const res = await getDocs(collection(db, "mangaGenres"));
            const data:any[] = [];
            res.forEach(doc => {
             const docData = doc.data();
             data.push({id: doc.id, name: docData.name})
            });
            return {success: true, data: data};
        }catch(err){
            console.log("ERROR GET GENRES", err);
            return {success: false, data: []};
        }
    };

    async function saveMangas(data:IManga){
        const date = new Date();
        console.log("BLOB", data.banner!.blob);
        // return;
        const bannerRef = storageRef(storage, 'banners/'+v4());
        const bannerSnapshot = await uploadBytes(bannerRef, data.banner!.blob);
        const bannerUrl = await getDownloadURL(bannerSnapshot.ref);
        data.bannerUrl = bannerUrl;
        const coverRef = storageRef(storage, 'covers/'+v4());
        const coverSnapshot = await uploadBytes(coverRef, data.cover!.blob);
        const coverUrl = await getDownloadURL(coverSnapshot.ref);
        data.coverUrl = coverUrl;
        if(data.id){
            data.created_date = date.getTime();
        }
        else
        delete data.id;
        data.updated_date = date.getTime();
        delete data.banner;
        delete data.cover;
        const res = await setDoc(doc(db, "mangas", v4()), data);
        console.log("saveMangas", res);
    };

return{
    getGenres,
    saveMangas,
};
});