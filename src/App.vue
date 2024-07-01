<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './core/layouts/NavBar.vue';
</script>

<template>
  <header>
 <NavBar />
  </header>

  <RouterView />
</template>

<style >
/* @import './assets/main.css'; */

</style>
