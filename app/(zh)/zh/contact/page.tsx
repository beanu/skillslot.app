import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { contactPage } from '@/lib/public-pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/contact', {
  title: '联系我们 | SkillSlot',
  description: '联系 SkillSlot 支持，咨询下载、License、购买、退款与隐私问题。',
})

export default function ContactPage() {
  return <PublicPage page={contactPage} />
}
