import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Plan Your Meals,<br />Simplify Your Life</h1>
          <p className={styles.heroSubtitle}>
            Organize recipes, create weekly meal plans, and never wonder &quot;what&apos;s for dinner?&quot; again.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/planner" className={`${styles.btn} ${styles.btnPrimary}`}>Start Planning</Link>
            <Link href="/recipes" className={`${styles.btn} ${styles.btnSecondary}`}>Browse Recipes</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Why MealPlan?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📝</div>
              <h3>Easy Planning</h3>
              <p>Drag and drop your favorite recipes into a weekly calendar. Planning has never been this simple.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🍳</div>
              <h3>Recipe Collection</h3>
              <p>Store all your recipes in one place. Add notes, rate them, and keep track of your favorites.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h3>Smart Shopping</h3>
              <p>Generate shopping lists automatically from your meal plan. Never forget an ingredient again.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏰</div>
              <h3>Save Time</h3>
              <p>Spend less time thinking about meals and more time enjoying them with your loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Add Your Recipes</h3>
              <p>Import or create your favorite recipes</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Plan Your Week</h3>
              <p>Schedule meals on your calendar</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Cook & Enjoy</h3>
              <p>Follow your plan and eat great food</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to get started?</h2>
          <p>Join thousands of home cooks who&apos;ve simplified their meal planning</p>
          <Link href="/planner" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>Start Planning Now</Link>
        </div>
      </section>
    </div>
  );
}
