'use client'

import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { useLanguage } from '@/lib/i18n/context'
import type { LocalizedText, PublicPageData } from '@/lib/public-pages'
import { localizedPath } from '@/lib/i18n/routing'

function localized(locale: 'zh' | 'en', value: LocalizedText) {
  return value[locale]
}

export function PublicPage({ page }: { page: PublicPageData }) {
  const { locale } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Header sectionBase="/" />

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/[0.045] blur-[120px]" />
      </div>

      <article className="relative mx-auto max-w-4xl px-6 pb-28 pt-28 sm:pt-32">
        <Link
          href={localizedPath(locale, '/')}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {locale === 'zh' ? '返回首页' : 'Back to home'}
        </Link>

        <header className="mt-10 border-b border-border pb-12">
          <p className="font-mono text-sm text-primary">{localized(locale, page.eyebrow)}</p>
          <h1 className="mt-4 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {localized(locale, page.title)}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            {localized(locale, page.description)}
          </p>
          {page.updated && (
            <p className="mt-5 text-sm text-muted-foreground/80">{localized(locale, page.updated)}</p>
          )}
        </header>

        <div className="divide-y divide-border">
          {page.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 py-10 sm:py-12">
              <h2 className="text-balance font-mono text-xl font-semibold text-foreground sm:text-2xl">
                {localized(locale, section.title)}
              </h2>

              {section.paragraphs && (
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="max-w-[72ch] text-pretty text-[0.975rem] leading-7 text-muted-foreground">
                      {localized(locale, paragraph)}
                    </p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="mt-5 max-w-[72ch] space-y-3">
                  {section.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-[0.975rem] leading-7 text-muted-foreground">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{localized(locale, bullet)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.links && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {section.links.map((link) => {
                    const className = 'inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-medium text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                    const label = localized(locale, link.label)

                    if (link.href.startsWith('mailto:')) {
                      return (
                        <a key={link.href} href={link.href} className={className}>
                          <Mail className="h-4 w-4" aria-hidden="true" />
                          {label}
                        </a>
                      )
                    }

                    if (link.external) {
                      return (
                        <a key={link.href} href={link.href} className={className} target="_blank" rel="noreferrer">
                          {label}
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )
                    }

                    return (
                      <Link key={link.href} href={localizedPath(locale, link.href)} className={className}>
                        {label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      <Footer sectionBase="/" />
    </main>
  )
}
