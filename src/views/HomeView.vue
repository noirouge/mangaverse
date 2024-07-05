<script setup lang="ts">
import TrendingCarrousel from "../components/TrendingCarrousel.vue"
import PreviewContinueReading from "../components/PreviewContinueReading.vue"
</script>

<template>
  <main>
    <div class="container">
      <div class="main-section">
        <div class="main-title">
          TRENDING
        </div>
        <div class="main-content">
          <TrendingCarrousel />
        </div>
        <div class="main-title">
          CONTINUE READING
        </div>
        <div class="main-content">
          <PreviewContinueReading />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
