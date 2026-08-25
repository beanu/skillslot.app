import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { termsPage } from '@/lib/public-pages'

export const metadata: Metadata = {
  title: 'Terms of Service | SkillSlot',
  description: 'Terms governing the SkillSlot website, macOS app, trial, and license.',
}

export default function TermsPage() {
  return <PublicPage page={termsPage} />
}
