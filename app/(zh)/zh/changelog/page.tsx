import type { Metadata } from 'next'
import ChangelogPage from '@/components/pages/changelog-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/changelog', {
  title: '更新日志 | SkillSlot',
  description: '查看 SkillSlot 最新功能、改进、问题修复与 macOS 应用版本。',
})

export default ChangelogPage
