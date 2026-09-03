import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { privacyPage } from '@/lib/public-pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('en', '/privacy', {
  title: 'Privacy Policy | SkillSlot',
  description: 'How SkillSlot processes website, app, trial, license, and purchase data.',
})

export default function PrivacyPage() {
  return <PublicPage page={privacyPage} />
}
