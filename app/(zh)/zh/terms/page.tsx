import type { Metadata } from 'next'
import { PublicPage } from '@/components/public-pages/public-page'
import { termsPage } from '@/lib/public-pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/terms', {
  title: '服务条款 | SkillSlot',
  description: '适用于 SkillSlot 网站、macOS 应用、试用和 License 的服务条款。',
})

export default function TermsPage() {
  return <PublicPage page={termsPage} />
}
