'use client'

import { motion } from 'framer-motion'
import { Apple, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/context'
import Link from 'next/link'
import {
  SKILLSLOT_DOWNLOAD_URL,
  SKILLSLOT_GITHUB_URL,
  SKILLSLOT_SUPPORT_EMAIL,
  SKILLSLOT_X_URL,
} from '@/lib/site'

export function Footer({ sectionBase = '' }: { sectionBase?: string }) {
  const t = useT()

  const productLinks = [
    { label: t('footer.product.features'), href: `${sectionBase}#features` },
    { label: t('footer.product.pricing'), href: `${sectionBase}#pricing` },
    { label: t('footer.product.changelog'), href: '/changelog' },
  ]

  const supportLinks = [
    { label: t('footer.support.faq'), href: '/faq' },
    { label: t('footer.support.contact'), href: '/contact' },
    { label: t('footer.support.privacy'), href: '/privacy' },
    { label: t('footer.support.terms'), href: '/terms' },
    { label: t('footer.support.refunds'), href: '/refund-policy' },
  ]

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* CTA Section */}
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-balance font-mono text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            {t('footer.cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {t('footer.cta.subtitle')}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              <a href={SKILLSLOT_DOWNLOAD_URL || `${sectionBase}#pricing`}>
                {SKILLSLOT_DOWNLOAD_URL && <Apple className="mr-2 h-5 w-5" aria-hidden="true" />}
                {SKILLSLOT_DOWNLOAD_URL ? t('footer.cta.download') : t('footer.cta.pricing')}
              </a>
            </Button>
            {SKILLSLOT_DOWNLOAD_URL && (
              <p className="text-sm text-muted-foreground">
                {t('footer.cta.requirement')}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Logo & description */}
            <div className="md:col-span-2">
              <Link
                href="/"
                aria-label="SkillSlot home"
                className="inline-flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17.5 8 12 11.5 6.5 8 12 4.5zM6 9.5l5 3v5.5l-5-3V9.5zm12 0v5.5l-5 3V12l5-3z"/>
                  </svg>
                </span>
                <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
                  SKILLSLOT
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t('footer.description')}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={SKILLSLOT_GITHUB_URL}
                  aria-label="SkillSlot on GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SKILLSLOT_X_URL}
                  aria-label="SkillSlot on X"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary font-mono text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true">X</span>
                </a>
                <a
                  href={`mailto:${SKILLSLOT_SUPPORT_EMAIL}`}
                  aria-label={`Email ${SKILLSLOT_SUPPORT_EMAIL}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <a
                href={`mailto:${SKILLSLOT_SUPPORT_EMAIL}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {SKILLSLOT_SUPPORT_EMAIL}
              </a>
            </div>

            {/* Product links */}
            <div>
              <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                {t('footer.product')}
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                {t('footer.support')}
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
