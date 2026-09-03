import type { Metadata } from 'next'
import ThankYouPage from '@/components/pages/thank-you-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/thank-you', {
  title: '购买完成 | SkillSlot',
  description: '购买 SkillSlot 后的下载与激活步骤。',
  index: false,
})

export default ThankYouPage
