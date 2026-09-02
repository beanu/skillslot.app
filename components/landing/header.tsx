'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage, useT } from '@/lib/i18n/context'
import { SKILLSLOT_DOWNLOAD_URL } from '@/lib/site'
import Image from 'next/image'
import Link from 'next/link'
import { AppleDownloadIcon } from '@/components/apple-download-icon'

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
          <Link
            href="/"
            aria-label="SkillSlot home"
            className="flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src="/skillslot-icon.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
              priority
            />
            <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
              SKILLSLOT
            </span>
          </Link>
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
        </motion.nav>

        {/* Actions */}
        <motion.div
          className="hidden items-center gap-4 md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            type="button"
            aria-label={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
            onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            <span>{locale === 'en' ? 'EN' : '中文'}</span>
          </button>
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <a href={SKILLSLOT_DOWNLOAD_URL || `${sectionBase}#pricing`}>
              {SKILLSLOT_DOWNLOAD_URL && <AppleDownloadIcon className="mr-1.5 h-4 w-4" />}
              {SKILLSLOT_DOWNLOAD_URL ? t('header.download') : t('header.pricing')}
            </a>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? (locale === 'zh' ? '关闭导航菜单' : 'Close navigation menu') : (locale === 'zh' ? '打开导航菜单' : 'Open navigation menu')}
          aria-expanded={isMenuOpen}
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
              <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
                <button
                  type="button"
                  aria-label={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
                  onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Globe className="h-4 w-4" />
                  <span>{locale === 'en' ? 'EN' : '中文'}</span>
                </button>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  <a href={SKILLSLOT_DOWNLOAD_URL || `${sectionBase}#pricing`}>
                    {SKILLSLOT_DOWNLOAD_URL && <AppleDownloadIcon className="mr-1.5 h-4 w-4" />}
                    {SKILLSLOT_DOWNLOAD_URL ? t('header.download') : t('header.pricing')}
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
