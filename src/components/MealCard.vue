<script setup lang="ts">
defineProps<{
  url: string,
  image: string,
  title: string,
  description: string,
}>()
</script>

<template>
  <article>
    <router-link :to="url" :style="{ backgroundImage: `url(${image})` }">
      <h2><span>{{ title }}</span></h2>
    </router-link>
    <button class="cta">Add to MealPlan</button>
  </article>
</template>

<style scoped>
article {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  opacity: .8;
}

article:hover {
  opacity: 1;
}

a {
  display: block;
  padding-bottom: 50%;
  background-position: center;
  background-size: cover;
}

h2 {
  position: absolute;
  top: 4px;
  left: 4px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

h2 span {
  display: inline-block;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
}

button {
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 12px;
  border-radius: 18px 0 18px 0;
  opacity: .9;
}

button:hover {
  opacity: 1;
}
</style>
