'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, Folder, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/context'
import type { TranslationKey } from '@/lib/i18n/zh'
import { SKILLSLOT_DOWNLOAD_URL } from '@/lib/site'

const stepKeys: { id: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { id: 'scan', titleKey: 'demo.step1.title', descKey: 'demo.step1.desc' },
  { id: 'organize', titleKey: 'demo.step2.title', descKey: 'demo.step2.desc' },
  { id: 'loadout', titleKey: 'demo.step3.title', descKey: 'demo.step3.desc' },
  { id: 'deploy', titleKey: 'demo.step4.title', descKey: 'demo.step4.desc' },
]

export function Demo() {
  const [activeStep, setActiveStep] = useState(0)
  const t = useT()

  return (
    <section id="demo" className="relative py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-mono text-sm uppercase tracking-wider text-primary">
            {t('demo.eyebrow')}
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t('demo.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t('demo.subtitle')}
          </p>
        </motion.div>

        {/* Demo content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Steps */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stepKeys.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`group w-full rounded-xl border p-4 text-left transition-all ${
                  activeStep === index
                    ? 'border-primary/50 bg-card shadow-lg shadow-primary/5'
                    : 'border-transparent bg-card/50 hover:bg-card hover:border-border'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold transition-colors ${
                    activeStep === index
                      ? 'bg-primary text-primary-foreground'
                      : activeStep > index
                        ? 'bg-primary/20 text-primary'
                        : 'bg-secondary text-muted-foreground'
                  }`}>
                    {activeStep > index ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-mono text-base font-semibold transition-colors ${
                      activeStep === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    }`}>
                      {t(step.titleKey)}
                    </h3>
                    <p className={`mt-1 text-sm transition-colors ${
                      activeStep === index ? 'text-muted-foreground' : 'text-muted-foreground/70'
                    }`}>
                      {t(step.descKey)}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-all ${
                    activeStep === index ? 'text-primary translate-x-0' : 'text-muted-foreground/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`} />
                </div>
              </button>
            ))}

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <a href={SKILLSLOT_DOWNLOAD_URL || '#pricing'}>
                  {SKILLSLOT_DOWNLOAD_URL ? t('demo.cta') : t('hero.cta.pricing')}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Visual preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              {/* Window chrome */}
              <div className="flex h-10 items-center gap-2 border-b border-border bg-secondary/50 px-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="font-mono text-xs text-muted-foreground">
                    {t(stepKeys[activeStep].titleKey)}
                  </span>
                </div>
              </div>

              {/* Demo content */}
              <div className="relative h-80 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeStep === 0 && (
                    <motion.div
                      key="scan"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 p-6"
                    >
                      <div className="mb-4 text-sm text-muted-foreground">{t('demo.scanning')}</div>
                      <div className="space-y-3">
                        {['~/.claude/skills', '~/.codex/skills', '~/.gemini/skills'].map((path, i) => (
                          <motion.div
                            key={path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-3 rounded-lg bg-secondary p-3"
                          >
                            <Folder className="h-4 w-4 text-primary" />
                            <span className="font-mono text-sm text-foreground">{path}</span>
                            <span className="ml-auto font-mono text-xs text-primary">
                              {[8, 6, 10][i]} skills
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <span className="font-mono text-2xl font-bold text-primary">24</span>
                        <span className="ml-2 text-muted-foreground">{t('demo.skillsFound')}</span>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      key="organize"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 p-6"
                    >
                      <div className="mb-4 text-sm text-muted-foreground">{t('demo.importing')}</div>
                      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Folder className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-mono text-sm font-semibold text-foreground">~/SkillSlot/Vault</div>
                            <div className="text-xs text-muted-foreground">{t('demo.singleSource')}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="h-8 rounded bg-secondary"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary">
                        <Check className="h-4 w-4" />
                        {t('demo.deduped')}
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="loadout"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 p-6"
                    >
                      <div className="mb-4 text-sm text-muted-foreground">{t('demo.createLoadout')}</div>
                      <div className="space-y-3">
                        {[
                          { name: t('demo.loadout.frontend'), skills: ['NextJS Expert', 'CSS Master', 'React Guru'], color: 'bg-primary' },
                          { name: 'Code Review', skills: ['Reviewer', 'Style Guide', 'Perf Check'], color: 'bg-chart-2' },
                          { name: t('demo.loadout.dataAnalysis'), skills: ['SQL Master', 'Chart Builder', 'Data Clean'], color: 'bg-chart-3' },
                        ].map((loadout, i) => (
                          <motion.div
                            key={loadout.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="rounded-lg border border-border bg-card p-3"
                          >
                            <div className="flex items-center gap-2">
                              <div className={`h-3 w-3 rounded-full ${loadout.color}`} />
                              <span className="font-mono text-sm font-semibold text-foreground">{loadout.name}</span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {loadout.skills.map((skill) => (
                                <span key={skill} className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div
                      key="deploy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 p-6"
                    >
                      <div className="mb-4 text-sm text-muted-foreground">{t('demo.deployToAgent')}</div>
                      <div className="flex items-center justify-center gap-8">
                        <div className="text-center">
                          <div className="mx-auto mb-2 h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center">
                            <span className="font-mono text-lg font-bold text-primary">{t('demo.frontend')}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{t('demo.loadout.label')}</span>
                        </div>
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="text-center">
                          <div className="mx-auto mb-2 h-16 w-16 rounded-xl bg-secondary flex items-center justify-center">
                            <span className="font-mono text-sm text-foreground">Claude</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{t('demo.target.label')}</span>
                        </div>
                      </div>
                      <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                          <Check className="h-4 w-4" />
                          {t('demo.deploySuccess')}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating decorations */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
