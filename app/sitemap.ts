import type { MetadataRoute } from 'next'
import { alternateLanguagePaths, localizedPath } from '@/lib/i18n/routing'
import { GUIDE_SLUGS } from '@/lib/guides'
import { SEO_LANDING_SLUGS } from '@/lib/seo-landing-pages'
import { SKILLSLOT_SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/changelog',
    '/contact',
    '/privacy',
    '/terms',
    '/refund-policy',
    '/guides',
    ...SEO_LANDING_SLUGS.map((slug) => `/${slug}`),
    ...GUIDE_SLUGS.map((slug) => `/guides/${slug}`),
  ]

  return routes.flatMap((route) => {
    const pathname = route || '/'
    const languages = alternateLanguagePaths(pathname)

    return (['en', 'zh'] as const).map((locale) => ({
      url: `${SKILLSLOT_SITE_URL}${localizedPath(locale, pathname)}`,
      changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
      priority: route === ''
        ? 1
        : SEO_LANDING_SLUGS.some((slug) => route === `/${slug}`)
          ? 0.8
          : GUIDE_SLUGS.some((slug) => route === `/guides/${slug}`)
            ? 0.7
            : route === '/changelog' || route === '/guides'
              ? 0.6
              : 0.5,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languages).map(([language, path]) => [
            language,
            `${SKILLSLOT_SITE_URL}${path}`,
          ]),
        ),
      },
    }))
  })
}
