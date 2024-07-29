<template>
<div>
    <div class="row">
        <div class="col-1">Nombre:</div>
        <div class="col-2"><input v-model="manga.name" type="text"/></div>
    </div>
    <div class="row">
        <div class="col-1">Descripcion:</div>
        <div class="col-2"><textarea v-model="manga.description"></textarea></div>
    </div>
<!--  -->
<div class="row">
        <div class="col-1">Generos:</div>
        <div class="col-2">
            <label  v-for="t,index of genres" :key="'type'+index" >
                <input type="checkbox" :value="t.id" />
                {{ t.name }}
            </label>
        </div>
    </div>
    <!--  -->
    <div class="row">
        <div class="col-1">Tipo de Manga:</div>
        <label  v-for="t,index of mangaTypes" :key="'type'+index" >
                <input type="checkbox" :value="t.id"  />
                {{ t.name }}
            </label>
    </div>
    <!--  -->
    <div class="row">
        <div class="col-1">Estado del Manga:</div>
        <div class="col-2">
            <label  v-for="t,index of storyStatus" :key="'type'+index" >
                <input type="radio" :value="t.id" />
                {{ t.name }}
            </label>
        </div>
    </div>
    <!--  -->
    <div class="row">
        <div class="col-1">Portada:</div>
        <div class="col-2"><input type="file" @change="(args) => onChangeImg('cover', args)" /></div>
    </div>
    <div class="row">
        <div class="col-1">PREVIEW</div>
        <div class="col-2"><img :src="manga.cover.src" style="max-height: 100px;"/></div>
    </div>
    <!--  -->
    <div class="row">
        <div class="col-1">Banner:</div>
        <div class="col-2"><input type="file" @change="(args) => onChangeImg('banner', args)" /></div>
    </div>
    <div class="row">
        <div class="col-1">PREVIEW</div>
        <div class="col-2"><img :src="manga.banner.src" style="max-height: 100px;"/></div>
    </div>
    <div class="row">
        <button @click="onClick">SAVE</button>
    </div>
</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import {mangaTypes, storyStatus} from "@/core/data";
import useMangaStore from "@/stores/useMangaStore";

const mangaStore = useMangaStore();

async function onClick(){
    console.log("MANGA", manga);
    await mangaStore.saveMangas({...manga});

}
type imgType = 'cover' | 'banner';

function base64ToBlob(base64:any, mimeType:any) {
    const byteCharacters = atob(base64); // Decodifica base64 a una cadena de caracteres binarios
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
}

function onChangeImg(option: imgType, e:any){
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        const base64 = <string>reader.result;
        manga[option].base64 = base64.split(',')[1];
        const blob = base64ToBlob(manga[option].base64, 'image/jpg');
       const waka = URL.createObjectURL(blob)
        // console.log("WAKA", waka, reader.result);
        manga[option].src = waka;
    }

    if(file) reader.readAsDataURL(file);
    // console.log("onChangeImg", option, e.target.files);
}

const manga = reactive({
id: '',
name: '',
description: '',
genres: <string[]>[],
banner: {src: '', base64: ''},
cover: {src: '', base64: ''},
manga_type: 1,
story_status: 1,
});
const genres = ref(<{id: string; name: string;}[]>[])


onMounted(async () => {
const res = await mangaStore.getGenres();
if(res.success)genres.value = res.data;
});

</script>