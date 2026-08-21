'use client'

import { motion } from 'framer-motion'
import { Apple, Twitter, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/context'
import Link from 'next/link'

export function Footer() {
  const t = useT()

  const productLinks = [
    { label: t('footer.product.features'), href: '#features' },
    { label: t('footer.product.pricing'), href: '#pricing' },
    { label: t('footer.product.changelog'), href: '/changelog' },
    { label: t('footer.product.roadmap'), href: '#' },
  ]

  const supportLinks = [
    { label: t('footer.support.docs'), href: '#' },
    { label: t('footer.support.faq'), href: '#' },
    { label: t('footer.support.contact'), href: '#' },
    { label: t('footer.support.privacy'), href: '#' },
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
              size="lg"
              className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              <Apple className="mr-2 h-5 w-5" />
              {t('footer.cta.download')}
            </Button>
            <p className="text-sm text-muted-foreground">
              {t('footer.cta.requirement')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Logo & description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17.5 8 12 11.5 6.5 8 12 4.5zM6 9.5l5 3v5.5l-5-3V9.5zm12 0v5.5l-5 3V12l5-3z"/>
                  </svg>
                </div>
                <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
                  SKILLSLOT
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t('footer.description')}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
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
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
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
