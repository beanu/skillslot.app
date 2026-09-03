import type { Metadata } from 'next'
import ChangelogPage from '@/components/pages/changelog-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('en', '/changelog', {
  title: 'Changelog | SkillSlot',
  description: 'See the latest SkillSlot features, improvements, fixes, and macOS app releases.',
})

export default ChangelogPage
