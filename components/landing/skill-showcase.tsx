'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Check, Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/context'
import type { TranslationKey } from '@/lib/i18n/zh'

const showcaseSkillKeys: { id: number; name: string; descKey: TranslationKey; trigger: string; color: string; borderColor: string; dotColor: string }[] = [
  {
    id: 1, name: 'NextJS Expert', descKey: 'showcase.skill.nextjs',
    trigger: '/nextjs', color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30', dotColor: 'bg-amber-500',
  },
  {
    id: 2, name: 'Code Reviewer', descKey: 'showcase.skill.review',
    trigger: '/review', color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30', dotColor: 'bg-emerald-500',
  },
  {
    id: 3, name: 'SQL Master', descKey: 'showcase.skill.sql',
    trigger: '/sql', color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30', dotColor: 'bg-blue-500',
  },
  {
    id: 4, name: 'Doc Writer', descKey: 'showcase.skill.doc',
    trigger: '/docs', color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30', dotColor: 'bg-purple-500',
  },
]

export function SkillShowcase() {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([1, 2])
  const [isDeploying, setIsDeploying] = useState(false)
  const [deployedCount, setDeployedCount] = useState(0)
  const t = useT()

  const toggleSkill = (id: number) => {
    setSelectedSkills(prev =>
      prev.includes(id)
        ? prev.filter(s => s !== id)
        : [...prev, id]
    )
  }

  const handleDeploy = () => {
    if (selectedSkills.length === 0) return
    setIsDeploying(true)
    setDeployedCount(0)

    selectedSkills.forEach((_, index) => {
      setTimeout(() => {
        setDeployedCount(prev => prev + 1)
      }, (index + 1) * 300)
    })

    setTimeout(() => {
      setIsDeploying(false)
    }, selectedSkills.length * 300 + 500)
  }

  const handleReset = () => {
    setSelectedSkills([])
    setDeployedCount(0)
    setIsDeploying(false)
  }

  return (
    <section className="relative py-32">
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
            {t('showcase.eyebrow')}
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t('showcase.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t('showcase.subtitle')}
          </p>
        </motion.div>

        {/* Interactive demo */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Skill selection */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-mono text-sm font-semibold text-foreground">{t('showcase.available')}</h3>
              <span className="text-sm text-muted-foreground">
                {t('showcase.selected', { n: selectedSkills.length })}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {showcaseSkillKeys.map((skill, index) => {
                const isSelected = selectedSkills.includes(skill.id)
                return (
                  <motion.button
                    key={skill.id}
                    onClick={() => toggleSkill(skill.id)}
                    className={`group relative overflow-hidden rounded-xl border p-5 text-left transition-all ${
                      isSelected
                        ? `${skill.borderColor} bg-gradient-to-br ${skill.color}`
                        : 'border-border bg-card hover:border-border/80'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Selection indicator */}
                    <div className={`absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full transition-all ${
                      isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                    }`}>
                      {isSelected ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </div>

                    {/* Content */}
                    <div className="flex items-start gap-3">
                      <div className={`h-10 w-10 rounded-lg ${isSelected ? 'bg-white/10' : 'bg-secondary'} flex items-center justify-center`}>
                        <div className={`h-4 w-4 rounded-full ${skill.dotColor}`} />
                      </div>
                      <div className="flex-1 pr-8">
                        <h4 className="font-mono text-sm font-semibold text-foreground">{skill.name}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {t(skill.descKey)}
                        </p>
                        <div className="mt-2">
                          <code className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] text-primary">
                            {skill.trigger}
                          </code>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Deploy panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 overflow-hidden rounded-xl border border-border bg-card">
              {/* Header */}
              <div className="border-b border-border bg-secondary/30 px-4 py-3">
                <h3 className="font-mono text-sm font-semibold text-foreground">{t('showcase.panel')}</h3>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Target selection */}
                <div className="mb-4">
                  <label className="mb-2 block text-xs text-muted-foreground">{t('showcase.targetAgent')}</label>
                  <div className="rounded-lg border border-border bg-secondary/30 px-3 py-2">
                    <span className="font-mono text-sm text-foreground">Claude Code</span>
                  </div>
                </div>

                {/* Selected skills */}
                <div className="mb-4">
                  <label className="mb-2 block text-xs text-muted-foreground">{t('showcase.selectedSkills')}</label>
                  <div className="min-h-[80px] rounded-lg border border-dashed border-border bg-secondary/20 p-3">
                    <AnimatePresence mode="popLayout">
                      {selectedSkills.length === 0 ? (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center text-xs text-muted-foreground"
                        >
                          {t('showcase.emptyHint')}
                        </motion.p>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {selectedSkills.map((id) => {
                            const skill = showcaseSkillKeys.find(s => s.id === id)
                            if (!skill) return null
                            return (
                              <motion.span
                                key={id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                              >
                                <span className={`h-1.5 w-1.5 rounded-full ${skill.dotColor}`} />
                                {skill.name}
                              </motion.span>
                            )
                          })}
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Deploy progress */}
                {isDeploying && (
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-primary">{t('showcase.deploying')}</span>
                        <span className="text-primary">{deployedCount}/{selectedSkills.length}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-primary/20">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${(deployedCount / selectedSkills.length) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Success message */}
                <AnimatePresence>
                  {!isDeploying && deployedCount > 0 && deployedCount === selectedSkills.length && (
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-emerald-500">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">{t('showcase.deploySuccess', { n: deployedCount })}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    onClick={handleDeploy}
                    disabled={selectedSkills.length === 0 || isDeploying}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                  >
                    {isDeploying ? (
                      <>
                        <Pause className="mr-1.5 h-4 w-4" />
                        {t('showcase.deployingBtn')}
                      </>
                    ) : (
                      <>
                        <Play className="mr-1.5 h-4 w-4" />
                        {t('showcase.deployBtn')}
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="px-3"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
