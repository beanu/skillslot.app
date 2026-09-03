'use client'

import { Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage, useT } from '@/lib/i18n/context'
import Image from 'next/image'
import Link from 'next/link'
import { AppleDownloadIcon } from '@/components/apple-download-icon'
import {
  SKILLSLOT_DOWNLOAD_URL,
  SKILLSLOT_GITHUB_URL,
  SKILLSLOT_SUPPORT_EMAIL,
  SKILLSLOT_X_URL,
} from '@/lib/site'
import { localizedPath } from '@/lib/i18n/routing'

export function Footer({
  sectionBase = '',
  showCta = true,
}: {
  sectionBase?: string
  showCta?: boolean
}) {
  const t = useT()
  const { locale } = useLanguage()
  const localizedSectionBase = sectionBase === '/' ? localizedPath(locale, '/') : sectionBase

  const productLinks = [
    { label: t('footer.product.features'), href: `${localizedSectionBase}#features` },
    { label: t('footer.product.pricing'), href: `${localizedSectionBase}#pricing` },
    { label: t('footer.product.changelog'), href: localizedPath(locale, '/changelog') },
  ]

  const agentSkillLinks = [
    { label: locale === 'en' ? 'Agent Skills Manager' : 'Agent Skills 管理', href: localizedPath(locale, '/agent-skills-manager') },
    { label: 'Claude Code Skills', href: localizedPath(locale, '/claude-code-skills') },
    { label: 'Codex Skills', href: localizedPath(locale, '/codex-skills') },
    { label: 'Gemini CLI Skills', href: localizedPath(locale, '/gemini-cli-skills') },
  ]

  const supportLinks = [
    { label: t('footer.support.faq'), href: `${localizedSectionBase}#faq` },
    { label: t('footer.support.contact'), href: localizedPath(locale, '/contact') },
    { label: t('footer.support.refunds'), href: localizedPath(locale, '/refund-policy') },
  ]

  return (
    <footer className="relative border-t border-border bg-card/30">
      {showCta && (
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
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
                <a href={SKILLSLOT_DOWNLOAD_URL || `${localizedSectionBase}#pricing`}>
                  {SKILLSLOT_DOWNLOAD_URL && <AppleDownloadIcon className="mr-2 h-5 w-5" />}
                  {SKILLSLOT_DOWNLOAD_URL ? t('footer.cta.download') : t('footer.cta.pricing')}
                </a>
              </Button>
              {SKILLSLOT_DOWNLOAD_URL && (
                <p className="text-sm text-muted-foreground">
                  {t('footer.cta.requirement')}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer links */}
      <div className={showCta ? 'border-t border-border' : ''}>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
            {/* Logo & description */}
            <div>
              <Link
                href={localizedPath(locale, '/')}
                aria-label="SkillSlot home"
                className="inline-flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image
                  src="/skillslot-icon.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
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

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3 xl:gap-x-12">
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

              {/* Agent Skills links */}
              <div>
                <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  Agent Skills
                </h4>
                <ul className="space-y-3">
                  {agentSkillLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
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
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <nav
              aria-label={locale === 'en' ? 'Legal' : '法律信息'}
              className="flex items-center gap-4 text-sm text-muted-foreground"
            >
              <Link
                href={localizedPath(locale, '/privacy')}
                className="inline-flex min-h-11 items-center transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t('footer.support.privacy')}
              </Link>
              <span aria-hidden="true" className="text-border">·</span>
              <Link
                href={localizedPath(locale, '/terms')}
                className="inline-flex min-h-11 items-center transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t('footer.support.terms')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
