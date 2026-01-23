<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import TopNav from './components/TopNav.vue';
  import BottomFooter from './components/BottomFooter.vue';
</script>

<template>
  <TopNav />
  <main>
    <RouterView />
  </main>
  <BottomFooter />
</template>

<style scoped>
  main {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
