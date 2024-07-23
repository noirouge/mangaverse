<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './core/layouts/NavBar.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
 <NavBar />
  </header>
  <HomeView />
  <!-- <RouterView /> -->
</template>
