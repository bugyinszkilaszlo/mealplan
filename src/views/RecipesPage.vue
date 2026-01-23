<script setup lang="ts">
import MealCard from '@/components/MealCard.vue';


</script>

<template>
  <h1>Recipes</h1>

  <ul>
    <li><MealCard /></li>
    <li><MealCard /></li>
    <li><MealCard /></li>
    <li><MealCard /></li>
    <li><MealCard /></li>
    <li><MealCard /></li>
    <li><MealCard /></li>
    <li><MealCard /></li>
  </ul>
</template>

<style scoped>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
    list-style: none;
    padding: 0;
  }
</style>
