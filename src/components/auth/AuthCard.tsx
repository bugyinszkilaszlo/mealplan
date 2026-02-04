'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './AuthCard.module.css';

type Mode = 'login' | 'register';

export default function AuthCard({ mode = 'login' }: { mode?: Mode }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const endpoint = mode === 'login' ? '/api/login' : '/api/registration';
      const body: any = { email, password };
      if (mode === 'register') body.name = name;

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.message || data?.error || 'Hiba történt');
        setLoading(false);
        return;
      }

      if (mode === 'login') router.push('/');
      else router.push('/login');
    } catch (err) {
      setError('Hálózati hiba');
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h1 className={styles.brand}>MealPlan</h1>
        <p className={styles.subtitle}>
          {mode === 'login' ? 'Jelentkezz be fiókodba' : 'Hozd létre új fiókod'}
        </p>

        <form onSubmit={submit} className={styles.form}>
          {mode === 'register' && (
            <label className={styles.field}>
              <span>Név</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Pl. Anna Kovács" />
            </label>
          )}

          <label className={styles.field}>
            <span>Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email@pelda.com" />
          </label>

          <label className={styles.field}>
            <span>Jelszó</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="••••••••" />
          </label>

          {error && <div className={styles.error}>{error}</div>}

          <button className={styles.btn} disabled={loading}>
            {loading ? 'Feldolgozás...' : mode === 'login' ? 'Bejelentkezés' : 'Regisztráció'}
          </button>
        </form>

        <div className={styles.footer}>
          {mode === 'login' ? (
            <Link href="/registration" className={styles.link}>Nincs fiókod? Regisztrálj</Link>
          ) : (
            <Link href="/login" className={styles.link}>Van már fiókod? Bejelentkezés</Link>
          )}
        </div>
      </div>
    </div>
  );
}
