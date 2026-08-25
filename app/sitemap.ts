import type { MetadataRoute } from 'next'
import { SKILLSLOT_SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-25')
  const routes = [
    '',
    '/changelog',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
    '/refund-policy',
  ]

  return routes.map((route) => ({
    url: `${SKILLSLOT_SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/changelog' ? 0.7 : 0.5,
  }))
}
