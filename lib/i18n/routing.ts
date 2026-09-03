import type { Locale } from './context'

export const LANGUAGE_COOKIE = 'skillslot_locale'

export function localizedPath(locale: Locale, pathname: string) {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  const pathWithoutLocale = normalizedPath.replace(/^\/zh(?=\/|$)/, '') || '/'

  if (locale === 'zh') {
    return pathWithoutLocale === '/' ? '/zh' : `/zh${pathWithoutLocale}`
  }

  return pathWithoutLocale
}

export function alternateLanguagePaths(pathname: string) {
  return {
    en: localizedPath('en', pathname),
    'zh-CN': localizedPath('zh', pathname),
    'x-default': localizedPath('en', pathname),
  }
}
