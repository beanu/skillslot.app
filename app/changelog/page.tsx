'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'
import { changelog } from '@/lib/changelog-data'
import { useLanguage, useT } from '@/lib/i18n/context'
import type { TranslationKey } from '@/lib/i18n/zh'

const sectionTypeMap: Record<string, TranslationKey> = {
  fixes: 'changelog.fixes',
  features: 'changelog.features',
  improvements: 'changelog.improvements',
}

export default function ChangelogPage() {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 pb-32 pt-32">
        {/* Page header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {t('changelog.eyebrow')}
          </span>
          <h1
            className="text-5xl font-light italic text-foreground md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-playfair), Georgia, "Times New Roman", serif' }}
          >
            {t('changelog.title')}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t('changelog.subtitle')}
          </p>
        </motion.div>

        {/* Separator */}
        <motion.div
          className="mb-16 h-px bg-gradient-to-r from-border via-border/50 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Entries */}
        <div className="space-y-0">
          {changelog.map((entry, entryIndex) => (
            <motion.article
              key={entry.version}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + entryIndex * 0.1 }}
            >
              {/* Top border (except first) */}
              {entryIndex > 0 && (
                <div className="mb-12 h-px bg-gradient-to-r from-border/60 via-border/30 to-transparent" />
              )}

              <div className="pb-12">
                {/* Version + date */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-sm font-medium text-foreground">
                    {entry.version}
                  </span>
                  <span className="text-sm uppercase tracking-wider text-muted-foreground/60">
                    {entry.date}
                  </span>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                  {entry.sections.map((section, sectionIndex) => (
                    <div key={`${entry.version}-${section.type}-${sectionIndex}`}>
                      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-primary">
                        {t(sectionTypeMap[section.type])}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/30" />
                            {locale === 'zh' ? item.zh : item.en}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
