<template>
    <div class="d-flex">
        <div v-for="star, index of allStars" class="star" :key="index">
            <IconStarFull v-if="star === 'full'" style="width: 100%; height: 100%;" />
            <IconStarHalf v-else-if="star === 'half'" style="width: 100%; height: 100%;"/>
            <IconStarEmpty  v-else-if="star === 'empty'" style="width: 100%; height: 100%;"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconStarFull from './icons/IconStarFull.vue';
import IconStarEmpty from './icons/IconStarEmpty.vue';
import IconStarHalf from './icons/IconStarHalf.vue';
import { onMounted, defineProps, ref } from 'vue';

const props = defineProps({
    stars: {
        required: true,
        type: Number,
    }
})

type starTypes = "full" | "half" | "empty";

const allStars = ref<starTypes[]>([])

onMounted(() => {
    console.log("STARS", props.stars,props.stars%1,props.stars - props.stars%1);
    // props.stars.
    const starsINT = props.stars - props.stars%1;
    const isStarHalf = !!(props.stars%1);
    console.log("ENTEROS", starsINT);
    console.log("MITAD", isStarHalf);

    for(let i = 0; i < 5; i++){
        if(i < starsINT)allStars.value.push("full");
        else if(i === starsINT && isStarHalf)allStars.value.push("half");
        else allStars.value.push("empty");
    };

    console.log("FULL STARS", allStars.value);

})

</script>

<style scoped>

.star{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>