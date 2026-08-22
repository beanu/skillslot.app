'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Apple, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage, useT } from '@/lib/i18n/context'
import Link from 'next/link'

export function Header({ sectionBase = '' }: { sectionBase?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale, setLocale } = useLanguage()
  const t = useT()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17.5 8 12 11.5 6.5 8 12 4.5zM6 9.5l5 3v5.5l-5-3V9.5zm12 0v5.5l-5 3V12l5-3z"/>
            </svg>
          </div>
          <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
            SKILLSLOT
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden items-center gap-8 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href={`${sectionBase}#features`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.features')}
          </a>
          <a href={`${sectionBase}#demo`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.demo')}
          </a>
          <a href={`${sectionBase}#pricing`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.pricing')}
          </a>
          <Link href="/changelog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.changelog')}
          </Link>
          <Link href="/prototype" className="text-sm text-primary transition-colors hover:text-primary/80">
            {t('header.prototype')}
          </Link>
        </motion.nav>

        {/* Actions */}
        <motion.div
          className="hidden items-center gap-4 md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            <span>{locale === 'en' ? 'EN' : '中文'}</span>
          </button>
          <Button
            variant="default"
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <Apple className="mr-1.5 h-4 w-4" />
            {t('header.download')}
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/50 bg-background md:hidden"
          >
            <nav className="flex flex-col gap-2 p-4">
              <a href={`${sectionBase}#features`} className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.features')}
              </a>
              <a href={`${sectionBase}#demo`} className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.demo')}
              </a>
              <a href={`${sectionBase}#pricing`} className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.pricing')}
              </a>
              <Link href="/changelog" className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.changelog')}
              </Link>
              <Link href="/prototype" className="rounded-lg px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10">
                {t('header.prototype')}
              </Link>
              <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
                <button
                  onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Globe className="h-4 w-4" />
                  <span>{locale === 'en' ? 'EN' : '中文'}</span>
                </button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  <Apple className="mr-1.5 h-4 w-4" />
                  {t('header.download')}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
