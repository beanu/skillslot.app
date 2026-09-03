import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { privacyPage } from '@/lib/public-pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/privacy', {
  title: '隐私政策 | SkillSlot',
  description: '了解 SkillSlot 如何处理网站、应用、试用、License 与购买相关的数据。',
})

export default function PrivacyPage() {
  return <PublicPage page={privacyPage} />
}
