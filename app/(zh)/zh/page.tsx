import type { Metadata } from 'next'
import HomePage from '@/components/pages/home-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/', {
  title: 'SkillSlot — 管理与部署本地 Agent Skills',
  description: '把散落在本地的 Agent Skills 收进一个 Vault，组合成可复用的 Loadout，并部署到 Claude Code、Codex、Gemini 等 AI 编程工具。',
})

export default function Page() {
  return <HomePage locale="zh" />
}
