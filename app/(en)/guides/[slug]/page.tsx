import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GuidePage } from '@/components/pages/guide-page'
import { GUIDE_SLUGS, guides, isGuideSlug } from '@/lib/guides'
import { createPageMetadata } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!isGuideSlug(slug)) return {}

  const copy = guides[slug].copy.en
  return createPageMetadata('en', `/guides/${slug}`, {
    title: copy.metaTitle,
    description: copy.metaDescription,
  })
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  if (!isGuideSlug(slug)) notFound()

  return <GuidePage locale="en" guide={guides[slug]} />
}
