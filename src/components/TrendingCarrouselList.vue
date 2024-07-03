<template>
 <div class="trending-list">
              <div class="trending-list-item" v-for="item,index of trendingCarrouselData" :class="{selected: !index}"  :key="item.id">
                <div class="list-item-number">
                   {{ item.id }}
                </div>
                <div class="list-item-photo">
                    <img :src="item.portrait" />
                </div>
                <div class="list-item-content">
                    <div class="list-item-content-title">
                      {{ item.title }}
                    </div>
                    <div class="list-item-content-rate">
                        <div class="list-item-content-rate-views">
                           <IconEye style="height: 100%;"/> {{ item.views }}
                        </div>
                        <div class="list-item-content-rate-stars">
                          <IconStarFull style="height: 100%;" />
                          <IconStarFull style="height: 100%;"/>
                          <IconStarFull style="height: 100%;"/>
                          <IconStarHalf style="height: 100%;"/>
                          <IconStarEmpty style="height: 100%;"/>

                          <!-- <IconStarHalf /> -->
                          <!-- <IconStarEmpty /> -->

                        </div>
                    </div>
                </div>
              </div>
            </div>

</template>

<script setup lang="ts">
import IconStarFull from './icons/IconStarFull.vue';
import IconStarEmpty from './icons/IconStarEmpty.vue';
import IconStarHalf from './icons/IconStarHalf.vue';
import IconEye from './icons/IconEye.vue';
import useExampleData from '../core/example/useExampleData.ts'

const { trendingCarrouselData } = useExampleData();

</script>


<style scoped>
/* LIST:BEGIN */
.trending-list {
  border-left: solid 1px #00000063;
    border-bottom: solid 2px #00000047;
  border-radius: 25px;
    background: #00000070;
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: center;
    height: 450px;
}
.trending-list-item{
    padding: 3px;
    margin-top: 5px;
    border-radius: 15px;
    width: 95%;
    height: 75px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.trending-list-item.selected{
    background: #ffffff0d;
}

.list-item-number{
    display: flex;
    width: 50px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
}

.list-item-photo{
    height: 75px;
    width: 76px;
}

.list-item-photo img{
    border-left: solid 3px #00000087;
    border-radius: 5px;
    width: 50px;
    height: 100%;
    display: flex;
    border-bottom: solid 2px #0000008c;
}

.list-item-content{
    height: 71%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
}

.list-item-content-title{
    width: 100%;
    display: flex;
    justify-content: center;
}

.list-item-content-rate{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.list-item-content-rate-views{
    height: 17px;
    display: flex;
    align-items: center;
}

.list-item-content-rate-stars{
    height: 15px;
    display: flex;
}

/* LIST:END */

</style>