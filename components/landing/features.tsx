'use client'

import { motion } from 'framer-motion'
import { Archive, Layers, Zap, FolderSync, Command, Github } from 'lucide-react'
import { useT } from '@/lib/i18n/context'
import type { TranslationKey } from '@/lib/i18n/zh'

const featureKeys: { icon: typeof Archive; titleKey: TranslationKey; descKey: TranslationKey; badgeKey: TranslationKey }[] = [
  { icon: Archive, titleKey: 'features.vault.title', descKey: 'features.vault.desc', badgeKey: 'features.vault.badge' },
  { icon: Layers, titleKey: 'features.loadout.title', descKey: 'features.loadout.desc', badgeKey: 'features.loadout.badge' },
  { icon: Zap, titleKey: 'features.deploy.title', descKey: 'features.deploy.desc', badgeKey: 'features.deploy.badge' },
  { icon: FolderSync, titleKey: 'features.multiAgent.title', descKey: 'features.multiAgent.desc', badgeKey: 'features.multiAgent.badge' },
  { icon: Command, titleKey: 'features.menubar.title', descKey: 'features.menubar.desc', badgeKey: 'features.menubar.badge' },
  { icon: Github, titleKey: 'features.github.title', descKey: 'features.github.desc', badgeKey: 'features.github.badge' },
]

export function Features() {
  const t = useT()

  return (
    <section id="features" className="relative py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-mono text-sm uppercase tracking-wider text-primary">
            {t('features.eyebrow')}
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t('features.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureKeys.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Highlight badge */}
              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  {t(feature.badgeKey)}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-mono text-lg font-semibold text-foreground">
                {t(feature.titleKey)}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {t(feature.descKey)}
              </p>

              {/* Hover decoration */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
