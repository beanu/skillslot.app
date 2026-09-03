import type { Metadata } from 'next'
import PrototypePage from '@/components/pages/prototype-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('zh', '/prototype', {
  title: '交互原型 | SkillSlot',
  description: 'SkillSlot 内部交互式产品原型。',
  index: false,
})

export default PrototypePage
