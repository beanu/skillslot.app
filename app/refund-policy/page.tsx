import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { refundPage } from '@/lib/public-pages'

export const metadata: Metadata = {
  title: 'Refund Policy | SkillSlot',
  description: 'SkillSlot 14-day refund policy and instructions for requesting a refund.',
}

export default function RefundPolicyPage() {
  return <PublicPage page={refundPage} />
}
