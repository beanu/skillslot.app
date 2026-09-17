import Link from 'next/link'
import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'
import type { Locale } from '@/lib/i18n/context'
import { localizedPath } from '@/lib/i18n/routing'
import { GUIDE_SLUGS } from '@/lib/guides'
import { guides } from '@/lib/guides'

const labels = {
  en: {
    home: 'Home',
    eyebrow: 'Guides',
    title: 'Claude Skills, explained practically',
    lead: 'Short, hands-on guides about Agent Skills: what the format is, how activation works, and how to keep a growing collection under control.',
    readGuide: 'Read the guide',
    updated: 'Updated',
  },
  zh: {
    home: '首页',
    eyebrow: '指南',
    title: '把 Claude Skills 讲清楚',
    lead: '关于 Agent Skills 的简明实操指南：格式是什么、激活如何运作、以及怎么管住不断膨胀的 Skill 集合。',
    readGuide: '阅读指南',
    updated: '更新于',
  },
} as const

function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso))
}

export function GuidesIndexPage({ locale }: { locale: Locale }) {
  const text = labels[locale]
  const allGuides = GUIDE_SLUGS.map((slug) => guides[slug])

  return (
    <main className="min-h-screen bg-background">
      <Header sectionBase="/" />

      <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
            <Link className="transition-colors hover:text-foreground" href={localizedPath(locale, '/')}>
              {text.home}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{text.eyebrow}</span>
          </nav>

          <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">{text.eyebrow}</p>
          <h1 className="mt-5 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {text.title}
          </h1>
          <p className="mt-7 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            {text.lead}
          </p>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ul className="grid gap-4">
            {allGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={localizedPath(locale, `/guides/${guide.slug}`)}
                  className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
                >
                  <p className="font-mono text-xs text-primary">{guide.copy[locale].eyebrow}</p>
                  <h2 className="mt-3 font-mono text-2xl font-semibold text-foreground">{guide.copy[locale].title}</h2>
                  <p className="mt-3 text-pretty leading-7 text-muted-foreground">{guide.copy[locale].lead}</p>
                  <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{text.readGuide} →</span>
                    <span aria-hidden="true">·</span>
                    <span>{text.updated} {formatDate(guide.copy[locale].updated, locale)}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer sectionBase="/" />
    </main>
  )
}
