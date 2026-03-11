import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers })

  if (!session) {
    const loginUrl = new URL('/login', req.url)
    const returnTo = req.nextUrl.pathname + req.nextUrl.search
    loginUrl.searchParams.set('callbackUrl', returnTo)

    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/new-recipe/:path*', '/planner/:path*'],
}
