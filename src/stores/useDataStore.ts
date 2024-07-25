import { collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import { inject, ref } from "vue";


export default defineStore("dataStore", () => {
    const mangas = ref<{id: string; name: string; cover: any; }[]>([]);
    const db = <any>inject("db");

    async function getMangas(){
        mangas.value = [];
try{
    const res = await getDocs(collection(db, "mangas"));
       res.forEach(doc => {
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