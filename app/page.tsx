import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Demo } from '@/components/landing/demo'
import { SkillShowcase } from '@/components/landing/skill-showcase'
import { MenuBarPreview } from '@/components/landing/menu-bar-preview'
import { WelcomeCard } from '@/components/landing/welcome-card'
import { Pricing } from '@/components/landing/pricing'
import { Footer } from '@/components/landing/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <SkillShowcase />
      <MenuBarPreview />
      <WelcomeCard />
      <Pricing />
      <Footer />
    </main>
  )
}
