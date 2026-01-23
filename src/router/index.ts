import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import RecipesPage from '@/views/RecipesPage.vue'
import PlannerPage from '@/views/PlannerPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Home' }
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesPage,
      meta: { title: 'Recipes' }
    },
    {
      path: '/planner',
      name: 'planner',
      component: PlannerPage,
      meta: { title: 'Planner' }
    }
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} - MealPlan` : 'MealPlan'
})

export default router
