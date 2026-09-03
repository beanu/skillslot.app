'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, KeyRound, Mail } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/context'
import { SKILLSLOT_DOWNLOAD_URL, SKILLSLOT_SUPPORT_EMAIL } from '@/lib/site'
import { AppleDownloadIcon } from '@/components/apple-download-icon'
import { TrackedDownloadLink } from '@/components/tracked-download-link'
import { useLanguage } from '@/lib/i18n/context'
import { localizedPath } from '@/lib/i18n/routing'

const stepKeys = [
  {
    title: 'thankYou.step.email.title',
    description: 'thankYou.step.email.description',
    icon: Mail,
  },
  {
    title: 'thankYou.step.download.title',
    description: 'thankYou.step.download.description',
    icon: AppleDownloadIcon,
  },
  {
    title: 'thankYou.step.activate.title',
    description: 'thankYou.step.activate.description',
    icon: KeyRound,
  },
] as const

export default function ThankYouPage() {
  const t = useT()
  const { locale } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Header sectionBase="/" />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-6 pb-24 pt-32">
        <motion.div
          className="w-full rounded-3xl border border-border bg-card/80 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
              <Check className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              {t('thankYou.eyebrow')}
            </p>
            <h1 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t('thankYou.title')}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('thankYou.subtitle')}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stepKeys.map(({ title, description, icon: Icon }, index) => (
              <div key={title} className="rounded-2xl border border-border bg-background/50 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/60">0{index + 1}</span>
                </div>
                <h2 className="mt-5 text-sm font-semibold text-foreground">{t(title)}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(description)}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {SKILLSLOT_DOWNLOAD_URL && (
              <Button asChild size="lg" className="w-full bg-foreground px-7 text-background hover:bg-foreground/90 sm:w-auto">
                <TrackedDownloadLink href={SKILLSLOT_DOWNLOAD_URL} source="thank_you">
                  <AppleDownloadIcon className="h-4 w-4" />
                  {t('thankYou.download')}
                </TrackedDownloadLink>
              </Button>
            )}
            <Button asChild variant="outline" size="lg" className="w-full px-7 sm:w-auto">
              <Link href={localizedPath(locale, '/')}>
                {t('thankYou.backHome')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <p className="mt-7 text-center text-xs leading-relaxed text-muted-foreground/70">
            {t('thankYou.help')}{' '}
            <a className="underline underline-offset-4 hover:text-foreground" href={`mailto:${SKILLSLOT_SUPPORT_EMAIL}`}>
              {SKILLSLOT_SUPPORT_EMAIL}
            </a>
          </p>
        </motion.div>
      </section>

      <Footer sectionBase="/" />
    </main>
  )
}
