import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const res = NextResponse.json({ ok: true })

    const expire = (name: string) => `${name}=deleted; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; HttpOnly${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
    res.headers.append('Set-Cookie', expire('token'))

    return res
  } catch (err) {
    return NextResponse.json({ error: 'Sikertelen kijelentkezés!' }, { status: 500 })
  }
}
