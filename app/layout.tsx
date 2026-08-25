import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/context'
import { SKILLSLOT_SITE_URL } from '@/lib/site'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SKILLSLOT_SITE_URL),
  title: 'SkillSlot - 让本地 Agent Skills 可见、可懂、可组合、可部署',
  description: '让散落在本地的 Agent Skills 变得可见、可懂、可组合、可部署。支持 Claude Code、Codex、Gemini。',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'SkillSlot',
    title: 'SkillSlot - Agent Skill 管理与部署',
    description: '把本地 Agent Skills 收进一个 Vault，组合成 Loadout，并部署到你正在使用的 AI 编程 Agent。',
  },
  keywords: ['SkillSlot', 'AI Agent', 'Claude Code', 'Codex', 'Gemini', 'Mac App', 'Skills Management'],
  authors: [{ name: 'SkillSlot Team' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
