<script setup lang="ts"></script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-tagline">
          <h3>MealPlan</h3>
          <p>Plan your meals, organize your recipes, and simplify your cooking journey.</p>
      </div>
      <div class="footer-content">
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/recipes">Recipes</router-link></li>
            <li><router-link to="/planner">Planner</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} MealPlan. Made with ❤️ and good food.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #f8f8f8;
    margin-top: 4rem;
    border-top: 1px solid #e0e0e0;
    text-align: center;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-tagline {
    padding: 3rem 0;
  }
  .footer-tagline h3 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }
  .footer-tagline p {
    margin: 0;
    color: #666;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding: 3rem 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .footer-section h4 {
    font-family: 'Shadows Into Light', cursive;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    color: #333;
  }

  .footer-section p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-section ul li {
    margin-bottom: 0.5rem;
  }

  .footer-section ul li a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-section ul li a:hover {
    color: #000;
  }

  .footer-bottom {
    text-align: center;
    padding: 1rem;
    color: #999;
    font-size: 0.9rem;
  }

  .footer-bottom p {
    margin: 0;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-section {
      text-align: center;
    }

    footer {
      padding: 2rem 1rem 1rem;
    }
  }
</style>
