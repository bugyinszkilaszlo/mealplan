'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams  } from 'next/navigation';
import { authClient } from "@/lib/auth-client"
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

  const searchParams = useSearchParams();
  const rawCallback  = searchParams.get('callbackUrl') || "/";
  const safeCallback = rawCallback.startsWith("/") ? rawCallback : "/";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (mode === "login") {
        const result = await authClient.signIn.email({ email, password });

        if (result.error) {
          setError(result.error.message || "Hiba történt");
          setLoading(false);
          return;
        }

        router.push(safeCallback);
        router.refresh();

      } else {
        const result = await authClient.signUp.email({ name, email, password });

        if (result.error) {
          setError(result.error.message || "Hiba történt");
          setLoading(false);
          return;
        }

        router.push(`/login?callbackUrl=${encodeURIComponent(safeCallback)}`);
      }
    } catch (err) {
      setError("Hálózati hiba");
      setLoading(false);
    } finally {
      setLoading(false)
    }
  }

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
            <Link
              href={`/registration?callbackUrl=${encodeURIComponent(safeCallback)}`}
              className={styles.link}
            >
              Nincs fiókod? Regisztrálj
            </Link>
          ) : (
            <Link
              href={`/login?callbackUrl=${encodeURIComponent(safeCallback)}`}
              className={styles.link}
            >
              Van már fiókod? Bejelentkezés
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
