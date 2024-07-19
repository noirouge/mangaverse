<template>
<div class="bar">
    <div class="percentage" :style="{width: percentage+'%'}"></div>
</div>
</template>

<script setup>
import {defineProps, onMounted, ref } from 'vue';

const props = defineProps({
    page: {
        required: true,
        type: Number,
    },
    pages: {
        required: true,
        type: Number,
    }
});

const percentage = ref(0);

onMounted(() => {
console.log("ON MOUNTED", );
percentage.value = (props.page/props.pages)*100;
});

</script>

<style scoped>
.bar{
    height: 5px;
    width: 90%;
    border-radius: 5px;
    background: gray;
}

.percentage{
    height: 5px;
    width: 38%;
    border-radius: 5px;
    background: #247cff;
}
</style>