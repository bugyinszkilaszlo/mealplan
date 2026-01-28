<script setup lang="ts">
import type { Ingredient } from '@/types/recipe'

defineProps<{
  ingredients: Ingredient[]
}>()
</script>

<template>
  <section class="ingredients">
    <h2>Ingredients</h2>
    <div class="section-content">
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">
          <span v-if="ingredient.amount > 0">
            {{ ingredient.amount }} {{ ingredient.unit }}
          </span>
          {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 2rem 0;
}

section h2 {
  margin: 0 0 -7px 20px;
  font-size: 2rem;
}

.section-content {
  padding: 20px;
  background-color: #fafafa;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

@media (min-width: 1024px) {
  section {
    margin: 0;
  }

  .ingredients {
    grid-area: ingredients;
  }
}

ul {
  margin-bottom: 8px;
}

ul li {
  margin: 16px 0 0 20px;
  list-style-type: disc;
}
</style>
