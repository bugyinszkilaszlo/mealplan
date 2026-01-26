<script setup lang="ts">
defineProps<{
  url: string,
  image: string,
  title: string,
  description: string,
}>()
</script>

<template>
  <router-link :to="url">
    <article>
      <img :src="image" :alt="title" />
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </article>
  </router-link>
</template>

<style scoped>
a {
  display: block;
  border-radius: 20px;
  overflow: hidden;
  opacity: .8;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

a:hover {
  opacity: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

article {
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-bottom-right-radius: 20px;
}

div {
  padding: 16px;
}

h2 {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
