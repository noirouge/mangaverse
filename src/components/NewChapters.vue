<template>
<div class="chapters-container">
    <div class="chapter" v-for="chapter of mainStore.newsData" :key="chapter.id">
        <img :src="chapter.portrait" :alt="chapter.title">
        <div class="overlay">
            <div class="title">
                {{ chapter.title }}
            </div>
            <div class="last-chapter">
                Chapter: {{ chapter.chapter }}
            </div>
            <div class="last-update">
                Last Update: 2 Min Ago
            </div>
        </div> 
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import useMainStore from '@/stores/useMainStore';
const mainStore = useMainStore();


onMounted(() => {
    mainStore.getNewsData();
console.log("NEW", mainStore.newsData);
});
</script>

<style scoped>

.chapters-container{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
}

.chapters-container .chapter{
    display: flex;
    width: 222px;
    /* height: 337px; */
    position: relative;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 15px;
    overflow: hidden;
}

.chapters-container .chapter .overlay{
    display: flex;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, black, #000000eb, #000000d6, #000000b8, #00000094, #00000073, transparent);
    flex-direction: column;
    width: 100%;
    height: 35%;
    align-items: center;
    justify-content: flex-end;
}

.chapters-container .chapter:hover{
   cursor: pointer;
   opacity: 50%;
}

.chapters-container .chapter .overlay .title{
    font-weight: bold;
    font-size: 20px;
    max-width: 90%;
    font-family: none;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chapters-container .chapter .overlay .last-chapter{
    display: flex;
    font-weight: bold;
    background: #00000099;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 15px;
    color: #c3c3c3;
    font-size: 12px;
    margin-bottom: 5px;
}

.chapters-container .chapter .overlay .last-update{
    font-size: 12px;
    font-weight: bolder;
    font-family: none;
    color: #ffffffab;
    margin-bottom: 5px;
}

</style>