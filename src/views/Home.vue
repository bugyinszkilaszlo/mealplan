<script setup lang="ts"></script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Plan Your Meals,<br>Simplify Your Life</h1>
        <p class="hero-subtitle">Organize recipes, create weekly meal plans, and never wonder "what's for dinner?" again.</p>
        <div class="hero-buttons">
          <router-link to="/planner" class="btn btn-primary">Start Planning</router-link>
          <router-link to="/recipes" class="btn btn-secondary">Browse Recipes</router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>Why MealPlan?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>Easy Planning</h3>
            <p>Drag and drop your favorite recipes into a weekly calendar. Planning has never been this simple.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🍳</div>
            <h3>Recipe Collection</h3>
            <p>Store all your recipes in one place. Add notes, rate them, and keep track of your favorites.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛒</div>
            <h3>Smart Shopping</h3>
            <p>Generate shopping lists automatically from your meal plan. Never forget an ingredient again.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⏰</div>
            <h3>Save Time</h3>
            <p>Spend less time thinking about meals and more time enjoying them with your loved ones.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <h2>How It Works</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Add Your Recipes</h3>
            <p>Import or create your favorite recipes</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Plan Your Week</h3>
            <p>Schedule meals on your calendar</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Cook & Enjoy</h3>
            <p>Follow your plan and eat great food</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>Ready to get started?</h2>
        <p>Join thousands of home cooks who've simplified their meal planning</p>
        <router-link to="/planner" class="btn btn-primary btn-large">Start Planning Now</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .home {
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Hero Section */
  .hero {
    padding: 4rem 1rem;
    text-align: center;
    background: linear-gradient(135deg, #fefefe 0%, #f5f5f5 100%);
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.3rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: transform 0.2s;
    position: relative;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn-primary {
    background-color: var(--accent-color);
    color: #000;
    font-weight: 600;
  }

  .btn-secondary {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }

  .btn-large {
    padding: 1.2rem 2.5rem;
    font-size: 1.2rem;
  }

  /* Features Section */
  .features {
    padding: 5rem 1rem;
    background-color: #fff;
  }

  .features h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .feature-card {
    padding: 2rem;
    background-color: #fafafa;
    border-radius: 1rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .feature-card p {
    color: #666;
    line-height: 1.6;
  }

  /* How It Works */
  .how-it-works {
    padding: 5rem 1rem;
    background-color: #f8f8f8;
  }

  .how-it-works h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .steps {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
  }

  .step {
    flex: 1;
    min-width: 200px;
    text-align: center;
  }

  .step-number {
    width: 60px;
    height: 60px;
    background-color: var(--accent-color);
    color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 auto 1rem;
    font-family: 'Shadows Into Light', cursive;
    transform: rotate(-5deg);
  }

  .step h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .step p {
    color: #666;
  }

  .step-arrow {
    font-size: 2rem;
    color: #ccc;
    font-weight: bold;
  }

  /* CTA Section */
  .cta {
    padding: 5rem 1rem;
    text-align: center;
  }

  .cta h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .cta p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .features h2,
    .how-it-works h2,
    .cta h2 {
      font-size: 2rem;
    }

    .step-arrow {
      display: none;
    }

    .steps {
      flex-direction: column;
    }

    .btn {
      width: 100%;
      max-width: 300px;
    }
  }
</style>

