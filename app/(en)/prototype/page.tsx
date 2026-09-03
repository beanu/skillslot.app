import type { Metadata } from 'next'
import PrototypePage from '@/components/pages/prototype-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('en', '/prototype', {
  title: 'Interactive Prototype | SkillSlot',
  description: 'Internal interactive product prototype for SkillSlot.',
  index: false,
})

export default PrototypePage
