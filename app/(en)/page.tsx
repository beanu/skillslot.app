import type { Metadata } from 'next'
import HomePage from '@/components/pages/home-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('en', '/', {
  title: 'SkillSlot — Organize and Deploy AI Agent Skills',
  description: 'Organize local AI Agent Skills into reusable Loadouts and deploy them to Claude Code, Codex, Gemini, and more from one macOS app.',
})

export default function Page() {
  return <HomePage locale="en" />
}
