import { collection, getDocs, where, query } from "firebase/firestore";
import { defineStore } from "pinia";
import { inject, ref } from "vue";


export default defineStore("dataStore", () => {
    const mangas = ref<{id: string; name: string; cover: any; }[]>([]);
    const db = <any>inject("db");

    async function getMangas(){
        mangas.value = [];
try{
    const q = query(collection(db, "mangas"), where("status", "==", "1"));
    console.log("Q", q);
    const res = await getDocs(q);
       res.forEach(doc => {
        console.log("WAKA", doc.data());
        const docData = doc.data();
        mangas.value.push({id: doc.id, name: docData.name, cover: docData.cover})
       });
}catch(err){
    console.log("ERROR AL CARGAR MANGAS", err);
}
    }

    return{
        getMangas,
        mangas,
    }
});