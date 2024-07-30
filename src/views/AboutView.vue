<template>
    <div class="container-new-manga">
        <div class="row w-100 mb-2 add-manga-title">
            ADD MANGA
        </div>
        <div class="row w-100 mb-2">
            <div class="col-3 img-handler">
                <div>COVER</div>
                <img alt="cover-preview" :src="manga.cover!.src" @click="coverRef.click()" class="cover-img" />
                <input type="file" ref="coverRef" class="img-input" @change="(args) => onChangeImg('cover', args)" />

            </div>
            <div class="col-9 img-handler">
                <div>BANNER</div>
                <img alt="banner-preview" :src="manga.banner!.src" @click="bannerRef.click()" class="banner-img" />
                <input type="file" ref="bannerRef" class="img-input" @change="(args) => onChangeImg('banner', args)" />
            </div>
        </div>
        <div class="row w-100 mb-2">
            <div class="col-10">
                <label for="manga-title" class="form-label">Title</label>
                <input type="text" class="form-control" v-model="manga.name" id="manga-title"
                    placeholder="Write the manga title" aria-describedby="manga-title-msg" />
                <div id="manga-title-msg" class="form-text">Error Message</div>
            </div>
            <div class="col-2">
                <label for="manga-year" class="form-label">Year</label>
                <input type="number" v-model="manga.year" class="form-control" id="manga-year" placeholder="Year..."
                    aria-describedby="manga-year-msg" />
                <div id="manga-year-msg" class="form-text">Error Message</div>
            </div>
        </div>
        <div class="row w-100 mb-2">
            <div class="col">
                <label for="manga-description" class="form-label">Description</label>
                <textarea type="text" v-model="manga.description" class="form-control" id="manga-description"
                    placeholder="Write the manga description" aria-describedby="manga-description-msg">
                </textarea>
                <div id="manga-description-msg" class="form-text">Error Message</div>
            </div>
        </div>
        <div class="row w-100 mb-2">
            <div class="col-4">
                <label for="manga-type" class="form-label">Type</label>
                <select class="form-select" v-model="manga.type" id="manga-type" placeholder="Select Type"
                    aria-describedby="manga-title-msg">
                    <option :value="0">Select Type...</option>
                    <option v-for="t of mangaTypes" :key="t.id" :value="t.id">{{ t.name }}</option>
                </select>
                <div id="manga-type-msg" class="form-text">Error Message</div>
            </div>
            <div class="col-4">
                <label for="manga-demography" class="form-label">Demography</label>
                <select class="form-select" v-model="manga.demography" id="manga-demography"
                    placeholder="Select demography" aria-describedby="manga-demography-msg">
                    <option :value="0">Select Demography...</option>
                    <option v-for="d of mangaDemographys" :key="d.id" :value="d.id">{{ d.name }}</option>
                </select>
                <div id="manga-demography-msg" class="form-text">Error Message</div>
            </div>
            <div class="col-4">
                <label for="manga-status" class="form-label">Status</label>
                <select class="form-select" v-model="manga.story_status" id="manga-status" placeholder="Select status"
                    aria-describedby="manga-status-msg">
                    <option :value="0">Select Status...</option>
                    <option v-for="s of storyStatus" :key="s.id" :value="s.id">{{ s.name }}</option>
                </select>
                <div id="manga-status-msg" class="form-text">Error Message</div>
            </div>
        </div>
        <div class="row w-100 mb-2">
            <div class="col">
                <label for="manga-categories" class="form-label">Categories</label>
                <div class="row" id="manga-categories">
                    <div class="category-tag" v-for="cat of dataStore.categories"
                        :class="{ selected: manga.genres.includes(cat.id) }" @click="setCategory(cat.id)">{{ cat.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row w-100 mb-2 add-tools-title">
            <button class="btn btn-primary" @click="onSave">SAVE</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { mangaTypes, storyStatus, mangaDemographys } from "@/core/data";
import useMangaStore from "@/stores/useMangaStore";
import type { IManga } from "@/interfaces/index";
import useDataStore from '@/stores/useDataStore';
const dataStore = useDataStore();
const mangaStore = useMangaStore();
const bannerRef = ref();
const coverRef = ref();
const sizes = reactive({
    cover: { width: 200, heigth: 300 },
    banner: { width: 600, heigth: 300 },
});
async function onSave() {
    console.log("MANGA", manga);
    await mangaStore.saveMangas({ ...manga });
    clearManga();
}

function setCategory(id: string) {
    if (manga.genres.includes(id)) manga.genres.splice(manga.genres.findIndex(g => g == id), 1);
    else manga.genres.push(id);
}
type imgType = 'cover' | 'banner';

function base64ToBlob(base64: any, mimeType: any,) {
    const byteCharacters = atob(base64); // Decodifica base64 a una cadena de caracteres binarios
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
}

function clearManga() {

    manga.id = '';
    manga.name = '';
    manga.description = '';
    manga.genres = <string[]>[];
    manga.banner = { src: '/imgs/portadas/no-found.jpg', base64: '', blob: <any>null };
    manga.cover = { src: '/imgs/portadas/no-found.jpg', base64: '', blob: <any>null };
    manga.bannerUrl = '';
    manga.coverUrl = '';
    manga.created_date = 0;
    manga.updated_date = 0;
    manga.demography = 0;
    manga.status = 0;
    manga.type = 0;
    manga.year = date.getFullYear();
    manga.story_status = 0;

};

function onChangeImg(option: imgType, e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        const img = new Image();
        let base64 = "";
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = sizes[option].width;
            canvas.height = sizes[option].heigth;
            ctx!.drawImage(img, 0, 0, sizes[option].width, sizes[option].heigth);
            base64 = canvas.toDataURL('image/jpeg', 1); //quality
            // console.log("NEW BASE 64", base64);

            manga[option]!.base64 = base64.split(',')[1];
            const blob = base64ToBlob(manga[option]!.base64, 'image/jpg');
            manga[option]!.blob = blob;
            const urlIMG = URL.createObjectURL(blob)
            manga[option]!.src = urlIMG;
        };
        base64 = <string>reader.result;
        img.src = base64;
        // console.log("OLD BASE 64", base64);
    }

    if (file) reader.readAsDataURL(file);
    // console.log("onChangeImg", option, e.target.files);
}
const date = new Date;
const manga = reactive<IManga>({
    id: '',
    name: '',
    description: '',
    genres: <string[]>[],
    banner: { src: '/imgs/portadas/no-found.jpg', base64: '', blob: <any>null },
    cover: { src: '/imgs/portadas/no-found.jpg', base64: '', blob: <any>null },
    bannerUrl: '',
    coverUrl: '',
    // banner64: '',
    // cover64: '',
    created_date: 0,
    updated_date: 0,
    demography: 0,
    status: 0,
    type: 0,
    year: date.getFullYear(),
    story_status: 0,
});
const genres = ref(<{ id: string; name: string; }[]>[])


onMounted(async () => {
    const res = await mangaStore.getGenres();
    if (res.success) genres.value = res.data;
});

</script>

<style scoped>
.img-input {
    /* visibility: hidden; */
    display: none;
}

.cover-img {
    height: 350px;
    max-width: 250px;
}

.cover-img:hover {
    height: 360px;
    opacity: 50%;
    cursor: pointer;
}

.banner-img {
    height: 350px;
    width: 100%;
}

.banner-img:hover {
    height: 360px;
    opacity: 50%;
    cursor: pointer;
}

.container-new-manga {
    width: 100%;
    background: #ffffff0d;
    border-radius: 50px;
    display: flex;
    padding: 25px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.img-handler {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.add-manga-title {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    border-bottom: solid 2px #ffffff2e;
}

.category-tag {
    display: flex;
    height: 30px;
    border: solid 1px #737373;
    width: fit-content;
    background: #494949ab;
    border-radius: 15px;
    margin-left: 5px;
    font-weight: bold;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
}

.category-tag:hover {
    cursor: pointer;
    background: #ffffff !important;
    color: #000000cc;
    border-width: 2px;
}

.category-tag.selected {
    background: #7e7e7e;
}

.add-tools-title {
    display: flex;
}
</style>