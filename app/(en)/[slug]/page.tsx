import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SeoLandingPage } from '@/components/pages/seo-landing-page'
import {
  SEO_LANDING_SLUGS,
  isSeoLandingSlug,
  seoLandingPages,
} from '@/lib/seo-landing-pages'
import { createPageMetadata } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return SEO_LANDING_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!isSeoLandingSlug(slug)) return {}

  const copy = seoLandingPages[slug].copy.en
  return createPageMetadata('en', `/${slug}`, {
    title: copy.metaTitle,
    description: copy.metaDescription,
  })
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  if (!isSeoLandingSlug(slug)) notFound()

  return <SeoLandingPage locale="en" page={seoLandingPages[slug]} />
}
