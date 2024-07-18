<template>
    <div class="preview-continue-reading">
        <div class="item" v-for="reading of mainStore.readingData" :key="reading.id">
            <img :src="reading.preview" :alt="reading.title" width="100%" />
            <div class="overlay">
                <div class="info">
                    <div class="title">
                        {{ reading.title }}
                    </div>
                    <div class="chapter">
                        Chapter: {{ reading.chapter }}
                    </div>
                    <div class="pages">
                        Page: {{ reading.page }}/{{ reading.pages }}
                    </div>
                    <div class="percentage-bar">
                        <PercentageBar :page="reading.page" :pages="reading.pages" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

<h1>WAKA</h1>
</template>

<script setup lang="ts">
import useMainStore from '@/stores/useMainStore';
import PercentageBar from '@/components/PercentageBar.vue';
import { onMounted } from 'vue';
const mainStore = useMainStore();


onMounted(() => {
    mainStore.getReadingData();
})

</script>

<style scoped>
.preview-continue-reading{
    border-radius: 15px;
    display: flex;
    height: 400px;
    justify-content: space-around;
}

.preview-continue-reading .item{
    display: flex;
    flex-direction: column;
    width: 260px;
    height: 375px;
    overflow: hidden;
    border-radius: 25px;
    position: relative;
    /* border-bottom: solid 2px #6565651f;
    border-left: solid 3px #6565651f; */
    border: solid #0000004a 2px;
}

.preview-continue-reading .item:hover{
    cursor: pointer;
}

.preview-continue-reading .item img{
    display: flex;
    height: 100%;
}

.preview-continue-reading .item .overlay{
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #3b3b3bbd;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.preview-continue-reading .item .overlay:hover{
    background: transparent;
}

.preview-continue-reading .item .overlay .info{
    height: 30%;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: linear-gradient(to top, black, #000000cc, #000000ad, transparent);
    justify-content: center;
}

.preview-continue-reading .item .overlay .info .title{
    max-width: 90%;
    font-weight: bold;
    font-size: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}

.preview-continue-reading .item .overlay .info .chapter{
    font-size: 14px;
    color: #818181;
    font-weight: bold;
}

.preview-continue-reading .item .overlay .info .pages{
    font-size: 12px;
    font-weight: bold;
}

.preview-continue-reading .item .overlay .info .percentage-bar{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}

</style>