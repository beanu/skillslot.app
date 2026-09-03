import type { MetadataRoute } from 'next'
import { SKILLSLOT_SITE_URL } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${SKILLSLOT_SITE_URL}/sitemap.xml`,
  }
}
