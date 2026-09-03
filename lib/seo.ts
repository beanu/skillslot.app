import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/context'
import { alternateLanguagePaths, localizedPath } from '@/lib/i18n/routing'
import { SKILLSLOT_SITE_URL } from '@/lib/site'

type PageMetadataOptions = {
  title: string
  description: string
  index?: boolean
}

const siteDescriptions: Record<Locale, string> = {
  en: 'Organize local AI Agent Skills into reusable Loadouts and deploy them to Claude Code, Codex, Gemini, and more.',
  zh: '让散落在本地的 Agent Skills 变得可见、可懂、可组合、可部署。支持 Claude Code、Codex、Gemini 等工具。',
}

export function createSiteMetadata(locale: Locale): Metadata {
  const imageUrl = `/og/${locale}`

  return {
    metadataBase: new URL(SKILLSLOT_SITE_URL),
    applicationName: 'SkillSlot',
    title: locale === 'en'
      ? 'SkillSlot — Organize and Deploy AI Agent Skills'
      : 'SkillSlot — 管理与部署本地 Agent Skills',
    description: siteDescriptions[locale],
    keywords: [
      'SkillSlot',
      'AI Agent Skills',
      'Agent Skills Manager',
      'Claude Code Skills',
      'Codex Skills',
      'Gemini CLI Skills',
      'macOS',
    ],
    authors: [{ name: 'SkillSlot Team' }],
    creator: 'SkillSlot Team',
    publisher: 'SkillSlot Team',
    category: 'Developer Tools',
    openGraph: {
      type: 'website',
      siteName: 'SkillSlot',
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
      alternateLocale: locale === 'en' ? ['zh_CN'] : ['en_US'],
      title: locale === 'en'
        ? 'SkillSlot — Organize and Deploy AI Agent Skills'
        : 'SkillSlot — 管理与部署本地 Agent Skills',
      description: siteDescriptions[locale],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: 'SkillSlot' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'en'
        ? 'SkillSlot — Organize and Deploy AI Agent Skills'
        : 'SkillSlot — 管理与部署本地 Agent Skills',
      description: siteDescriptions[locale],
      images: [imageUrl],
    },
    icons: {
      icon: [
        {
          url: '/icon-light-32x32.png',
          sizes: '32x32',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          sizes: '32x32',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      apple: {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    },
  }
}

export function createPageMetadata(
  locale: Locale,
  pathname: string,
  { title, description, index = true }: PageMetadataOptions,
): Metadata {
  const canonicalPath = localizedPath(locale, pathname)
  const imageUrl = `/og/${locale}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: alternateLanguagePaths(pathname),
    },
    openGraph: {
      type: 'website',
      url: canonicalPath,
      siteName: 'SkillSlot',
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
      alternateLocale: locale === 'en' ? ['zh_CN'] : ['en_US'],
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
  }
}
