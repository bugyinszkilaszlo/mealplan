<script setup lang="ts">
import type { Tip } from '@/types/recipe'

defineProps<{
  tips: Tip[]
}>()
</script>

<template>
  <section class="tips">
    <h2>Tips & Tricks</h2>
    <div class="section-content">
      <ul>
        <li v-for="(tip, index) in tips" :key="index">
          <h3>{{ tip.title }}</h3>
          <p>{{ tip.description }}</p>
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

  .tips {
    grid-area: tips;
  }
}

ul li {
  margin: 24px 0 0 20px;
  list-style-type: decimal;
  font-weight: 600;
}

ul li h3 {
  margin: 0 0 8px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
}

ul li p {
  margin: 0 0 12px 0;
  font-weight: 400;
}
</style>
