import { defineStore } from "pinia";
import { ref } from "vue";
import useExampleData from "@/core/example/useExampleData";

interface ITrendingDataTag{
name: string;
color: string;
}

interface INewData{
    id: number;
    title: string;
    chapter: number;
    date: string;
    portrait: string;
}

interface ITrendingData{
    id: number;
    views: number;
    stars: number;
    title: string;
    chapters: number;
    description: string;
    tags: ITrendingDataTag[];
    portrait: string;
    cover: string;
};

interface IReadingData{
id: number;
title: string;
chapter: number;
pages: number;
page: number;
preview: string;
};
const useMainStore = defineStore("useMainStore", () => {

    const {trendingCarrouselData, continueReadingData, newChaptersData} = useExampleData();


    const trendingData = ref<ITrendingData[]>([]);
    const trendingDataSelected = ref<ITrendingData>(trendingData.value[0]);
    const trendingTurn = ref(0);
    const readingData = ref<IReadingData[]>([]);
    const newsData = ref<INewData[]>([]);

    const getTrendingData = async () => {
        trendingData.value = trendingCarrouselData;
        trendingDataSelected.value = trendingData.value[0];
    };

    const getReadingData = async () => {
        readingData.value = continueReadingData;
        // readingDataSelected.value = readingData.value[0];
    };

    const getNewsData = async () => {
        newsData.value = newChaptersData;
    };
    
    const selectTrending = (index: number) => {
        trendingTurn.value = index;
        trendingDataSelected.value = trendingData.value[trendingTurn.value];
    };
    
    
    
    
    const cleanAllData = () => {
        trendingData.value = [];
        trendingDataSelected.value = <any>{};
        trendingTurn.value = 0;
        readingData.value = [];
        newsData.value = [];
        // readingDataSelected.value = <any>{};
    };


    // VISITOR:BEGIN

    //VISITOR:END


return{
    trendingData,
    trendingTurn,
    trendingDataSelected,
    readingData,
    newsData,
    // readingDataSelected,
    getTrendingData,
    cleanAllData,
    selectTrending,
    getReadingData,
    getNewsData,
};
});

export default useMainStore;

