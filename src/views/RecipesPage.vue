<script setup lang="ts">
import MealCard from '@/components/MealCard.vue';

const demoData = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
    image: '/meals/01.jpg',
    url: '#nogo',
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    description: 'Tender chicken in a creamy, spiced tomato sauce with aromatic herbs.',
    image: '/meals/02.jpg',
    url: '#nogo',
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    description: 'Fresh vegetables tossed in a savory sauce with ginger and garlic.',
    image: '/meals/03.jpg',
    url: '#nogo',
  },
  {
    id: 4,
    title: 'Beef Tacos',
    description: 'Seasoned ground beef in crispy shells with lettuce and cheese.',
    image: '/meals/04.jpg',
    url: '#nogo',
  },
  {
    id: 5,
    title: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan, croutons, and creamy dressing.',
    image: '/meals/05.jpg',
    url: '#nogo',
  },
  {
    id: 6,
    title: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon butter and roasted vegetables.',
    image: '/meals/06.jpg',
    url: '#nogo',
  },
  {
    id: 7,
    title: 'Mushroom Risotto',
    description: 'Creamy Italian rice cooked with wild mushrooms and parmesan.',
    image: '/meals/07.jpg',
    url: '#nogo',
  },
  {
    id: 8,
    title: 'BBQ Pulled Pork',
    description: 'Slow-cooked pork shoulder in smoky BBQ sauce on a toasted bun.',
    image: '/meals/08.jpg',
    url: '#nogo',
  },
];
</script>

<template>
  <h1>Recipes</h1>

  <ul>
    <li v-for="meal in demoData" :key="meal.id">
      <MealCard :url="meal.url" :image="meal.image" :title="meal.title" :description="meal.description" />
    </li>
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
