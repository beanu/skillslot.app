'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Plus,
  ChevronDown,
  Check,
  Settings,
  FolderOpen,
  Layers,
  Target,
  Rocket,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface InteractiveAppProps {
  flowId: string
  currentStep: number
  onStepChange: (step: number) => void
}

const skills = [
  { id: 1, name: 'NextJS Expert', desc: 'Next.js 开发最佳实践', color: 'bg-primary', active: true },
  { id: 2, name: 'Code Reviewer', desc: '代码审查与优化建议', color: 'bg-emerald-500', active: true },
  { id: 3, name: 'SQL Master', desc: 'SQL 查询优化专家', color: 'bg-cyan-500', active: false },
  { id: 4, name: 'Doc Writer', desc: '技术文档撰写助手', color: 'bg-orange-500', active: false },
  { id: 5, name: 'Test Creator', desc: '单元测试生成器', color: 'bg-pink-500', active: true },
  { id: 6, name: 'Git Wizard', desc: 'Git 操作与工作流', color: 'bg-primary', active: false },
]

const loadouts = [
  { id: 1, name: '前端开发', skills: [1, 2, 5], active: true },
  { id: 2, name: 'Code Review', skills: [2, 3], active: false },
  { id: 3, name: '数据分析', skills: [3, 4], active: false },
]

const agents = [
  { id: 'claude', name: 'Claude Code', icon: '🤖', connected: true },
  { id: 'codex', name: 'Codex', icon: '⚡', connected: true },
  { id: 'gemini', name: 'Gemini', icon: '✨', connected: false },
]

export function InteractiveApp({ flowId, currentStep, onStepChange }: InteractiveAppProps) {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)
  const [selectedLoadout, setSelectedLoadout] = useState<number | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [deploymentState, setDeploymentState] = useState<'idle' | 'deploying' | 'deployed'>('idle')
  const [showMenuBar, setShowMenuBar] = useState(false)
  const [menuBarExpanded, setMenuBarExpanded] = useState(false)

  // Reset states when flow changes
  useEffect(() => {
    setSelectedSkill(null)
    setSelectedLoadout(null)
    setSelectedAgent(null)
    setDeploymentState('idle')
    setShowMenuBar(flowId === 'menubar')
    setMenuBarExpanded(false)
  }, [flowId])

  // Auto-select based on current step
  useEffect(() => {
    if (flowId === 'vault') {
      if (currentStep >= 1) setSelectedSkill(1)
      else setSelectedSkill(null)
    } else if (flowId === 'loadout') {
      if (currentStep >= 1) setSelectedLoadout(1)
      else setSelectedLoadout(null)
    } else if (flowId === 'deploy') {
      if (currentStep >= 0) setSelectedLoadout(1)
      if (currentStep >= 1) setSelectedAgent('claude')
      if (currentStep >= 2) setDeploymentState('deployed')
    } else if (flowId === 'menubar') {
      if (currentStep >= 0) setMenuBarExpanded(true)
      if (currentStep >= 1) setSelectedLoadout(1)
      if (currentStep >= 2) setDeploymentState('deployed')
    }
  }, [currentStep, flowId])

  const renderVaultFlow = () => (
    <div className="flex h-[600px]">
      {/* Sidebar */}
      <div className="w-56 flex-shrink-0 border-r border-border bg-sidebar p-4">
        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Vault</span>
          </div>
          <motion.div
            className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${
              currentStep === 0 ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background' : 'bg-sidebar-accent'
            }`}
            animate={{ scale: currentStep === 0 ? [1, 1.02, 1] : 1 }}
            transition={{ repeat: currentStep === 0 ? Infinity : 0, duration: 1.5 }}
            onClick={() => onStepChange(0)}
          >
            <FolderOpen className="h-4 w-4" />
            <span className="text-sm">所有技能</span>
            <span className="ml-auto font-mono text-xs opacity-70">{skills.length}</span>
          </motion.div>
        </div>

        <div className="mb-6">
          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Loadouts</div>
          <div className="space-y-1">
            {loadouts.map((loadout) => (
              <div
                key={loadout.id}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
              >
                <Layers className="h-4 w-4" />
                <span className="text-sm">{loadout.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">所有技能</h3>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-48 items-center gap-2 rounded-lg border border-border bg-input px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">搜索技能...</span>
            </div>
            <Button size="sm" variant="outline" className="gap-1">
              <Plus className="h-4 w-4" />
              新建
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={`group cursor-pointer rounded-lg border p-4 transition-all ${
                selectedSkill === skill.id
                  ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'border-border bg-card hover:border-primary/50'
              } ${currentStep === 1 && index === 0 ? 'animate-pulse' : ''}`}
              onClick={() => {
                setSelectedSkill(skill.id)
                if (currentStep < 1) onStepChange(1)
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <div className={`h-4 w-4 rounded-full ${skill.color}`} />
                </div>
                <div className={`rounded-full px-2 py-0.5 text-[10px] ${
                  skill.active ? 'bg-emerald-500/20 text-emerald-400' : 'bg-secondary text-muted-foreground'
                }`}>
                  {skill.active ? 'active' : 'inactive'}
                </div>
              </div>
              <h4 className="mb-1 font-mono text-sm font-medium text-foreground">{skill.name}</h4>
              <p className="text-xs text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="w-72 flex-shrink-0 border-l border-border bg-card/50 p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">技能详情</span>
              {currentStep >= 2 && (
                <motion.div
                  className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  当前步骤
                </motion.div>
              )}
            </div>

            {(() => {
              const skill = skills.find(s => s.id === selectedSkill)
              if (!skill) return null
              return (
                <>
                  <div className="mb-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                      <div className={`h-6 w-6 rounded-full ${skill.color}`} />
                    </div>
                    <h4 className="font-mono text-base font-semibold text-foreground">{skill.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{skill.desc}</p>
                  </div>

                  <div className="mb-4 space-y-3">
                    <div className="rounded-lg bg-secondary p-3">
                      <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">触发词</div>
                      <code className="font-mono text-xs text-primary">/{skill.name.toLowerCase().replace(' ', '-')}</code>
                    </div>
                    <div className="rounded-lg bg-secondary p-3">
                      <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">来源</div>
                      <code className="font-mono text-xs text-foreground">~/.skillslot/skills/</code>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gap-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Rocket className="h-3.5 w-3.5" />
                      部署
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 gap-1">
                      <Settings className="h-3.5 w-3.5" />
                      编辑
                    </Button>
                  </div>
                </>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  const renderLoadoutFlow = () => (
    <div className="flex h-[600px]">
      {/* Sidebar */}
      <div className="w-56 flex-shrink-0 border-r border-border bg-sidebar p-4">
        <div className="mb-6">
          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Vault</div>
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground">
            <FolderOpen className="h-4 w-4" />
            <span className="text-sm">所有技能</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Loadouts</span>
            <motion.button
              className={`flex h-5 w-5 items-center justify-center rounded bg-primary/20 text-primary transition-colors hover:bg-primary/30 ${
                currentStep === 0 ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
              }`}
              animate={{ scale: currentStep === 0 ? [1, 1.15, 1] : 1 }}
              transition={{ repeat: currentStep === 0 ? Infinity : 0, duration: 1 }}
            >
              <Plus className="h-3 w-3" />
            </motion.button>
          </div>
          <div className="space-y-1">
            {loadouts.map((loadout) => (
              <motion.div
                key={loadout.id}
                className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
                  selectedLoadout === loadout.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-sidebar-accent hover:text-foreground'
                }`}
                onClick={() => {
                  setSelectedLoadout(loadout.id)
                  if (currentStep < 1) onStepChange(1)
                }}
                whileHover={{ x: 2 }}
              >
                <Layers className="h-4 w-4" />
                <span className="text-sm">{loadout.name}</span>
                {loadout.active && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Targets</div>
          <div className="space-y-1">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors ${
                  currentStep === 2 && agent.id === 'claude' ? 'bg-primary/10 ring-2 ring-primary ring-offset-2 ring-offset-background' : 'hover:bg-sidebar-accent hover:text-foreground'
                }`}
              >
                <Target className="h-4 w-4" />
                <span className="text-sm">{agent.name}</span>
                {agent.connected && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content - Loadout Editor */}
      <div className="flex-1 p-6">
        <AnimatePresence mode="wait">
          {selectedLoadout ? (
            <motion.div
              key="loadout-editor"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {loadouts.find(l => l.id === selectedLoadout)?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">管理此 Loadout 包含的技能</p>
                </div>
                <Button size="sm" className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Rocket className="h-3.5 w-3.5" />
                  部署到 Agent
                </Button>
              </div>

              {/* Skill selection */}
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">已包含技能</span>
                  {currentStep === 1 && (
                    <motion.span
                      className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      点击添加/移除
                    </motion.span>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {skills.map((skill) => {
                    const loadout = loadouts.find(l => l.id === selectedLoadout)
                    const isIncluded = loadout?.skills.includes(skill.id)
                    return (
                      <motion.div
                        key={skill.id}
                        className={`group relative cursor-pointer rounded-lg border p-3 transition-all ${
                          isIncluded
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-card hover:border-primary/30'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                            <div className={`h-3 w-3 rounded-full ${skill.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-mono text-sm font-medium text-foreground">{skill.name}</h4>
                          </div>
                          <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            isIncluded ? 'border-primary bg-primary' : 'border-border'
                          }`}>
                            {isIncluded && <Check className="h-3 w-3 text-primary-foreground" />}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Target agent selection */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">目标 Agent</span>
                  {currentStep === 2 && (
                    <motion.span
                      className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      选择部署目标
                    </motion.span>
                  )}
                </div>
                <div className="flex gap-3">
                  {agents.map((agent) => (
                    <motion.div
                      key={agent.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all ${
                        selectedAgent === agent.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-card hover:border-primary/30'
                      } ${!agent.connected ? 'opacity-50' : ''}`}
                      whileHover={{ scale: agent.connected ? 1.02 : 1 }}
                    >
                      <span className="text-xl">{agent.icon}</span>
                      <div>
                        <div className="font-mono text-sm font-medium text-foreground">{agent.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {agent.connected ? '已连接' : '未连接'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              className="flex h-full flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                <Layers className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">选择一个 Loadout</h3>
              <p className="text-center text-sm text-muted-foreground">
                从侧边栏选择一个 Loadout，<br />或创建新的技能组合
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  const renderDeployFlow = () => (
    <div className="flex h-[600px] flex-col items-center justify-center p-8">
      <div className="w-full max-w-lg space-y-8">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4">
          {['选择 Loadout', '选择 Agent', '确认部署'].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm ${
                currentStep > index
                  ? 'bg-primary text-primary-foreground'
                  : currentStep === index
                  ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {currentStep > index ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              {index < 2 && (
                <div className={`h-px w-12 ${currentStep > index ? 'bg-primary' : 'bg-border'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Content based on step */}
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-center text-xl font-semibold text-foreground">选择要部署的 Loadout</h3>
              <div className="space-y-3">
                {loadouts.map((loadout) => (
                  <motion.div
                    key={loadout.id}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      selectedLoadout === loadout.id
                        ? 'border-primary bg-primary/5 ring-2 ring-primary'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                    onClick={() => {
                      setSelectedLoadout(loadout.id)
                      setTimeout(() => onStepChange(1), 500)
                    }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                          <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-mono font-medium text-foreground">{loadout.name}</div>
                          <div className="text-sm text-muted-foreground">{loadout.skills.length} 个技能</div>
                        </div>
                      </div>
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                        selectedLoadout === loadout.id ? 'border-primary bg-primary' : 'border-border'
                      }`}>
                        {selectedLoadout === loadout.id && <Check className="h-3 w-3 text-primary-foreground" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-center text-xl font-semibold text-foreground">选择目标 Agent</h3>
              <div className="space-y-3">
                {agents.filter(a => a.connected).map((agent) => (
                  <motion.div
                    key={agent.id}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      selectedAgent === agent.id
                        ? 'border-primary bg-primary/5 ring-2 ring-primary'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                    onClick={() => {
                      setSelectedAgent(agent.id)
                      setTimeout(() => onStepChange(2), 500)
                    }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-2xl">
                          {agent.icon}
                        </div>
                        <div>
                          <div className="font-mono font-medium text-foreground">{agent.name}</div>
                          <div className="flex items-center gap-1 text-sm text-emerald-400">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            已连接
                          </div>
                        </div>
                      </div>
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                        selectedAgent === agent.id ? 'border-primary bg-primary' : 'border-border'
                      }`}>
                        {selectedAgent === agent.id && <Check className="h-3 w-3 text-primary-foreground" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <h3 className="text-center text-xl font-semibold text-foreground">
                {deploymentState === 'deployed' ? '部署成功！' : '确认部署'}
              </h3>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-mono font-medium text-foreground">
                        {loadouts.find(l => l.id === selectedLoadout)?.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {loadouts.find(l => l.id === selectedLoadout)?.skills.length} 个技能
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl">
                      {agents.find(a => a.id === selectedAgent)?.icon}
                    </div>
                    <div>
                      <div className="font-mono font-medium text-foreground">
                        {agents.find(a => a.id === selectedAgent)?.name}
                      </div>
                      <div className="text-sm text-muted-foreground">目标 Agent</div>
                    </div>
                  </div>
                </div>
              </div>

              {deploymentState === 'deployed' ? (
                <motion.div
                  className="flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <Check className="h-8 w-8 text-emerald-400" />
                  </div>
                  <p className="text-center text-muted-foreground">
                    技能已成功部署到 {agents.find(a => a.id === selectedAgent)?.name}
                  </p>
                </motion.div>
              ) : (
                <Button
                  size="lg"
                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setDeploymentState('deployed')}
                >
                  <Rocket className="h-5 w-5" />
                  确认部署
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  const renderMenuBarFlow = () => (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900">
      {/* Fake macOS desktop */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMDAwMDA1Ii8+CjxyZWN0IHg9IjMwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiMwMDAwMDAwNSIvPgo8cmVjdCB4PSIwIiB5PSIzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDAwMDAwMDUiLz4KPC9zdmc+')] opacity-30" />

      {/* Menu bar */}
      <div className="relative flex h-6 items-center justify-between bg-black/30 px-4 backdrop-blur-xl">
        <div className="flex items-center gap-4 text-xs font-medium text-white/90">
          <span></span>
          <span>Finder</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/90">
          {/* SkillSlot icon in menu bar */}
          <motion.button
            className={`flex items-center gap-1.5 rounded px-2 py-0.5 ${
              menuBarExpanded ? 'bg-white/20' : 'hover:bg-white/10'
            } ${currentStep === 0 ? 'ring-2 ring-primary ring-offset-1 ring-offset-transparent' : ''}`}
            animate={{ scale: currentStep === 0 ? [1, 1.1, 1] : 1 }}
            transition={{ repeat: currentStep === 0 ? Infinity : 0, duration: 1 }}
            onClick={() => {
              setMenuBarExpanded(!menuBarExpanded)
              if (currentStep < 1) onStepChange(1)
            }}
          >
            <Image
              src="/menubar-template.png"
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5 invert"
            />
            <ChevronDown className="h-3 w-3" />
          </motion.button>

          <span>Wed 4:49 PM</span>
        </div>
      </div>

      {/* Menu bar dropdown */}
      <AnimatePresence>
        {menuBarExpanded && (
          <motion.div
            className="absolute right-24 top-7 z-50 w-64 overflow-hidden rounded-lg border border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
          >
            <div className="p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-white/60">快速切换</span>
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>

              <div className="space-y-1">
                {loadouts.map((loadout) => (
                  <motion.button
                    key={loadout.id}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors ${
                      selectedLoadout === loadout.id
                        ? 'bg-primary/20 text-white'
                        : 'text-white/80 hover:bg-white/10'
                    } ${currentStep === 1 && loadout.id === 1 ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => {
                      setSelectedLoadout(loadout.id)
                      if (currentStep < 2) onStepChange(2)
                    }}
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      <span className="text-sm">{loadout.name}</span>
                    </div>
                    {selectedLoadout === loadout.id && deploymentState === 'deployed' && (
                      <Check className="h-4 w-4 text-emerald-400" />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="mt-3 border-t border-white/10 pt-3">
                <div className="mb-2 text-xs font-medium text-white/60">当前 Agent</div>
                <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
                  <span>🤖</span>
                  <span className="text-sm text-white/80">Claude Code</span>
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success notification */}
      <AnimatePresence>
        {deploymentState === 'deployed' && (
          <motion.div
            className="absolute right-4 top-10 z-50 flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/20 px-4 py-3 backdrop-blur-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <Check className="h-5 w-5 text-emerald-400" />
            <div>
              <div className="text-sm font-medium text-white">Loadout 已切换</div>
              <div className="text-xs text-white/60">前端开发 → Claude Code</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fake desktop content */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div className="mb-2 text-white/60">
          {currentStep === 0 && '点击菜单栏中的 SkillSlot 图标'}
          {currentStep === 1 && '从下拉菜单选择 Loadout'}
          {currentStep === 2 && '完成！技能已即时切换'}
        </div>
      </div>
    </div>
  )

  return (
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
            SkillSlot - {flowId === 'vault' ? 'Vault' : flowId === 'loadout' ? 'Loadout Editor' : flowId === 'deploy' ? 'Deploy' : 'Menu Bar'}
          </span>
        </div>
      </div>

      {/* Flow content */}
      {flowId === 'vault' && renderVaultFlow()}
      {flowId === 'loadout' && renderLoadoutFlow()}
      {flowId === 'deploy' && renderDeployFlow()}
      {flowId === 'menubar' && renderMenuBarFlow()}
    </div>
  )
}
