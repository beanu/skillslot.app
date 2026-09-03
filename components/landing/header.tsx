'use client'

import { useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage, useT } from '@/lib/i18n/context'
import { SKILLSLOT_DOWNLOAD_URL } from '@/lib/site'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AppleDownloadIcon } from '@/components/apple-download-icon'
import { LANGUAGE_COOKIE, localizedPath } from '@/lib/i18n/routing'

export function Header({ sectionBase = '' }: { sectionBase?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale } = useLanguage()
  const t = useT()
  const pathname = usePathname()
  const nextLocale = locale === 'en' ? 'zh' : 'en'
  const languageHref = localizedPath(nextLocale, pathname)
  const localizedSectionBase = sectionBase === '/' ? localizedPath(locale, '/') : sectionBase

  const rememberLanguage = () => {
    document.cookie = `${LANGUAGE_COOKIE}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link
            href={localizedPath(locale, '/')}
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
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href={`${localizedSectionBase}#features`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.features')}
          </a>
          <a href={`${localizedSectionBase}#demo`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.demo')}
          </a>
          <a href={`${localizedSectionBase}#pricing`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.pricing')}
          </a>
          <Link href={localizedPath(locale, '/changelog')} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('header.changelog')}
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={languageHref}
            aria-label={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
            hrefLang={nextLocale === 'zh' ? 'zh-CN' : 'en'}
            prefetch={false}
            onClick={rememberLanguage}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            <span>{locale === 'en' ? 'EN' : '中文'}</span>
          </Link>
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <a href={SKILLSLOT_DOWNLOAD_URL || `${localizedSectionBase}#pricing`}>
              {SKILLSLOT_DOWNLOAD_URL && <AppleDownloadIcon className="mr-1.5 h-4 w-4" />}
              {SKILLSLOT_DOWNLOAD_URL ? t('header.download') : t('header.pricing')}
            </a>
          </Button>
        </div>

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
      {isMenuOpen && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="flex flex-col gap-2 p-4">
              <a href={`${localizedSectionBase}#features`} className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.features')}
              </a>
              <a href={`${localizedSectionBase}#demo`} className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.demo')}
              </a>
              <a href={`${localizedSectionBase}#pricing`} className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.pricing')}
              </a>
              <Link href={localizedPath(locale, '/changelog')} className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {t('header.changelog')}
              </Link>
              <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
                <Link
                  href={languageHref}
                  aria-label={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
                  hrefLang={nextLocale === 'zh' ? 'zh-CN' : 'en'}
                  prefetch={false}
                  onClick={rememberLanguage}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Globe className="h-4 w-4" />
                  <span>{locale === 'en' ? 'EN' : '中文'}</span>
                </Link>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  <a href={SKILLSLOT_DOWNLOAD_URL || `${localizedSectionBase}#pricing`}>
                    {SKILLSLOT_DOWNLOAD_URL && <AppleDownloadIcon className="mr-1.5 h-4 w-4" />}
                    {SKILLSLOT_DOWNLOAD_URL ? t('header.download') : t('header.pricing')}
                  </a>
                </Button>
              </div>
          </nav>
        </div>
      )}
    </header>
  )
}
