import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { faqPage } from '@/lib/public-pages'

export const metadata: Metadata = {
  title: 'FAQ | SkillSlot',
  description: 'Answers about SkillSlot local data, trials, licenses, payments, updates, and refunds.',
}

export default function FaqPage() {
  return <PublicPage page={faqPage} />
}
