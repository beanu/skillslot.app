import Link from 'next/link'
import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'
import { TrackedDownloadLink } from '@/components/tracked-download-link'
import type { Locale } from '@/lib/i18n/context'
import { localizedPath } from '@/lib/i18n/routing'
import {
  SEO_LANDING_SLUGS,
  seoLandingPages,
  type SeoLandingPageData,
} from '@/lib/seo-landing-pages'
import {
  SKILLSLOT_DOWNLOAD_URL,
  SKILLSLOT_SITE_URL,
} from '@/lib/site'

const labels = {
  en: {
    home: 'Home',
    download: 'Download for macOS',
    seeDemo: 'See how it works',
    localFirst: 'Local-first',
    noAccount: 'No account required',
    oneTime: 'One-time license',
    related: 'Explore SkillSlot for other Agent workflows',
  },
  zh: {
    home: '首页',
    download: '下载 macOS 版',
    seeDemo: '查看工作流程',
    localFirst: '本地优先',
    noAccount: '无需账号',
    oneTime: '一次买断',
    related: '了解 SkillSlot 的其他 Agent 工作流',
  },
} as const

function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export function SeoLandingPage({
  locale,
  page,
}: {
  locale: Locale
  page: SeoLandingPageData
}) {
  const copy = page.copy[locale]
  const text = labels[locale]
  const pathname = `/${page.slug}`
  const pageUrl = `${SKILLSLOT_SITE_URL}${localizedPath(locale, pathname)}`
  const homeUrl = `${SKILLSLOT_SITE_URL}${localizedPath(locale, '/')}`
  const relatedPages = SEO_LANDING_SLUGS
    .filter((slug) => slug !== page.slug)
    .map((slug) => seoLandingPages[slug])
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}/#webpage`,
        url: pageUrl,
        name: copy.metaTitle,
        description: copy.metaDescription,
        inLanguage: locale === 'en' ? 'en' : 'zh-CN',
        isPartOf: { '@id': `${homeUrl}/#website` },
        about: { '@id': `${SKILLSLOT_SITE_URL}/#software` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: text.home,
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: copy.eyebrow,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}/#faq`,
        inLanguage: locale === 'en' ? 'en' : 'zh-CN',
        mainEntity: copy.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
        <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[140px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
              <Link className="transition-colors hover:text-foreground" href={localizedPath(locale, '/')}>
                {text.home}
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{copy.eyebrow}</span>
            </nav>

            <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">{copy.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {copy.lead}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedDownloadLink
                href={SKILLSLOT_DOWNLOAD_URL}
                source="seo_hero"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {text.download}
              </TrackedDownloadLink>
              <Link
                href={`${localizedPath(locale, '/')}#demo`}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {text.seeDemo}
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-2 text-sm text-muted-foreground" aria-label={locale === 'en' ? 'Product characteristics' : '产品特点'}>
              {[text.localFirst, text.noAccount, text.oneTime].map((item) => (
                <li key={item} className="rounded-full border border-border bg-card/70 px-3 py-1.5">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="seo-content-section border-t border-border px-6 py-24 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {copy.problemTitle}
            </h2>
            <div className="space-y-5 text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              {copy.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="seo-content-section border-t border-border bg-card/30 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {copy.benefitsTitle}
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {copy.benefits.map((benefit, index) => (
                <section key={benefit.title} className="rounded-2xl border border-border bg-background/70 p-6">
                  <p className="font-mono text-xs text-primary">0{index + 1}</p>
                  <h3 className="mt-5 font-mono text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{benefit.description}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-content-section border-t border-border px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {copy.workflowTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{copy.workflowLead}</p>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {copy.steps.map((step, index) => (
                <li key={step.title} className="border-l border-primary/40 pl-6">
                  <span className="font-mono text-sm text-primary">{index + 1}</span>
                  <h3 className="mt-3 font-mono text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>

            <aside className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.06] p-7 sm:p-9">
              <h2 className="font-mono text-2xl font-semibold text-foreground">{copy.compatibilityTitle}</h2>
              <p className="mt-4 max-w-3xl text-pretty leading-8 text-muted-foreground">{copy.compatibility}</p>
            </aside>
          </div>
        </section>

        <section id="faq" className="seo-content-section scroll-mt-20 border-t border-border bg-card/30 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {copy.faqTitle}
            </h2>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {copy.faqs.map((faq) => (
                <details key={faq.question} className="group py-6 first:pt-6">
                  <summary className="cursor-pointer list-none pr-8 font-mono text-lg font-semibold text-foreground marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-4 max-w-3xl pr-6 leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-content-section border-t border-border px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-mono text-2xl font-semibold text-foreground">{text.related}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={localizedPath(locale, `/${relatedPage.slug}`)}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="font-mono font-semibold text-foreground">{relatedPage.copy[locale].eyebrow}</span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground">{relatedPage.copy[locale].metaDescription}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-24 text-center sm:py-28">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 sm:p-12">
            <h2 className="text-balance font-mono text-3xl font-bold text-foreground sm:text-4xl">{copy.ctaTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{copy.ctaDescription}</p>
            <TrackedDownloadLink
              href={SKILLSLOT_DOWNLOAD_URL}
              source="seo_cta"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {text.download}
            </TrackedDownloadLink>
          </div>
        </section>
      </article>

      <Footer sectionBase="/" showCta={false} />
    </main>
  )
}
