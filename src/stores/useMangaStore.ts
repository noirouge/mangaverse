import { collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import { inject, ref } from "vue";
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

return{
    getGenres,

};
});