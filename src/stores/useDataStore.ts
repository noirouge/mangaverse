import { collection, getDocs, where, query } from "firebase/firestore";
import { defineStore } from "pinia";
import { inject, ref } from "vue";
import type { IBasicName } from "@/interfaces";

export default defineStore("dataStore", () => {
    const mangas = ref<{id: string; name: string; cover: any; }[]>([]);
    const categories = ref<IBasicName[]>([]);
    const db = <any>inject("db");

    async function getMangas(){
        mangas.value = [];
try{
    const q = query(collection(db, "mangas"), where("status", "==", "1"));
    console.log("Q", q);
    const res = await getDocs(q);
       res.forEach(doc => {
        // console.log("WAKA", doc.data());
        const docData = doc.data();
        mangas.value.push({id: doc.id, name: docData.name, cover: docData.cover})
       });
}catch(err){
    console.log("ERROR AL CARGAR MANGAS", err);
}
    };

    async function getCategories(){
        categories.value = [];
        try{
            const res = await getDocs(collection(db, "categories"));
               res.forEach(doc => {
                // console.log("WAKA", doc.data());
                const docData = doc.data();
                categories.value.push({id: doc.id, name: docData.name})
               });
        }catch(err){
            console.log("ERROR AL CARGAR CATEGORIAS", err);
        }
    }

    return{
        getMangas,
        mangas,
        getCategories,
        categories,
    }
});