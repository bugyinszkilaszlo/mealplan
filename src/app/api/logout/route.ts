import { NextResponse } from 'next/server'

function parseCookie(header: string | null, name: string) {
  if (!header) return null
  const parts = header.split(';').map(p => p.trim())
  const match = parts.find(p => p.startsWith(name + '='))
  if (!match) return null
  return decodeURIComponent(match.split('=')[1])
}

export async function POST(req: Request) {
  try {
    const cookieHeader = req.headers.get('cookie')
    const token = parseCookie(cookieHeader, 'token')

    const res = NextResponse.json({ ok: true })

    const expire = (name: string) => `${name}=deleted; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; HttpOnly${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
    res.headers.append('Set-Cookie', expire('token'))

    return res
  } catch (err) {
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
