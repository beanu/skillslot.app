'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Play,
  RotateCcw,
  ChevronRight,
  Circle,
  CheckCircle2,
  Wifi,
  Battery,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { InteractiveApp } from '@/components/prototype/interactive-app'
import { localizedPath } from '@/lib/i18n/routing'

const flows = [
  {
    id: 'vault',
    name: '浏览 Vault',
    description: '探索你的技能仓库',
    steps: ['打开技能列表', '选择一个技能', '查看技能详情']
  },
  {
    id: 'loadout',
    name: '配置 Loadout',
    description: '组合你的技能套装',
    steps: ['创建新 Loadout', '添加技能', '设置目标 Agent']
  },
  {
    id: 'deploy',
    name: '一键部署',
    description: '将 Loadout 部署到 Agent',
    steps: ['选择 Loadout', '选择 Agent', '确认部署']
  },
  {
    id: 'menubar',
    name: '菜单栏快切',
    description: '从菜单栏快速切换',
    steps: ['点击菜单栏图标', '选择 Loadout', '即时切换']
  },
]

export default function PrototypePage() {
  const [activeFlow, setActiveFlow] = useState(flows[0])
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  // Update time on client side only to avoid hydration mismatch
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', weekday: 'short' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  const handlePlayFlow = () => {
    if (isPlaying) {
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)
    setCurrentStep(0)

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= activeFlow.steps.length - 1) {
          clearInterval(interval)
          setIsPlaying(false)
          return prev
        }
        return prev + 1
      })
    }, 1500)
  }

  const handleFlowChange = (flow: typeof flows[0]) => {
    setActiveFlow(flow)
    setCurrentStep(0)
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link href={localizedPath('zh', '/')}>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                返回首页
              </Button>
            </Link>
            <div className="h-4 w-px bg-border" />
            <h1 className="font-mono text-sm font-medium text-foreground">交互原型</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-2"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              重置
            </Button>
            <Button
              size="sm"
              onClick={handlePlayFlow}
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Play className={`h-3.5 w-3.5 ${isPlaying ? 'animate-pulse' : ''}`} />
              {isPlaying ? '播放中...' : '播放流程'}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Flow selector sidebar */}
          <aside className="space-y-6">
            <div>
              <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                交互流程
              </h2>
              <div className="space-y-2">
                {flows.map((flow) => (
                  <button
                    key={flow.id}
                    onClick={() => handleFlowChange(flow)}
                    className={`w-full rounded-lg border p-4 text-left transition-all ${
                      activeFlow.id === flow.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-mono text-sm font-medium text-foreground">
                        {flow.name}
                      </span>
                      <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${
                        activeFlow.id === flow.id ? 'rotate-90 text-primary' : ''
                      }`} />
                    </div>
                    <p className="text-xs text-muted-foreground">{flow.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Flow steps */}
            <div>
              <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                当前步骤
              </h2>
              <div className="space-y-3">
                {activeFlow.steps.map((step, index) => (
                  <motion.button
                    key={step}
                    onClick={() => !isPlaying && setCurrentStep(index)}
                    className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-all ${
                      currentStep === index
                        ? 'bg-primary/10'
                        : currentStep > index
                        ? 'bg-secondary/50'
                        : 'bg-card hover:bg-secondary/50'
                    }`}
                    initial={false}
                    animate={{
                      scale: currentStep === index ? 1.02 : 1,
                    }}
                  >
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                      currentStep > index
                        ? 'bg-primary text-primary-foreground'
                        : currentStep === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {currentStep > index ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Circle className={`h-3 w-3 ${currentStep === index ? 'fill-current' : ''}`} />
                      )}
                    </div>
                    <span className={`text-sm ${
                      currentStep >= index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Annotation */}
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-primary">提示</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                点击流程卡片切换演示，或使用"播放流程"按钮自动播放。你也可以直接点击步骤跳转到特定状态。
              </p>
            </div>
          </aside>

          {/* Interactive prototype area */}
          <main className="relative">
            <AnimatePresence mode="wait">
              {activeFlow.id === 'menubar' ? (
                /* MenuBar flow - no desktop wrapper needed, it has its own */
                <motion.div
                  key={`${activeFlow.id}-${currentStep}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <InteractiveApp
                    flowId={activeFlow.id}
                    currentStep={currentStep}
                    onStepChange={setCurrentStep}
                  />
                </motion.div>
              ) : (
                /* Other flows - wrap with macOS Desktop */
                <motion.div
                  key={`${activeFlow.id}-${currentStep}-desktop`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Sonoma-style gradient background */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `
                          radial-gradient(ellipse 120% 80% at 50% 120%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                          radial-gradient(ellipse 100% 60% at 80% 0%, rgba(236, 72, 153, 0.3) 0%, transparent 40%),
                          radial-gradient(ellipse 80% 50% at 20% 20%, rgba(168, 85, 247, 0.25) 0%, transparent 40%),
                          linear-gradient(to bottom, #1a1625 0%, #0f172a 50%, #020617 100%)
                        `
                      }}
                    />

                    {/* Subtle noise texture overlay */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* macOS Menu Bar */}
                    <div className="relative z-10 flex h-7 items-center justify-between border-b border-white/5 bg-black/40 px-4 backdrop-blur-xl">
                      <div className="flex items-center gap-5">
                        <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className="text-xs font-semibold text-white">SkillSlot</span>
                        <span className="text-xs text-white/70">文件</span>
                        <span className="text-xs text-white/70">编辑</span>
                        <span className="text-xs text-white/70">视图</span>
                        <span className="text-xs text-white/70">窗口</span>
                        <span className="text-xs text-white/70">帮助</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Wifi className="h-3.5 w-3.5 text-white/80" />
                        <Search className="h-3.5 w-3.5 text-white/80" />
                        <Battery className="h-3.5 w-3.5 text-white/80" />
                        <span className="text-xs text-white/80">
                          {currentTime || '-- : --'}
                        </span>
                      </div>
                    </div>

                    {/* Desktop content area with app window */}
                    <div className="relative z-10 p-6">
                      <div
                        className="overflow-hidden rounded-xl bg-background/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
                        style={{
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.05)'
                        }}
                      >
                        <InteractiveApp
                          flowId={activeFlow.id}
                          currentStep={currentStep}
                          onStepChange={setCurrentStep}
                        />
                      </div>
                    </div>

                    {/* macOS Dock */}
                    <div className="relative z-10 flex justify-center pb-3">
                      <motion.div
                        className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/10 p-1.5 backdrop-blur-2xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {/* Finder */}
                        <motion.div
                          className="group relative flex flex-col items-center"
                          whileHover={{ y: -8, scale: 1.15 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 shadow-lg">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-5h2v5zm0-7h-2V7h2v2z"/>
                            </svg>
                          </div>
                          <div className="pointer-events-none absolute -top-8 rounded bg-zinc-800/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            Finder
                          </div>
                        </motion.div>

                        {/* SkillSlot */}
                        <motion.div
                          className="group relative flex flex-col items-center"
                          whileHover={{ y: -8, scale: 1.15 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <Image
                            src="/skillslot-icon.png"
                            alt=""
                            width={44}
                            height={44}
                            className="h-11 w-11 rounded-xl shadow-lg"
                          />
                          <div className="absolute -bottom-1 h-1 w-1 rounded-full bg-white/80" />
                          <div className="pointer-events-none absolute -top-8 rounded bg-zinc-800/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            SkillSlot
                          </div>
                        </motion.div>

                        {/* Terminal */}
                        <motion.div
                          className="group relative flex flex-col items-center"
                          whileHover={{ y: -8, scale: 1.15 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-lg">
                            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="4 17 10 11 4 5"/>
                              <line x1="12" y1="19" x2="20" y2="19"/>
                            </svg>
                          </div>
                          <div className="pointer-events-none absolute -top-8 rounded bg-zinc-800/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            Terminal
                          </div>
                        </motion.div>

                        {/* VS Code */}
                        <motion.div
                          className="group relative flex flex-col items-center"
                          whileHover={{ y: -8, scale: 1.15 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg">
                            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.5 0l-5 4.5 5 4.5 5-4.5-5-4.5zM0 6l6 5.5L0 17l2.5 2L9 13.5V5L0 6zm17.5 1.5l-5 4.5v9l5 4.5V7.5zM12 11l-5 4.5V6.5L12 11z"/>
                            </svg>
                          </div>
                          <div className="pointer-events-none absolute -top-8 rounded bg-zinc-800/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            Code
                          </div>
                        </motion.div>

                        {/* Safari */}
                        <motion.div
                          className="group relative flex flex-col items-center"
                          whileHover={{ y: -8, scale: 1.15 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-cyan-400 to-blue-500 shadow-lg">
                            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                            </svg>
                          </div>
                          <div className="pointer-events-none absolute -top-8 rounded bg-zinc-800/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            Safari
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}
