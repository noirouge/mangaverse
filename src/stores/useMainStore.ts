import { defineStore } from "pinia";
import { ref } from "vue";
import useExampleData from "@/core/example/useExampleData";

interface ITrendingDataTag{
name: string;
color: string;
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
const useMainStore = defineStore("useMainStore", () => {

    const {trendingCarrouselData} = useExampleData();


    const trendingData = ref<ITrendingData[]>([]);
    const trendingDataSelected = ref<ITrendingData>(trendingData.value[0]);
    const trendingTurn = ref(0);
    const getTrendingData = async () => {
        trendingData.value = trendingCarrouselData;
        trendingDataSelected.value = trendingData.value[0];
    };

    const cleanAllData = () => {
        trendingData.value = [];
    };

    const selectTrending = (index: number) => {
        trendingTurn.value = index;
        trendingDataSelected.value = trendingData.value[trendingTurn.value];
    };


return{
    trendingData,
    trendingTurn,
    trendingDataSelected,
    getTrendingData,
    cleanAllData,
    selectTrending,
};
});

export default useMainStore;

