import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { contactPage } from '@/lib/public-pages'

export const metadata: Metadata = {
  title: 'Contact | SkillSlot',
  description: 'Contact SkillSlot support about downloads, licenses, purchases, refunds, and privacy.',
}

export default function ContactPage() {
  return <PublicPage page={contactPage} />
}
