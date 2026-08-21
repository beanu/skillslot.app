'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Trash2, Settings, Layers } from 'lucide-react'
import { useT } from '@/lib/i18n/context'

export function MenuBarPreview() {
  const t = useT()

  const loadouts = [
    { name: t('menubar.loadout.frontend'), skills: 3, active: true },
    { name: 'Code Review', skills: 4, active: false },
    { name: t('menubar.loadout.dataAnalysis'), skills: 5, active: false },
    { name: t('menubar.loadout.docProcess'), skills: 2, active: false },
  ]

  const [isOpen, setIsOpen] = useState(true)
  const [activeLoadout, setActiveLoadout] = useState(loadouts[0])

  return (
    <section className="relative py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block font-mono text-sm uppercase tracking-wider text-primary">
              {t('menubar.eyebrow')}
            </span>
            <h2 className="text-balance font-mono text-3xl font-bold text-foreground md:text-4xl">
              {t('menubar.title')}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t('menubar.subtitle')}
            </p>

            <ul className="mt-8 space-y-4">
              {([
                t('menubar.bullet1'),
                t('menubar.bullet2'),
                t('menubar.bullet3'),
                t('menubar.bullet4'),
              ] as string[]).map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Menu bar mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mac menu bar */}
            <div className="overflow-hidden rounded-xl border border-border bg-[#1d1d1f] shadow-2xl">
              {/* Top bar */}
              <div className="flex h-7 items-center justify-between bg-[#2d2d2f] px-3">
                <div className="flex items-center gap-4">
                  <svg className="h-4 w-4 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-xs text-white/90">SkillSlot</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/60">
                  <span>Thu 4:49 PM</span>
                </div>
              </div>

              {/* Menu dropdown area */}
              <div className="relative p-4">
                {/* Trigger button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 rounded-lg bg-[#3a3a3c] px-3 py-1.5 text-sm text-white/90 transition-colors hover:bg-[#4a4a4c]"
                >
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="font-mono">{activeLoadout.name}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-4 right-4 top-14 z-10 overflow-hidden rounded-xl border border-[#3a3a3c] bg-[#2d2d2f] shadow-xl"
                    >
                      {/* Header */}
                      <div className="border-b border-[#3a3a3c] px-4 py-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-white/50">{t('menubar.currentActive')}</div>
                            <div className="mt-0.5 flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                              <span className="font-mono text-sm font-medium text-white">{activeLoadout.name}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-white/50">{t('menubar.target')}</div>
                            <div className="mt-0.5 font-mono text-sm text-white/80">Claude Code</div>
                          </div>
                        </div>
                      </div>

                      {/* Loadout list */}
                      <div className="p-2">
                        <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-white/40">
                          {t('menubar.quickSwitch')}
                        </div>
                        {loadouts.map((loadout) => (
                          <button
                            key={loadout.name}
                            onClick={() => setActiveLoadout(loadout)}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors ${
                              loadout.name === activeLoadout.name
                                ? 'bg-primary/20 text-primary'
                                : 'text-white/80 hover:bg-[#3a3a3c]'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`h-2 w-2 rounded-full ${
                                loadout.name === activeLoadout.name ? 'bg-primary' : 'bg-white/30'
                              }`} />
                              <span className="font-mono text-sm">{loadout.name}</span>
                            </div>
                            <span className="text-xs text-white/50">{loadout.skills} skills</span>
                          </button>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="border-t border-[#3a3a3c] p-2">
                        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-[#3a3a3c] hover:text-white/80">
                          <Trash2 className="h-4 w-4" />
                          {t('menubar.clearDeploy')}
                        </button>
                        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-[#3a3a3c] hover:text-white/80">
                          <Settings className="h-4 w-4" />
                          {t('menubar.openApp')}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Spacer for dropdown */}
              <div className="h-64" />
            </div>

            {/* Floating decorations */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
