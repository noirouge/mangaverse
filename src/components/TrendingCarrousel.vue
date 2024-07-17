<template>

  <div class="trending">
    <div  class="carrousel-container">
      <div v-for="trending of mainStore.trendingData" :key="trending.id" class="item" v-show="trending.id === mainStore.trendingDataSelected.id">
        <Transition name="slide-fade">
          <img v-if="trending.id === mainStore.trendingDataSelected.id" :src="trending.cover" :alt="trending.title">
        </Transition>
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
    <!-- <TrendingCarrouselList /> -->
    <div class="carrousel-list-container">
<div class="list-item" :class="{selected: trending.id === mainStore.trendingDataSelected.id}" v-for="trending, index of mainStore.trendingData" @click="mainStore.selectTrending(index)">
  <div class="number">
    {{ index + 1 }}
  </div>
  <img :src="trending.portrait" :alt="trending.title + ' portrait'">
  <div class="info">
    <div class="title">
      {{ trending.title }}
    </div>
    <div class="rating">
      <div class="views"><IconEye style="height: 75%;" /> {{ trending.views }}</div>
      <div class="stars">
<StarsHandler style="height: 75%;" />
<StarsHandler style="height: 75%;" />
<StarsHandler style="height: 75%;" />
<StarsHandler style="height: 75%;" />
<StarsHandler style="height: 75%;" />
      </div>
    </div>
  </div>
  <!-- <div class="list-item-selected" v-if="trending.id === mainStore.trendingDataSelected.id"></div> -->
</div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, onUnmounted } from 'vue';
import useMainStore from "@/stores/useMainStore.ts";
import IconEye from '@/components/icons/IconEye.vue';
import StarsHandler from '@/components/StarsHandler.vue';
const mainStore = useMainStore();
// function carrouselScroll(args:any){
// console.log("carrouselScroll", args);
// };
// function waka(){

// }
let carrouselInterval:any;
function setCarouselInterval(){
carrouselInterval = setInterval(() => {
  if(mainStore.trendingTurn < 4){
    mainStore.trendingTurn++;
  }else mainStore.trendingTurn = 0;
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
.trending{
  display: flex;
  /* width: 100vh; */
}

/* CARROUSEL LIST:BEGIN */
.carrousel-list-container{
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

.carrousel-list-container .list-item{
  display: flex;
    margin: 5px;
    position: relative;
    padding-top: 5px;
    align-items: center;
}

.carrousel-list-container .list-item.selected{
  border-radius: 10px;
    background: #ffffff21;
}

.carrousel-list-container .list-item:hover{
  cursor: pointer;
    background: #8080803d;
    border-radius: 10px;
}

.carrousel-list-container .list-item .number{
  display: flex;
  margin: 5px;
    align-items: center;
    font-weight: bold;
    font-size: 35px;
    justify-content: center;
}

.carrousel-list-container .list-item img{
  display: flex;
  height: 75px;
  width: 50px;
  border-radius: 5px;
  border-left: solid 2px black;
    border-bottom: solid 1px black;
}

.carrousel-list-container .list-item .info{
  display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    justify-content: center;
}

.carrousel-list-container .list-item .info .title{
  display: flex;
  font-weight: bold;
}

.carrousel-list-container .list-item .info .rating{
  display: flex;
  width: 100%;
    justify-content: space-evenly;
}


.carrousel-list-container .list-item .info .rating .views{
  display: flex;
  align-items: center;
}

.carrousel-list-container .list-item .info .rating .stars{
  display: flex;
  align-items: center;
}


/* CARROUSEL LIST:END */

/* CARROUSEL:BEGIN */
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

  .carrousel-container:hover{
    cursor: pointer;
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
    margin-top: 0;
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