import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { privacyPage } from '@/lib/public-pages'

export const metadata: Metadata = {
  title: 'Privacy Policy | SkillSlot',
  description: 'How SkillSlot processes website, app, trial, license, and purchase data.',
}

export default function PrivacyPage() {
  return <PublicPage page={privacyPage} />
}
