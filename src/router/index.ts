import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Recipes from '@/views/Recipes.vue'
import Planner from '@/views/Planner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home' }
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
      meta: { title: 'Recipes' }
    },
    {
      path: '/planner',
      name: 'planner',
      component: Planner,
      meta: { title: 'Planner' }
    }
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} - MealPlan` : 'MealPlan'
})

export default router
