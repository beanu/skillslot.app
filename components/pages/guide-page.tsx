import Link from 'next/link'
import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'
import { TrackedDownloadLink } from '@/components/tracked-download-link'
import type { Locale } from '@/lib/i18n/context'
import { localizedPath } from '@/lib/i18n/routing'
import { GUIDE_SLUGS, type GuideBlock, type GuideData } from '@/lib/guides'
import { guides } from '@/lib/guides'
import { seoLandingPages } from '@/lib/seo-landing-pages'
import {
  SKILLSLOT_DOWNLOAD_URL,
  SKILLSLOT_SITE_URL,
} from '@/lib/site'

const labels = {
  en: {
    home: 'Home',
    guides: 'Guides',
    guidesLabel: 'Guides',
    download: 'Download for macOS',
    updated: 'Updated',
    minRead: 'min read',
    onThisPage: 'On this page',
    relatedGuides: 'More guides',
    exploreProduct: 'Explore SkillSlot',
  },
  zh: {
    home: '首页',
    guides: '指南',
    guidesLabel: '指南',
    download: '下载 macOS 版',
    updated: '更新于',
    minRead: '分钟阅读',
    onThisPage: '本页目录',
    relatedGuides: '更多指南',
    exploreProduct: '了解 SkillSlot',
  },
} as const

function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

// Renders `inline code` spans from backtick-delimited segments.
function InlineText({ text }: { text: string }) {
  const parts = text.split('`')
  return (
    <>
      {parts.map((part, index) => (
        index % 2 === 1 ? (
          <code key={index} className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.875em] text-foreground">{part}</code>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </>
  )
}

function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso))
}

function estimateReadingMinutes(blocks: GuideBlock[], locale: Locale) {
  const text = blocks
    .map((block) => {
      if (block.type === 'p' || block.type === 'h2' || block.type === 'callout') return block.text
      if (block.type === 'code') return block.text
      return block.items.join(' ')
    })
    .join(' ')

  const units = locale === 'zh'
    ? Math.ceil(text.replace(/\s/g, '').length / 400)
    : Math.ceil(text.split(/\s+/).length / 200)

  return Math.max(1, units)
}

function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={index}
                id={block.id}
                className="scroll-mt-28 border-t border-border pt-12 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            )
          case 'p':
            return (
              <p key={index} className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                <InlineText text={block.text} />
              </p>
            )
          case 'ul':
            return (
              <ul key={index} className="list-disc space-y-3 pl-6 text-base leading-8 text-muted-foreground marker:text-primary sm:text-lg">
                {block.items.map((item) => (
                  <li key={item}><InlineText text={item} /></li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={index} className="list-decimal space-y-3 pl-6 text-base leading-8 text-muted-foreground marker:font-mono marker:text-primary sm:text-lg">
                {block.items.map((item) => (
                  <li key={item}><InlineText text={item} /></li>
                ))}
              </ol>
            )
          case 'code':
            return (
              <figure key={index} className="overflow-hidden rounded-xl border border-border bg-card">
                <figcaption className="border-b border-border px-4 py-2.5 font-mono text-xs text-muted-foreground">{block.title}</figcaption>
                <pre className="overflow-x-auto p-4 font-mono text-sm leading-6 text-foreground"><code>{block.text}</code></pre>
              </figure>
            )
          case 'callout':
            return (
              <aside key={index} className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-6">
                <p className="text-pretty leading-7 text-foreground"><InlineText text={block.text} /></p>
              </aside>
            )
        }
      })}
    </div>
  )
}

export function GuidePage({
  locale,
  guide,
}: {
  locale: Locale
  guide: GuideData
}) {
  const copy = guide.copy[locale]
  const text = labels[locale]
  const pathname = `/guides/${guide.slug}`
  const pageUrl = `${SKILLSLOT_SITE_URL}${localizedPath(locale, pathname)}`
  const homeUrl = `${SKILLSLOT_SITE_URL}${localizedPath(locale, '/')}`
  const guidesUrl = `${SKILLSLOT_SITE_URL}${localizedPath(locale, '/guides')}`
  const relatedGuides = GUIDE_SLUGS
    .filter((slug) => slug !== guide.slug)
    .map((slug) => guides[slug])
  const relatedLandingPages = guide.relatedLandingSlugs.map((slug) => seoLandingPages[slug])
  const headings = copy.blocks.filter((block): block is Extract<GuideBlock, { type: 'h2' }> => block.type === 'h2')
  const readingMinutes = estimateReadingMinutes(copy.blocks, locale)

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${pageUrl}/#article`,
        headline: copy.title,
        description: copy.metaDescription,
        inLanguage: locale === 'en' ? 'en' : 'zh-CN',
        datePublished: copy.published,
        dateModified: copy.updated,
        author: { '@type': 'Organization', name: 'SkillSlot Team' },
        publisher: { '@id': `${SKILLSLOT_SITE_URL}/#software` },
        mainEntityOfPage: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: text.home, item: homeUrl },
          { '@type': 'ListItem', position: 2, name: text.guides, item: guidesUrl },
          { '@type': 'ListItem', position: 3, name: copy.title, item: pageUrl },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <Header sectionBase="/" />

      <article>
        <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[140px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link className="transition-colors hover:text-foreground" href={localizedPath(locale, '/')}>
                {text.home}
              </Link>
              <span aria-hidden="true">/</span>
              <Link className="transition-colors hover:text-foreground" href={localizedPath(locale, '/guides')}>
                {text.guides}
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{copy.title}</span>
            </nav>

            <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">{copy.eyebrow}</p>
            <h1 className="mt-5 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-7 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {copy.lead}
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>{text.updated} {formatDate(copy.updated, locale)}</span>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes} {text.minRead}</span>
            </p>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_180px] lg:gap-16">
            <div className="min-w-0">
              <GuideBlocks blocks={copy.blocks} />

              <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10">
                <h2 className="text-balance font-mono text-2xl font-bold text-foreground sm:text-3xl">{copy.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-pretty leading-8 text-muted-foreground">{copy.ctaDescription}</p>
                <TrackedDownloadLink
                  href={SKILLSLOT_DOWNLOAD_URL}
                  source="guide_cta"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {text.download}
                </TrackedDownloadLink>
              </div>
            </div>

            {headings.length > 0 && (
              <nav aria-label={text.onThisPage} className="hidden lg:block">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">{text.onThisPage}</p>
                <ul className="mt-4 space-y-3 border-l border-border">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="-ml-px block border-l-2 border-transparent pl-4 text-sm leading-6 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </section>

        {relatedGuides.length > 0 && (
          <section className="border-t border-border px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-mono text-2xl font-semibold text-foreground">{text.relatedGuides}</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={localizedPath(locale, `/guides/${relatedGuide.slug}`)}
                    className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="font-mono font-semibold text-foreground">{relatedGuide.copy[locale].title}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">{relatedGuide.copy[locale].lead}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedLandingPages.length > 0 && (
          <section className="border-t border-border bg-card/30 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-mono text-2xl font-semibold text-foreground">{text.exploreProduct}</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {relatedLandingPages.map((relatedPage) => (
                  <Link
                    key={relatedPage.slug}
                    href={localizedPath(locale, `/${relatedPage.slug}`)}
                    className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/40 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="font-mono font-semibold text-foreground">{relatedPage.copy[locale].eyebrow}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">{relatedPage.copy[locale].metaDescription}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer sectionBase="/" showCta={false} />
    </main>
  )
}
