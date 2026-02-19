import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(req: NextRequest) {
  const url = req.nextUrl.clone()

  const session = await auth.api.getSession({ headers: req.headers })
  if (!session) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/new-recipe/:path*', '/planner/:path*'],
}
