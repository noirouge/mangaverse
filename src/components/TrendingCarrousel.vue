<template>

  <div class="trending">
    <div  class="carrousel-container">
      <div v-for="trending of mainStore.trendingData" :key="trending.id" class="item" v-show="trending.id === mainStore.trendingDataSelected.id">
        <img :src="trending.cover" :alt="trending.title">
        <div class="overlay">
          <div class="tags">
            <div v-for="tag of trending.tags" :key="tag.name" class="tag" :style="{background: tag.color}">{{ tag.name }}</div>
          </div>
          <div class="title">
            {{ trending.title }}
          </div>
          <div class="chapters">
             Chapters: {{ trending.chapters }}
          </div>
          <div class="description">
            {{ trending.description }}
          </div>
          
        </div>
        
      </div>
      <div class="options" >
      <div class="option" 
      v-for="trending, index of mainStore.trendingData" 
      :key="trending.id" 
      :class="{active: trending.id === mainStore.trendingDataSelected.id}"
      @click="mainStore.selectTrending(index)"
      ></div>
      </div>
    </div>
    <TrendingCarrouselList />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import TrendingCarrouselList from '../components/TrendingCarrouselList.vue';
import useMainStore from "@/stores/useMainStore.ts";
const mainStore = useMainStore();
// function carrouselScroll(args:any){
// console.log("carrouselScroll", args);
// };
const waka = ref(1);

// function waka(){

// }

onMounted(async () => {
  await mainStore.getTrendingData();
  console.log("WAKA", mainStore.trendingData);
});




</script>

<style scoped>
/* CARROUSEL:BEGIN */



.trending{
  display: flex;
  /* width: 100vh; */
}

  .carrousel-container{
    display: flex;
    border-left: 5px solid #0000009c;
    border-bottom: 4px solid #0000009c;
    border-radius: 25px;
    height: 460px;
    width: 800px;
    position: relative;
    overflow: hidden;
  }

  .carrousel-container .options{
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
  .carrousel-container .options .option{
    margin: 8px;
    border-radius: 50%;
    background: #b3b3b3;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
  .carrousel-container .options .option:hover{
    background: #ffffff;
    width: 12px;
    height: 12px;
  }


  .carrousel-container .options .option.active{
    background: yellow;
  }

  .carrousel-container .overlay{
    padding-left: 33px;
    position: absolute;
    height: 222px;
    display: flex;
    width: 100%;
    bottom: 0;
    background: linear-gradient(to top, black, #000000ed, #000000e3, #000000d4, #000000ba, #000000a6, #0000007a, transparent);
    flex-direction: column;
  }

  .carrousel-container .overlay .tags{
    display: flex;
    margin-top: 40px;
  }

  .carrousel-container .overlay .title{
    font-size: 30px;
    font-family: Trade Winds;
  }

  .carrousel-container .overlay .chapters{
    color: #ffffff9e;
    font-size: 12px;
    font-weight: bold;
  }
  
  .carrousel-container .overlay .description{
    width: 95%;
    display: -webkit-box;          /* Soporte para navegadores WebKit */
    -webkit-box-orient: vertical; /* Orientación del box en vertical */
    -webkit-line-clamp: 4;        /* Número de líneas que quieres mostrar */
    overflow: hidden;             /* Oculta el desbordamiento */
    text-overflow: ellipsis;
  }

  .carrousel-container .item{
    position: relative;
    height: 100%;
    width: 100%;
  }

  .carrousel-container .item img{
    height: 100%;
    width: 100%;
  }
/* CARROUSEL-MOBILE-VERSION:END */
</style>