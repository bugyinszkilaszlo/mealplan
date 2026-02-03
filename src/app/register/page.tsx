'use client'
import React, { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (res.ok) {
        setMsg('Registered — you can now log in.')
        setEmail('')
        setPassword('')
      } else {
        setMsg(data?.error || 'Registration failed')
      }
    } catch (err) {
      setMsg('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: '2rem auto', padding: '1rem' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Email
          <input style={{ display: 'block', width: '100%' }} value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </label>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Password
          <input style={{ display: 'block', width: '100%' }} value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Register'}</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  )
}
