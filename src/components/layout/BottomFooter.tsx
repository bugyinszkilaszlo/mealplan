import Link from 'next/link';
import styles from './BottomFooter.module.css';

export default function BottomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTagline}>
          <h3>MealPlan</h3>
          <p>
            Tervezd meg az étkezéseidet, rendszerezd a receptjeidet, és
            egyszerűsítsd a főzési utadat.
          </p>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Gyors linkek</h4>
            <ul>
              <li>
                <Link href='/'>Kezdőlap</Link>
              </li>
              <li>
                <Link href='/recipes'>Receptek</Link>
              </li>
              <li>
                <Link href='/planner'>Tervező</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Információk</h4>
            <ul>
              <li>
                <a href='#'>Rólunk</a>
              </li>
              <li>
                <a href='#'>Kapcsolat</a>
              </li>
              <li>
                <a href='#'>Adatvédelmi irányelvek</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Kapcsolat</h4>
            <ul>
              <li>
                <a href='#'>Instagram</a>
              </li>
              <li>
                <a href='#'>Pinterest</a>
              </li>
              <li>
                <a href='#'>Hírlevél</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} MealPlan. Készült ❤️-tel és jó étellel.</p>
        </div>
      </div>
    </footer>
  );
}
