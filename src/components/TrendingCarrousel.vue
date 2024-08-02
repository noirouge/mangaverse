<template>

  <div class="trending">
    <div class="carrousel-container">
      <div v-for="trending of mangaStore.mangasTreending" :key="trending.manga_id" class="item"
        v-show="trending.manga_id === mainStore.trendingSelected">
        <Transition name="slide-fade">
          <img v-if="trending.manga_id === mainStore.trendingSelected" :src="trending.bannerUrl" :alt="trending.name">
        </Transition>
        <div class="overlay">
          <div class="tags">
            <div class="tag" :style="{background: getType(trending.type).color }">{{getType(trending.type).name }}</div>
            <div class="tag" :style="{background: getDemography(trending.demography).color }">{{getDemography(trending.demography).name }}</div>
            <div class="tag" :style="{background: getStatus(trending.story_status).color }">{{getStatus(trending.story_status).name }}</div>
          </div>
          <div class="title">
            {{ trending.name }}
          </div>
          <div class="chapters">
            Chapters: {{ trending.chapters }}
          </div>
          <div class="description">
            {{ trending.description }}
          </div>

        </div>

      </div>
      <div class="options">
        <div class="option" v-for="trending, index of mangaStore.mangasTreending" :key="trending.manga_id"
          :class="{ active: trending.manga_id === mainStore.trendingSelected }" @click="mainStore.selectTrending(index); carrouselInterval.refresh();">
        </div>
      </div>
    </div>
    <!-- <TrendingCarrouselList /> -->
    <div class="carrousel-list-container">
      <div class="list-item" :class="{ selected: trending.manga_id === mainStore.trendingSelected }"
        v-for="trending, index of mangaStore.mangasTreending" @click="mainStore.selectTrending(index); carrouselInterval.refresh();">
        <div class="number">
          {{ index + 1 }}
        </div>
        <img :src="trending.coverUrl??'/imgs/portadas/no-found.jpg'" :alt="trending.name + ' portrait'">
        <div class="info">
          <div class="title">
            {{ trending.name }}
          </div>
          <div class="rating">
            <div class="views">
              <IconEye style="height: 15px; width: 15px;" /> {{ trending.visite_ids.length }}
            </div>
            <div class="stars">
              <StarsHandler v-if="trending.stars" :stars="trending.stars"  />
              <StarsHandler v-else :stars="trending.stars"  />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, onUnmounted } from 'vue';
// @ts-ignore
import useMainStore from "@/stores/useMainStore.ts"; 
import IconEye from '@/components/icons/IconEye.vue';
import StarsHandler from '@/components/StarsHandler.vue';
import useMangaStore from '@/stores/useMangaStore';
import { mangaTypes, mangaDemographys, storyStatus } from '@/core/data';
const mainStore = useMainStore();
const mangaStore = useMangaStore();

function getType(id:number){
const res = mangaTypes.find(t => t.id == id);
if(res) return res;
else return {id: 0, name: '', color:'white', orientation: ''};
};

function getDemography(id:number){
const res = mangaDemographys.find(t => t.id == id);
if(res) return res;
else return {id: 0, name: '', color:'white'};
};
function getStatus(id:number){
const res = storyStatus.find(t => t.id == id);
if(res) return res;
else return {id: 0, name: '', color:'white'};
};
// function carrouselScroll(args:any){
// console.log("carrouselScroll", args);
// };
// function waka(){

// }
let carrouselInterval: any;
function setCarouselInterval() {
carrouselInterval = setInterval(() => {
    if (mainStore.trendingTurn < 4) {
      mainStore.trendingTurn++;
    } else mainStore.trendingTurn = 0;
    mainStore.selectTrending(mainStore.trendingTurn);
  }, 5000);
  
};


onMounted(async () => {
  await mainStore.getTrendingData();
  console.log("WAKA", mainStore.trendingData);
  setCarouselInterval();
});

onUnmounted(() => {
  clearInterval(carrouselInterval);
});



</script>

<style scoped>
.trending {
  display: flex;
  /* width: 100vh; */
}

/* CARROUSEL LIST:BEGIN */
.carrousel-list-container {
  max-width: 295px;
  display: flex;
  width: 100%;
  background: #00000075;
  border-radius: 25px;
  margin-left: 5px;
  border-left: solid 3px #0000006e;
  border-bottom: solid 2px #0000006e;
  flex-direction: column;
  justify-content: center;
}

.carrousel-list-container .list-item {
  display: flex;
  margin: 5px;
  position: relative;
  padding-top: 5px;
  align-items: center;
}

.carrousel-list-container .list-item.selected {
  border-radius: 10px;
  background: #ffffff21;
}

.carrousel-list-container .list-item:hover {
  cursor: pointer;
  background: #8080803d;
  border-radius: 10px;
}

.carrousel-list-container .list-item .number {
  display: flex;
  margin: 5px;
  align-items: center;
  font-weight: bold;
  font-size: 35px;
  justify-content: center;
}

.carrousel-list-container .list-item img {
  display: flex;
  height: 75px;
  width: 50px;
  border-radius: 5px;
  border-left: solid 2px black;
  border-bottom: solid 1px black;
}

.carrousel-list-container .list-item .info {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}

.carrousel-list-container .list-item .info .title {
  max-width: 95%;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.carrousel-list-container .list-item .info .rating {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}


.carrousel-list-container .list-item .info .rating .views {
  display: flex;
  align-items: center;
}

.carrousel-list-container .list-item .info .rating .stars {
  display: flex;
  width: 82px;

}


/* CARROUSEL LIST:END */

/* CARROUSEL:BEGIN */
.carrousel-container {
  display: flex;
  border-left: 5px solid #0000009c;
  border-bottom: 4px solid #0000009c;
  border-radius: 25px;
  height: 460px;
  width: 800px;
  position: relative;
  overflow: hidden;
}

.carrousel-container:hover {
  cursor: pointer;
}

.carrousel-container .options {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.carrousel-container .options .option {
  margin: 8px;
  border-radius: 50%;
  background: #b3b3b3;
  width: 10px;
  height: 10px;
  cursor: pointer;
}

.carrousel-container .options .option:hover {
  background: #ffffff;
  width: 12px;
  height: 12px;
}


.carrousel-container .options .option.active {
  background: yellow;
}

.carrousel-container .overlay {
  padding-left: 33px;
  position: absolute;
  height: 222px;
  display: flex;
  width: 100%;
  bottom: 0;
  background: linear-gradient(to top, black, #000000ed, #000000e3, #000000d4, #000000ba, #000000a6, #0000007a, transparent);
  flex-direction: column;
}

.carrousel-container .overlay .tags {
  display: flex;
  margin-top: 0;
}

.carrousel-container .overlay .title {
  font-size: 30px;
  font-family: Trade Winds;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.carrousel-container .overlay .chapters {
  color: #ffffff9e;
  font-size: 12px;
  font-weight: bold;
}

.carrousel-container .overlay .description {
  width: 95%;
  display: -webkit-box;
  /* Soporte para navegadores WebKit */
  -webkit-box-orient: vertical;
  /* Orientación del box en vertical */
  -webkit-line-clamp: 4;
  /* Número de líneas que quieres mostrar */
  overflow: hidden;
  /* Oculta el desbordamiento */
  text-overflow: ellipsis;
}

.carrousel-container .item {
  position: relative;
  height: 100%;
  width: 100%;
}

.carrousel-container .item img {
  height: 100%;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


/* CARROUSEL-MOBILE-VERSION:END */
</style>