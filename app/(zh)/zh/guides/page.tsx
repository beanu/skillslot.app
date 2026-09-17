import type { Metadata } from 'next'
import { GuidesIndexPage } from '@/components/pages/guides-index-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/guides', {
  title: 'Claude Skills 指南与教程 | SkillSlot',
  description: '关于 Claude 与 Agent Skills 的实操指南：它们是什么、如何在 Claude Code 中激活、以及如何管理不断增长的集合。',
})

export default function Page() {
  return <GuidesIndexPage locale="zh" />
}
