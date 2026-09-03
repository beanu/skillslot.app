import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LANGUAGE_COOKIE } from '@/lib/i18n/routing'

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

function preferredLocale(request: NextRequest): 'en' | 'zh' {
  const savedLocale = request.cookies.get(LANGUAGE_COOKIE)?.value
  if (savedLocale === 'en' || savedLocale === 'zh') return savedLocale

  const languages = (request.headers.get('accept-language') ?? '')
    .split(',')
    .map((item) => {
      const [tag, ...parameters] = item.trim().toLowerCase().split(';')
      const quality = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith('q='))

      return {
        tag,
        quality: quality ? Number.parseFloat(quality.slice(2)) : 1,
      }
    })
    .filter(({ tag, quality }) => tag && Number.isFinite(quality) && quality > 0)
    .sort((a, b) => b.quality - a.quality)

  const firstSupportedLanguage = languages.find(({ tag }) => (
    tag === 'zh' || tag.startsWith('zh-') || tag === 'en' || tag.startsWith('en-')
  ))

  return firstSupportedLanguage?.tag.startsWith('zh') ? 'zh' : 'en'
}

function rememberLocale(response: NextResponse, locale: 'en' | 'zh') {
  response.cookies.set(LANGUAGE_COOKIE, locale, {
    maxAge: COOKIE_MAX_AGE,
    path: '/',
    sameSite: 'lax',
    secure: true,
  })
  response.headers.append('Vary', 'Accept-Language, Cookie')
  return response
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return NextResponse.next()
  }

  if (pathname === '/zh' || pathname.startsWith('/zh/')) {
    return NextResponse.next()
  }

  const locale = preferredLocale(request)
  if (locale === 'zh') {
    const url = request.nextUrl.clone()
    url.pathname = pathname === '/' ? '/zh' : `/zh${pathname}`
    return rememberLocale(NextResponse.redirect(url), 'zh')
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|og|_next/static|_next/image|robots.txt|sitemap.xml|.*\\..*).*)'],
}
