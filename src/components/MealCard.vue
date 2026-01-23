<script setup lang="ts"></script>

<template>
  <router-link to="">
    <article>
      <img src="/meals/01.jpg" alt="Name lorem ipsum dolorsitamet" />
      <div>
        <h2>Name lorem ipsum dolorsitamet</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, deserunt.</p>
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
