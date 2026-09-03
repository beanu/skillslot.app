import type { Metadata } from 'next'
import ThankYouPage from '@/components/pages/thank-you-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('en', '/thank-you', {
  title: 'Purchase Complete | SkillSlot',
  description: 'Next steps for downloading and activating SkillSlot after purchase.',
  index: false,
})

export default ThankYouPage
