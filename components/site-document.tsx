import type { ReactNode } from 'react'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider, type Locale } from '@/lib/i18n/context'
import { en } from '@/lib/i18n/en'
import { zh } from '@/lib/i18n/zh'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
})

export function SiteDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  const dictionary = locale === 'en' ? en : zh

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : 'en'} className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider dictionary={dictionary} locale={locale}>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              id="umami-analytics"
              src="https://cloud.umami.is/script.js"
              data-website-id="6a1a1038-9477-49d6-910b-cf6ed03e93e1"
              strategy="afterInteractive"
            />
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
}
