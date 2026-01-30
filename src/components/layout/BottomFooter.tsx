import Link from 'next/link';
import styles from './BottomFooter.module.css';

export default function BottomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTagline}>
          <h3>MealPlan</h3>
          <p>Plan your meals, organize your recipes, and simplify your cooking journey.</p>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/recipes">Recipes</Link></li>
              <li><Link href="/planner">Planner</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} MealPlan. Made with ❤️ and good food.</p>
        </div>
      </div>
    </footer>
  );
}
