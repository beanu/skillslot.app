'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Apple,
  Bot,
  Box,
  ChevronLeft,
  FileText,
  FolderOpen,
  LayoutGrid,
  LockKeyhole,
  Plus,
  Rocket,
  Search,
  Settings,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/context'
import { SKILLSLOT_DOWNLOAD_URL } from '@/lib/site'
import { HeroSkillField } from '@/components/landing/hero-skill-field'
import Image from 'next/image'

export function Hero() {
  const t = useT()
  const reduceMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState<'all' | 'test' | 'daily'>('test')
  const [query, setQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState('skill-map')

  const skills = [
    {
      id: 'impeccable',
      name: 'impeccable',
      description: 'Design, redesign, shape, critique, audit, and polish product interfaces.',
      color: 'bg-primary',
    },
    {
      id: 'skill-map',
      name: 'ljg-skill-map',
      description: 'Skill map viewer. Scans installed skills and renders a visual overview.',
      color: 'bg-chart-5',
    },
  ]

  const visibleSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  )
  const currentSkill = skills.find((skill) => skill.id === selectedSkill) ?? skills[1]

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <HeroSkillField />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 py-20">
        {/* Main content */}
        <div className="flex flex-col items-center text-center">
          {/* Pixel-style headline */}
          <motion.h1
            className="font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={reduceMotion ? false : { y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-foreground">{t('hero.title1')}</span>
            <span className="text-primary">{t('hero.title1Highlight')}</span>
          </motion.h1>

          <motion.h2
            className="mt-2 font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={reduceMotion ? false : { y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-foreground">{t('hero.title2')}</span>
            <span className="text-primary">{t('hero.title2Highlight')}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl"
            initial={reduceMotion ? false : { y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('hero.subtitle1')}
            <br className="hidden sm:block" />
            {t('hero.subtitle2')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={SKILLSLOT_DOWNLOAD_URL
              ? 'mt-10 grid grid-cols-1 justify-items-center gap-x-4 gap-y-2 sm:grid-cols-[auto_auto]'
              : 'mt-10 flex justify-center'}
            initial={reduceMotion ? false : { y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {SKILLSLOT_DOWNLOAD_URL && (
              <>
                <Button
                  asChild
                  size="lg"
                  className="group bg-foreground px-8 text-background hover:bg-foreground/90 sm:col-start-1 sm:row-start-1"
                >
                  <a href={SKILLSLOT_DOWNLOAD_URL}>
                    <Apple className="mr-2 h-5 w-5" aria-hidden="true" />
                    {t('hero.cta.download')}
                  </a>
                </Button>
                <span className="text-xs text-muted-foreground sm:col-start-1 sm:row-start-2">
                  {t('hero.cta.size')}
                </span>
              </>
            )}
            <Button
              asChild
              variant={SKILLSLOT_DOWNLOAD_URL ? 'outline' : 'default'}
              size="lg"
              className={SKILLSLOT_DOWNLOAD_URL
                ? 'mt-2 border-border px-8 text-foreground hover:bg-secondary sm:col-start-2 sm:row-start-1 sm:mt-0'
                : 'bg-foreground px-8 text-background hover:bg-foreground/90'}
            >
              <a href="#pricing">{t('hero.cta.pricing')}</a>
            </Button>
          </motion.div>

          {/* Supported agents */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-wider">{t('hero.supports')}</span>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {['Claude Code', 'Codex', 'Amp', 'Hermess', 'Pi', 'WorkBuddy'].map((agent) => (
                <span key={agent} className="font-mono font-medium text-foreground/80">
                  {agent}
                </span>
              ))}
              <span className="font-mono font-medium text-muted-foreground">
                {t('hero.supports.more')}
              </span>
            </div>
          </motion.div>
        </div>

        {/* App Preview */}
        <motion.div
          className="relative mt-16 w-full min-w-0 max-w-6xl"
          initial={reduceMotion ? false : { y: 32, scale: 0.99 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative min-w-0 overflow-hidden rounded-xl border border-border bg-[#0d0f0c] shadow-2xl shadow-black/40">
            <div className="grid h-[500px] min-w-0 md:h-[620px] md:grid-cols-[175px_minmax(0,1fr)] lg:grid-cols-[175px_minmax(0,1fr)_360px]">
              {/* Sidebar */}
              <aside className="relative hidden border-r border-white/10 bg-[linear-gradient(145deg,#2b2c28_0%,#1b1c19_100%)] p-3 md:flex md:flex-col">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div className="mt-7 flex items-center gap-2.5 px-1">
                  <Image
                    src="/skillslot-icon.png"
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-xl"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">SkillSlot</div>
                    <div className="text-[9px] text-white/45">Skill orchestration</div>
                  </div>
                </div>

                <nav className="mt-8 space-y-1.5" aria-label="SkillSlot app preview navigation">
                  {[
                    { label: t('hero.app.nav.skills'), icon: LayoutGrid, active: true },
                    { label: t('hero.app.nav.deploy'), icon: Rocket, active: false },
                    { label: t('hero.app.nav.settings'), icon: Settings, active: false },
                  ].map(({ label, icon: Icon, active }) => (
                    <button
                      key={label}
                      type="button"
                      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs ${
                        active
                          ? 'border border-white/15 bg-white/15 text-white'
                          : 'text-white/55 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </button>
                  ))}
                </nav>

                <div className="mt-auto rounded-lg border border-white/10 bg-black/10 p-3 text-[9px] text-white/45">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">SkillSlot</span>
                    <span>v0.1.0</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-b border-white/10 pb-3 text-primary">
                    <span>{t('hero.app.expired')}</span>
                    <ChevronLeft className="h-3 w-3 rotate-180" />
                  </div>
                  <div className="mt-3">{t('hero.app.vault')}</div>
                  <div className="mt-1 truncate font-mono">~/.skillslot/Vault</div>
                </div>
              </aside>

              {/* Skill list */}
              <div className="min-w-0 border-r border-white/8 bg-[#0d0f0c] px-4 py-5 md:px-6">
                <div className="flex items-center gap-2">
                  <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/12 bg-white/[0.035] px-3 text-white/45 focus-within:border-primary/50">
                    <Search className="h-4 w-4 shrink-0" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={t('hero.app.searchPlaceholder')}
                      className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/35"
                    />
                  </label>
                  <button type="button" className="hidden h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-[10px] text-white/45 hover:text-white sm:flex">
                    <Sparkles className="h-3.5 w-3.5" />
                    {t('hero.app.smartSort')}
                  </button>
                  <button type="button" aria-label={t('hero.app.new')} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/50 hover:text-primary">
                    <FileText className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {[
                    { id: 'all' as const, label: t('hero.app.tab.all'), count: 3, dot: '' },
                    { id: 'test' as const, label: t('hero.app.tab.test'), count: 2, dot: 'bg-primary' },
                    { id: 'daily' as const, label: t('hero.app.tab.daily'), count: 0, dot: 'bg-chart-5' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[10px] ${
                        activeTab === tab.id
                          ? 'border-primary/35 bg-primary/10 text-white'
                          : 'border-white/10 bg-white/[0.025] text-white/55 hover:text-white'
                      }`}
                    >
                      {tab.dot && <span className={`h-1.5 w-1.5 rounded-full ${tab.dot}`} />}
                      {tab.label}
                      <span className="text-white/35">{tab.count}</span>
                    </button>
                  ))}
                  <button type="button" className="ml-1 flex items-center gap-1 text-[10px] text-white/30 hover:text-primary">
                    <Plus className="h-3 w-3" />
                    {t('hero.app.new')}
                  </button>
                  <LockKeyhole className="h-3 w-3 text-white/25" />
                </div>

                <div className="mt-5 overflow-hidden rounded-lg border border-white/12 bg-white/[0.025]">
                  {visibleSkills.map((skill, index) => (
                    <button
                      key={skill.id}
                      type="button"
                      onClick={() => setSelectedSkill(skill.id)}
                      className={`group flex w-full items-center gap-3 px-4 py-3 text-left ${
                        index > 0 ? 'border-t border-white/8' : ''
                      } ${selectedSkill === skill.id ? 'bg-primary/[0.07]' : 'hover:bg-white/[0.035]'}`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                        <span className={`h-3.5 w-3.5 rounded-full ${skill.color} shadow-[0_0_14px_currentColor]`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-xs font-semibold text-white">{skill.name}</div>
                        <div className="mt-1 truncate text-[10px] text-white/45">{skill.description}</div>
                      </div>
                      <div className="hidden items-center gap-1.5 sm:flex">
                        {['Claude', 'Codex', 'Gemini', 'Cursor'].map((agent, agentIndex) => (
                          <span
                            key={agent}
                            title={agent}
                            className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15 text-white/45 group-hover:text-white/70"
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${['bg-chart-2', 'bg-primary', 'bg-chart-5', 'bg-chart-3'][agentIndex]}`} />
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                  {visibleSkills.length === 0 && (
                    <div className="px-4 py-10 text-center text-xs text-white/35">No matching skills</div>
                  )}
                </div>
              </div>

              {/* Skill detail */}
              <aside className="hidden min-w-0 bg-[#10120f] px-5 py-5 lg:block">
                <div className="flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2">
                    <ChevronLeft className="h-4 w-4 shrink-0 text-white/40" />
                    <h3 className="truncate text-sm font-semibold text-white">{currentSkill.name}</h3>
                  </div>
                  <div className="flex gap-3 text-white/50">
                    <FolderOpen className="h-4 w-4" />
                    <FileText className="h-4 w-4" />
                  </div>
                </div>

                <p className="mt-3 text-[10px] leading-5 text-white/65">{currentSkill.description} Use it to understand, compose, and deploy the right capability at a glance.</p>

                <div className="mt-5 rounded-lg border border-white/12 bg-white/[0.035] p-3.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>{t('hero.app.summary')}</span>
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-3 text-[10px] leading-5 text-white/65">
                    Visualizes installed skills with names, versions, descriptions, and categories so every capability is easy to find and understand.
                  </p>
                </div>

                <div className="mt-5 border-b border-white/10 pb-4">
                  <div className="text-xs font-semibold text-white">{t('hero.app.triggers')}</div>
                  <div className="mt-2 text-[10px] text-white/35">{t('hero.app.triggerHint')}</div>
                </div>

                <div className="mt-4 border-b border-white/10 pb-4">
                  <div className="text-xs font-semibold text-white">{t('hero.app.agentDeploy')}</div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      { name: 'Claude', icon: Sparkles, active: false },
                      { name: 'Codex', icon: Bot, active: true },
                      { name: 'Gemini', icon: Rocket, active: false },
                      { name: 'Cursor', icon: Box, active: false },
                    ].map(({ name, icon: Icon, active }) => (
                      <button
                        key={name}
                        type="button"
                        className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-left ${
                          active ? 'border-primary/30 bg-primary/[0.07]' : 'border-white/10 bg-white/[0.025]'
                        }`}
                      >
                        <Icon className={`h-3.5 w-3.5 ${active ? 'text-primary' : 'text-white/35'}`} />
                        <div>
                          <div className="text-[10px] text-white/70">{name}</div>
                          <div className="text-[8px] text-white/35">{active ? t('hero.app.deployed') : t('hero.app.deploy')}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold text-white">{t('hero.app.deployWorkspace')}</div>
                  <div className="mt-2 text-[10px] font-semibold text-white/75">skillslot-web</div>
                  <div className="mt-1 truncate font-mono text-[8px] text-white/30">~/Work/skillslot-web</div>
                  <div className="mt-2 flex max-w-[180px] items-center justify-between rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-2 text-[9px] text-white/50">
                    <span className="flex items-center gap-1.5"><Bot className="h-3 w-3" /> Codex</span>
                    <span>{t('hero.app.deployed')}</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* Floating decoration */}
          <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
