import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/static') ||
    pathname === '/login' ||
    pathname === '/registration' ||
    pathname.startsWith('/public')
  ) {
    return NextResponse.next()
  }

  const session = await auth.api.getSession({ headers: req.headers })
  if (!session) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/planner/:path*', '/recipes/:path*', '/recipe/:path*'],
}
