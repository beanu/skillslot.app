import type { Metadata, Viewport } from 'next'
import { SiteDocument } from '@/components/site-document'
import { createSiteMetadata } from '@/lib/seo'
import '../globals.css'

export const metadata: Metadata = createSiteMetadata('zh')

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function ChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="zh">{children}</SiteDocument>
}
