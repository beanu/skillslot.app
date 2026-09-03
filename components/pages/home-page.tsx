import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Demo } from '@/components/landing/demo'
import { SkillShowcase } from '@/components/landing/skill-showcase'
import { MenuBarPreview } from '@/components/landing/menu-bar-preview'
import { WelcomeCard } from '@/components/landing/welcome-card'
import { Pricing } from '@/components/landing/pricing'
import { FAQ } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'
import type { Locale } from '@/lib/i18n/context'
import { faqPage } from '@/lib/public-pages'
import { SKILLSLOT_DOWNLOAD_URL, SKILLSLOT_SITE_URL } from '@/lib/site'

function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export default function HomePage({ locale }: { locale: Locale }) {
  const isEnglish = locale === 'en'
  const pageUrl = isEnglish ? SKILLSLOT_SITE_URL : `${SKILLSLOT_SITE_URL}/zh`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SKILLSLOT_SITE_URL}/#organization`,
        name: 'SkillSlot',
        url: SKILLSLOT_SITE_URL,
        logo: `${SKILLSLOT_SITE_URL}/icon-512x512.png`,
      },
      {
        '@type': 'WebSite',
        '@id': `${pageUrl}/#website`,
        name: 'SkillSlot',
        url: pageUrl,
        inLanguage: isEnglish ? 'en' : 'zh-CN',
        publisher: { '@id': `${SKILLSLOT_SITE_URL}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SKILLSLOT_SITE_URL}/#software`,
        name: 'SkillSlot',
        url: pageUrl,
        downloadUrl: SKILLSLOT_DOWNLOAD_URL,
        operatingSystem: 'macOS 12.0 or later',
        applicationCategory: 'DeveloperApplication',
        description: isEnglish
          ? 'A local-first macOS app for organizing AI Agent Skills into reusable Loadouts and deploying them across coding agents.'
          : '一款本地优先的 macOS 应用，用于整理 Agent Skills、创建可复用的 Loadout，并部署到不同的 AI 编程 Agent。',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '14.99',
          highPrice: '34.99',
          offerCount: 3,
        },
        publisher: { '@id': `${SKILLSLOT_SITE_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}/#faq`,
        inLanguage: isEnglish ? 'en' : 'zh-CN',
        mainEntity: faqPage.sections.map((section) => ({
          '@type': 'Question',
          name: section.title[locale],
          acceptedAnswer: {
            '@type': 'Answer',
            text: section.paragraphs?.map((paragraph) => paragraph[locale]).join(' ') ?? '',
          },
        })),
      },
    ],
  }

  return (
    <main className="home-page min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <Header />
      <Hero />
      <Features />
      <Demo />
      <SkillShowcase />
      <MenuBarPreview />
      <WelcomeCard />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  )
}
