<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './core/layouts/NavBar.vue';
import HomeView from './views/HomeView.vue';
import { onMounted, inject } from 'vue';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import useDataStore from "@/stores/useDataStore";

const dataStore = useDataStore();
onMounted(async () => {
 await dataStore.getMangas();
 await dataStore.getCategories();
 console.log("MOUNTED", dataStore.mangas);
})

</script>

<template>
  <header>
 <NavBar />
  </header>
  <!-- <HomeView /> -->
  <div class="container">
    <RouterView />
  </div>
</template>
