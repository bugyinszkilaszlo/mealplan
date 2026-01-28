<script setup lang="ts">
import type { Instruction } from '@/types/recipe'

defineProps<{
  instructions: Instruction[]
}>()
</script>

<template>
  <section class="instructions">
    <h2>Instructions</h2>
    <div class="section-content">
      <ol>
        <li v-for="(instruction, index) in instructions" :key="index">
          <h3>{{ instruction.title }}</h3>
          <p>{{ instruction.description }}</p>
        </li>
      </ol>
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

  .instructions {
    grid-area: instructions;
  }
}

ol li {
  margin: 24px 0 0 20px;
  list-style-type: decimal;
  font-weight: 600;
}

ol li h3 {
  margin: 0 0 8px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
}

ol li p {
  margin: 0 0 12px 0;
  font-weight: 400;
}
</style>
