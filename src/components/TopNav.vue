<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav>
    <div class="nav-container">
      <router-link to="/" class="logo">MealPlan</router-link>

      <button class="hamburger" @click="toggleMobileMenu" :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'">
        <span v-if="!mobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <ul :class="{ 'mobile-open': mobileMenuOpen }">
        <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
        <li><router-link to="/recipes" @click="closeMobileMenu">Recipes</router-link></li>
        <li><router-link to="/planner" @click="closeMobileMenu">Planner</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(254, 254, 254, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(224, 224, 224, 0.3);
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.logo {
  font-family: 'Shadows Into Light', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 1001;
}

.logo::before {
  content: '';
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
  right: 0.3rem;
  bottom: 0.1rem;
  background-color: var(--accent-color);
  transform: rotate(-10deg) skewX(-12deg) skewY(4deg);
  border-radius: .5rem 0.2rem 0.5rem 0.8rem;
  box-shadow: 0 0 12px rgba(192, 255, 58, 0.4);
  z-index: -1;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

ul {
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  position: relative;
}

a.router-link-active {
  color: #000;
}

a.router-link-active::before {
  content: '';
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
  right: 0.3rem;
  bottom: 0.1rem;
  background-color: var(--accent-color);
  transform: rotate(-10deg) skewX(-12deg) skewY(4deg);
  border-radius: .5rem 0.2rem 0.5rem 0.8rem;
  box-shadow: 0 0 12px rgba(192, 255, 58, 0.4);
  z-index: -1;
}

@media (max-width: 576px) {
  .hamburger {
    display: block;
  }

  ul {
    position: fixed;
    inset: 0 0 0 100vw;
    width: 0;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: all 0.3s ease;
    z-index: 1000;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  ul.mobile-open {
    width: 100vw;
    left: 0;
  }

  li a {
    font-size: 1.5rem;
  }
}
</style>
