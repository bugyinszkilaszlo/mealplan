'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './TopNav.module.css';

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href='/' className={styles.logo}>
          MealPlan
        </Link>

        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span>{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>

        <ul className={mobileMenuOpen ? styles.mobileOpen : ''}>
          <li>
            <Link
              href='/'
              onClick={closeMobileMenu}
              className={isActive('/') ? styles.active : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/recipes'
              onClick={closeMobileMenu}
              className={isActive('/recipes') ? styles.active : ''}
            >
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
