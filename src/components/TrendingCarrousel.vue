<template>
  <div class="trending">
    <div class="trending-carrousel">
      <div class="carrousel-img" id="carrousel-img">
        <div class="img" v-for="item in trendingCarrouselData" :key="item.id">
          <img :alt="item.title" :src="item.cover" />
        </div>
      </div>
      <div class="carrousel-overlay">
        <div class="carrousel-content">
          <div class="carrousel-content-tags">
            <div v-for="tag,index of trendingSelected.tags" :key="tag.name" class="tag" style="background: #1464FF; margin-left: 0;" :style="{background: tag.color, 'margin-left': (!index?0:'10px')}">{{ tag.name }}</div>
          </div>
          <div class="carrousel-content-title">
           {{ trendingSelected.title }}
          </div>
          <div class="carrousel-content-chapters">
            Chapters: {{ trendingSelected.chapters }}
          </div>
          <div class="carrousel-content-info">
            {{ trendingSelected.description }}
          </div>
          <div class="carrousel-content-points" style="padding-left: 0">
            <div class="carrousel-content-point" :class="{selected: trendingSelected.id === 1}"></div>
            <div class="carrousel-content-point" :class="{selected: trendingSelected.id === 2}"></div>
            <div class="carrousel-content-point" :class="{selected: trendingSelected.id === 3}"></div>
            <div class="carrousel-content-point" :class="{selected: trendingSelected.id === 4}"></div>
            <div class="carrousel-content-point" :class="{selected: trendingSelected.id === 5}"></div>

          </div>
        </div>
      </div>
    </div>
    <TrendingCarrouselList />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import TrendingCarrouselList from '../components/TrendingCarrouselList.vue'
import useExampleData from '../core/example/useExampleData.ts'
const { trendingCarrouselData } = useExampleData();
const carrouselImgContainer = ref<any>(null);
const trendingSelected = reactive({
id: trendingCarrouselData[0].id,
chapters: trendingCarrouselData[0].chapters,
description: trendingCarrouselData[0].description,
portrait: trendingCarrouselData[0].portrait,
stars: trendingCarrouselData[0].stars,
tags: trendingCarrouselData[0].tags,
title: trendingCarrouselData[0].title,
views: trendingCarrouselData[0].views,
cover: trendingCarrouselData[0].cover,
});

function carrouselScroll(args:any){
console.log("carrouselScroll", args);
};


onMounted(() => {
  carrouselImgContainer.value = document.getElementById('carrousel-img');
  // carrouselImgContainer.value.scrollLeft = 10;
  carrouselImgContainer.value.onscroll = carrouselScroll;
  // carrouselImgContainer.value.ondrag = (e: any) => onCarrouselMouseEvent("ondrag", e);
  // carrouselImgContainer.value
  console.log("MONTADO", carrouselImgContainer.value);
});

</script>

<style scoped>
/* CARROUSEL:BEGIN */
.trending {
  display: flex;
}

.trending-carrousel {

  display: flex;
  width: 800px;
  height: 450px;
}

.carrousel-img {
  overflow: hidden;
  display: flex;
  width: 790px;
  height: 449px;
  border-radius: 25px;
  border-left: solid 3px rgba(0, 0, 0, 0.495);
  border-bottom: solid 5px rgba(0, 0, 0, 0.705);
}

.carrousel-img .img {
  position: relative;
  left: 0px;
  width: 796px;
  height: 450px;
}

.carrousel-img img {
  height: 450px;
  width: max-content;
  border-radius: 25px;
  border-left: solid 3px rgba(0, 0, 0, 0.495);
  border-bottom: solid 5px rgba(0, 0, 0, 0.705);
}

.carrousel-overlay {
  pointer-events: none;
  position: absolute;
  height: 450px;
  align-content: flex-end;
}

.carrousel-content {
  padding-bottom: 10px;
  border-radius: 0 0 25px 25px;
  height: 235px;
  width: 795px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.662), rgba(0, 0, 0, 0.849), black);
  align-content: flex-end;
}

/* .carrousel-content *{
  margin-left: 10px;
} */

.carrousel-content-title {
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 58%;
    margin-left: 10px;
    font-size: 28px;
    /* font-weight: bold; */
    font-family: 'Trade Winds';
}

.carrousel-content-chapters {
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  color: #ffffffc7;
  width: fit-content;
  padding: 1px 5px;
  border-radius: 25px;
  background: rgb(255 255 255 / 14%);
}

.carrousel-content-info {
  height: 80px;
  margin-left: 10px;
  color: rgb(211, 211, 211);
}

.carrousel-content-points {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carrousel-content-point {
  background: #6d6d6d80;
  margin-left: 5px;
  height: 10px;
  width: 10px;
  border-radius: 50px;
}

.carrousel-content-point.selected {
  background: rgba(255, 255, 0, 0.516);
}

.carrousel-content-tags {
  margin-left: 10px;
  display: flex;
}

/* .trending-carrousel img {
  width: max-content;
    border-radius: 25px;
    border-left: solid 3px rgba(0, 0, 0, 0.495);
    border-bottom: solid 5px rgba(0, 0, 0, 0.705);
} */

/* CARROUSEL:END */
/* CARROUSEL-MOBILE-VERSION:BEGIN */
@media only screen and (max-width: 600px){
  .carrousel-img{
    overflow: auto;
  }
}
/* CARROUSEL-MOBILE-VERSION:END */
</style>