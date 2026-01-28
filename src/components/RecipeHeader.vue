<script setup lang="ts">
defineProps<{
  title: string
  imageUrl: string
  prepTime: string
  cookTime: string
  servings: number
  difficulty: string
}>()
</script>

<template>
  <header :style="{ backgroundImage: `url(${imageUrl})` }">
    <h1><span>{{ title }}</span></h1>
    <div class="recipe-meta">
      <div class="meta-item">
        <strong>Prep Time</strong><span>{{ prepTime }}</span>
      </div>
      <div class="meta-item">
        <strong>Cook Time</strong><span>{{ cookTime }}</span>
      </div>
      <div class="meta-item">
        <strong>Servings</strong><span>{{ servings }} ppl</span>
      </div>
      <div class="meta-item">
        <strong>Difficulty</strong><span>{{ difficulty }}</span>
      </div>
    </div>
    <button class="cta">Add to MealPlan</button>
  </header>
</template>

<style scoped>
header {
  position: relative;
  margin: 1rem 0;
  padding-top: 150%;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

h1 {
  position: absolute;
  top: 10px;
  right: 10px;
  left: 10px;
  margin: 0;
  padding: 0;
  font-size: 2rem;
}

h1 span {
  display: block;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.recipe-meta {
  position: absolute;
  bottom: 60px;
  right: 10px;
  left: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 16px;
  color: #fafafa;
  background-color: rgba(160, 160, 160, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.meta-item {
  text-align: center;
  font-size: .8rem;
}

.meta-item strong {
  display: inline-block;
  font-weight: 400;
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--accent-color);
}

.meta-item span {
  display: block;
}

button {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  border-radius: 0 0 18px 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0.8;
}

button:hover {
  opacity: 1;
}

@media (min-width: 576px) {
  header {
    padding-top: 100%;
  }

  h1 {
    right: auto;
  }

  h1 span {
    border-radius: 18px 0 18px 0;
  }

  .recipe-meta {
    left: auto;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 576px) {
  button {
    right: auto;
    border-radius: 0 18px 0 18px;
  }

  .recipe-meta {
    bottom: 10px;
    border-radius: 18px 0 18px 0;
  }
}

@media (min-width: 768px) {
  header {
    padding-top: 75%;
  }

  h1 span {
    display: inline-block;
  }
}

@media (min-width: 1024px) {
  header {
    padding-top: 50%;
  }
}

@media (min-width: 1200px) {
  header {
    padding-top: 40%;
  }
}
</style>
