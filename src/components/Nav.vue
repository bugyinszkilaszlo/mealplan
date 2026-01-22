<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/recipes">Recipes</router-link></li> 
      <li><router-link to="/planner">Planner</router-link></li> 
    </ul>
  </nav>  
</template>

<style scoped>
  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
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
</style>