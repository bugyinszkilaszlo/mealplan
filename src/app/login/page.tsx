'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (res.ok) {
        setMsg('Logged in. Redirecting...')
        router.push('/')
      } else {
        setMsg(data?.error || 'Login failed')
      }
    } catch (err) {
      setMsg('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: '2rem auto', padding: '1rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Email
          <input style={{ display: 'block', width: '100%' }} value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </label>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Password
          <input style={{ display: 'block', width: '100%' }} value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Login'}</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  )
}
