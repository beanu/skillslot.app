import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { refundPage } from '@/lib/public-pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/refund-policy', {
  title: '退款政策 | SkillSlot',
  description: '了解 SkillSlot 的 14 天退款政策及退款申请方式。',
})

export default function RefundPolicyPage() {
  return <PublicPage page={refundPage} />
}
