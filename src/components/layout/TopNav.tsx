'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './TopNav.module.css';

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const logoutUser = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.ok) {
        console.log('is it ok?')
        router.push('/');
      }
    }
    catch(err) {
      console.log(err)
    }
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
          aria-label={mobileMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
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
              Kezdőlap
            </Link>
          </li>
          <li>
            <Link
              href='/recipes'
              onClick={closeMobileMenu}
              className={isActive('/recipes') ? styles.active : ''}
            >
              Receptek
            </Link>
          </li>
          <li>
            <button
              onClick={logoutUser}
              className={styles.logoutButton}
            >
              Kijelentkezés
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
