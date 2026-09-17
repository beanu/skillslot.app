import type { Metadata } from 'next'
import { GuidesIndexPage } from '@/components/pages/guides-index-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('en', '/guides', {
  title: 'Claude Skills Guides & Tutorials | SkillSlot',
  description: 'Hands-on guides about Claude and Agent Skills: what they are, how to activate them in Claude Code, and how to manage a growing collection.',
})

export default function Page() {
  return <GuidesIndexPage locale="en" />
}
