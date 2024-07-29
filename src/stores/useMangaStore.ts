import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { inject, ref } from "vue";
import { v4 } from 'uuid';
export default defineStore('mangaStore', () => {
    const db = <any>inject("db");

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

    async function saveMangas(data:any){
        data.banner64 = data.banner.base64;
        data.cover64 = data.cover.base64;
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