'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import Box from '@/components/ui/custom/Box';
import { Field } from '@/components/ui/custom/Field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
      if (mode === 'login') {
        const result = await authClient.signIn.email({ email, password });
        if (result.error) {
          setError(result.error.message || 'Hiba történt');
          setLoading(false);
          return;
        }
        router.push('/');
        router.refresh();
      } else {
        const result = await authClient.signUp.email({ name, email, password });
        if (result.error) {
          setError(result.error.message || 'Hiba történt');
          setLoading(false);
          return;
        }
        router.push('/login');
      }
    } catch (err) {
      setError('Hálózati hiba');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <Box
        title={mode === 'login' ? 'Bejelentkezés' : 'Regisztráció'}
        headingLevel='h1'
        className={styles.authBox}
      >
        <form onSubmit={submit}>
          {mode === 'register' && (
            <Field label='Név' htmlFor='name' required>
              <Input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
          )}

          <Field label='Email' htmlFor='email' required>
            <Input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>

          <Field label='Jelszó' htmlFor='password' required>
            <Input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </Field>

          {error && <div className={styles.error}>{error}</div>}

          <Button type='submit' disabled={loading} className={styles.submitBtn}>
            {loading
              ? 'Feldolgozás...'
              : mode === 'login'
                ? 'Bejelentkezés'
                : 'Regisztráció'}
          </Button>
        </form>

        <div className={styles.footer}>
          {mode === 'login' ? (
            <Link href='/registration' className={styles.link}>
              Nincs fiókod? Regisztrálj
            </Link>
          ) : (
            <Link href='/login' className={styles.link}>
              Van már fiókod? Bejelentkezés
            </Link>
          )}
        </div>
      </Box>
    </div>
  );
}
