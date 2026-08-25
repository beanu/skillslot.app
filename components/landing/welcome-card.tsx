'use client'

import { motion } from 'framer-motion'
import { FileText, Clock, Shuffle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/context'
import Link from 'next/link'

export function WelcomeCard() {
  const t = useT()

  return (
    <section className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Card preview */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Boarding pass card */}
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border bg-card p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17.5 8 12 11.5 6.5 8 12 4.5zM6 9.5l5 3v5.5l-5-3V9.5zm12 0v5.5l-5 3V12l5-3z"/>
                    </svg>
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-primary">SKILLSLOT</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">→ SNFF</span>
              </div>

              {/* Pixel art pattern */}
              <div className="flex items-center justify-center bg-secondary/50 p-8">
                <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(16, 1fr)' }}>
                  {Array.from({ length: 256 }).map((_, i) => {
                    const row = Math.floor(i / 16)
                    const col = i % 16
                    const isArrow = (
                      (col === 7 || col === 8) && row >= 2 && row <= 13 ||
                      (row === 2 && col >= 5 && col <= 10) ||
                      (row === 3 && col >= 6 && col <= 9) ||
                      (row === 13 && col >= 6 && col <= 9) ||
                      (row === 14 && col >= 7 && col <= 8)
                    )
                    return (
                      <motion.div
                        key={i}
                        className={`h-2 w-2 rounded-sm ${isArrow ? 'bg-primary' : 'bg-primary/10'}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.002 }}
                      />
                    )
                  })}
                </div>
              </div>

              {/* Info section */}
              <div className="border-t border-border p-4">
                <div className="mb-4">
                  <h3 className="font-mono text-lg font-bold text-primary">EXPLORER</h3>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">BOARDING_PASS</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-xs uppercase tracking-wider text-muted-foreground">STATUS</span>
                    <span className="text-xs text-muted-foreground">{'>'}</span>
                    <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-xs font-medium text-primary">LANDED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-xs uppercase tracking-wider text-muted-foreground">JOINED</span>
                    <span className="text-xs text-muted-foreground">{'>'}</span>
                    <span className="font-mono text-xs text-primary">30.04.2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-xs uppercase tracking-wider text-muted-foreground">ACCESS</span>
                    <span className="text-xs text-muted-foreground">{'>'}</span>
                    <span className="font-mono text-xs text-primary">FULL</span>
                  </div>
                </div>

                {/* Divider with dots */}
                <div className="my-4 flex items-center gap-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="h-px flex-1 bg-border" />
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-muted-foreground">SKILLSLOT ≡ V1</span>
                  <span className="font-mono text-primary">WELCOME ABOARD</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-center gap-6 border-t border-border bg-secondary/30 p-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground">
                  <FileText className="h-5 w-5" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground">
                  <Clock className="h-5 w-5" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground">
                  <Shuffle className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Floating decorations */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="mb-4 inline-block font-mono text-sm uppercase tracking-wider text-primary">
              {t('welcome.eyebrow')}
            </span>
            <h2 className="text-balance font-mono text-3xl font-bold text-foreground md:text-4xl">
              {t('welcome.title')}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t('welcome.subtitle')}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h4 className="font-mono text-sm font-semibold text-foreground">{t('welcome.native.title')}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{t('welcome.native.desc')}</p>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h4 className="font-mono text-sm font-semibold text-foreground">{t('welcome.local.title')}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{t('welcome.local.desc')}</p>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h4 className="font-mono text-sm font-semibold text-foreground">{t('welcome.buyOnce.title')}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{t('welcome.buyOnce.desc')}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/faq">
                  {t('welcome.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
