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
    <div class="row">
        <div class="col-1">Estrellas:</div>
        <div class="col-2"><input v-model="manga.stars" type="number" /></div>
    </div>
    <div class="row">
        <div class="col-1">Vistas:</div>
        <div class="col-2"><input v-model="manga.views" type="number" /></div>
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
                <input type="checkbox" :value="t.id" />
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
        <div class="col-2"><input type="file" /></div>
    </div>
    <!--  -->
    <div class="row">
        <div class="col-1">Banner:</div>
        <div class="col-2"><input type="file" /></div>
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

function onClick(){
    console.log("MANGA", manga);
}

const manga = reactive({
id: '',
name: '',
description: '',
stars: 0,
views: 0,
genres: <string[]>[],
banner: '',
bannerFile:<any>null,
cover: '',
coverFile:<any>null,
manga_type: 1,
story_status: 1,
});
const genres = ref(<{id: string; name: string;}[]>[])

onMounted(async () => {
const res = await mangaStore.getGenres();
if(res.success)genres.value = res.data;
});

</script>