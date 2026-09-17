import type { Locale } from '@/lib/i18n/context'

export const SEO_LANDING_SLUGS = [
  'agent-skills-manager',
  'claude-code-skills',
  'claude-skills-marketplace',
  'codex-skills',
  'gemini-cli-skills',
] as const

export type SeoLandingSlug = typeof SEO_LANDING_SLUGS[number]

type Benefit = {
  title: string
  description: string
}

type Step = {
  title: string
  description: string
}

type Faq = {
  question: string
  answer: string
}

export type SeoLandingCopy = {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  lead: string
  problemTitle: string
  problem: string[]
  benefitsTitle: string
  benefits: Benefit[]
  workflowTitle: string
  workflowLead: string
  steps: Step[]
  compatibilityTitle: string
  compatibility: string
  faqTitle: string
  faqs: Faq[]
  ctaTitle: string
  ctaDescription: string
}

export type SeoLandingPageData = {
  slug: SeoLandingSlug
  copy: Record<Locale, SeoLandingCopy>
}

export const seoLandingPages: Record<SeoLandingSlug, SeoLandingPageData> = {
  'agent-skills-manager': {
    slug: 'agent-skills-manager',
    copy: {
      en: {
        metaTitle: 'AI Agent Skills Manager for macOS | SkillSlot',
        metaDescription: 'Organize local AI Agent Skills in one Vault, build reusable Loadouts, and deploy them across Claude Code, Codex, Gemini CLI, and more.',
        eyebrow: 'AI Agent Skills Manager',
        title: 'One local home for every Agent Skill',
        lead: 'SkillSlot turns scattered Skill folders into a clear Vault. Group the Skills you need into reusable Loadouts, then deploy the right set to the right coding agent or project.',
        problemTitle: 'Stop managing Skills as loose folders',
        problem: [
          'Agent Skills tend to accumulate across tool-specific directories, repositories, downloads, and experiments. The more agents you use, the harder it becomes to know which copy is current or where a useful Skill lives.',
          'SkillSlot gives that collection a single, local center of gravity without turning it into another cloud account or oversized platform.',
        ],
        benefitsTitle: 'A calmer Agent Skills workflow',
        benefits: [
          { title: 'One local Vault', description: 'Discover and organize Skills from one trusted local collection instead of searching several hidden directories.' },
          { title: 'Reusable Loadouts', description: 'Combine Skills by task—frontend work, review, research, or documentation—and reuse the same setup across projects.' },
          { title: 'Scoped deployment', description: 'Choose an Agent or workspace target and deploy only the Skills you intend to use there.' },
        ],
        workflowTitle: 'From scattered folders to a ready Agent',
        workflowLead: 'The workflow stays deliberately small and explicit.',
        steps: [
          { title: 'Discover', description: 'Scan supported local Agent locations and bring the Skills you choose into the Vault.' },
          { title: 'Compose', description: 'Create a Loadout that matches the work you are about to do.' },
          { title: 'Deploy', description: 'Select a target Agent or project and activate that Loadout without manual folder copying.' },
        ],
        compatibilityTitle: 'Built for multi-agent developers',
        compatibility: 'Use the same organized Skill collection with Claude Code, Codex, Gemini CLI, shared .agents/skills targets, and additional supported or custom workspaces.',
        faqTitle: 'Agent Skills manager FAQ',
        faqs: [
          { question: 'Does SkillSlot require an account?', answer: 'No. SkillSlot is local-first and can be used without creating an account.' },
          { question: 'Can I use the same Skill with multiple agents?', answer: 'Yes. Keep one organized Skill in the Vault and include it in Loadouts deployed to different supported targets.' },
          { question: 'Can I keep using SkillSlot after the trial?', answer: 'Yes. After the full-feature trial, Free Mode continues to support unlimited Skill importing, browsing, searching, and management, with paid limits applying to selected advanced actions.' },
        ],
        ctaTitle: 'Make your local Skills usable again',
        ctaDescription: 'Download SkillSlot for macOS and build your first Loadout from the Skills already on your machine.',
      },
      zh: {
        metaTitle: 'AI Agent Skills 管理工具（macOS）| SkillSlot',
        metaDescription: '用一个本地 Vault 管理 Agent Skills，组合可复用的 Loadout，并部署到 Claude Code、Codex、Gemini CLI 等工具。',
        eyebrow: 'AI Agent Skills 管理工具',
        title: '给所有 Agent Skills 一个本地归宿',
        lead: 'SkillSlot 把散落的 Skill 文件夹收进清晰的 Vault，按任务组合成可复用的 Loadout，再把合适的一组 Skills 部署到对应的编程 Agent 或项目。',
        problemTitle: '不再把 Skills 当作散落的文件夹管理',
        problem: [
          '随着使用的 Agent 增多，Skills 往往散落在工具目录、代码仓库、下载文件夹和实验项目中。你很难知道哪一份是最新的，也很难在需要时迅速找到它。',
          'SkillSlot 为这些本地资源提供一个统一入口，同时保持本地优先，不要求注册云端账号，也不把简单工作流膨胀成大型平台。',
        ],
        benefitsTitle: '更从容的 Agent Skills 工作流',
        benefits: [
          { title: '一个本地 Vault', description: '从一个可信的本地集合发现和整理 Skills，不再逐个翻找隐藏目录。' },
          { title: '可复用的 Loadout', description: '按前端开发、代码审查、研究或文档等任务组合 Skills，并在不同项目复用。' },
          { title: '范围明确的部署', description: '选择 Agent 或工作目录，只部署当前真正需要的 Skills。' },
        ],
        workflowTitle: '从散落文件夹到就绪的 Agent',
        workflowLead: '整个流程保持小而明确。',
        steps: [
          { title: '发现', description: '扫描受支持的本地 Agent 位置，把你选择的 Skills 收进 Vault。' },
          { title: '组合', description: '根据即将开始的任务创建对应 Loadout。' },
          { title: '部署', description: '选择目标 Agent 或项目，无需手动复制文件夹即可启用 Loadout。' },
        ],
        compatibilityTitle: '为多 Agent 开发者而设计',
        compatibility: '同一套 Skills 可用于 Claude Code、Codex、Gemini CLI、共享 .agents/skills 目标，以及其他受支持或自定义的工作目录。',
        faqTitle: 'Agent Skills 管理常见问题',
        faqs: [
          { question: 'SkillSlot 需要注册账号吗？', answer: '不需要。SkillSlot 本地优先，无需创建账号即可使用。' },
          { question: '同一个 Skill 能用于多个 Agent 吗？', answer: '可以。在 Vault 中维护一份 Skill，再通过不同 Loadout 部署到多个受支持目标。' },
          { question: '试用结束后还能继续使用吗？', answer: '可以。全功能试用结束后，Free Mode 仍支持不限数量导入、浏览、搜索和管理 Skills，部分高级操作受到付费限制。' },
        ],
        ctaTitle: '让本地 Skills 重新变得好用',
        ctaDescription: '下载 macOS 版 SkillSlot，用电脑上已有的 Skills 创建第一个 Loadout。',
      },
    },
  },
  'claude-code-skills': {
    slug: 'claude-code-skills',
    copy: {
      en: {
        metaTitle: 'Manage Claude Code Skills on macOS | SkillSlot',
        metaDescription: 'Discover, organize, group, and deploy Claude Code Skills from a local Vault. Reuse the same Skills with other coding agents when needed.',
        eyebrow: 'Claude Code Skills',
        title: 'A clearer way to manage Claude Code Skills',
        lead: 'Keep your Claude Code Skills visible and organized without remembering every directory. SkillSlot collects them into a local Vault and deploys task-specific Loadouts when you need them.',
        problemTitle: 'Your Claude Code setup should be easy to understand',
        problem: [
          'A few Skills are simple to manage by hand. A growing collection spread across personal and project locations is not. Duplicate copies, unclear names, and forgotten folders quickly make the setup harder to trust.',
          'SkillSlot gives you a visual inventory and keeps deployment separate from organization, so you can prepare a project without losing track of the source collection.',
        ],
        benefitsTitle: 'Organize once, deploy with intent',
        benefits: [
          { title: 'See what you have', description: 'Browse and search Claude Code Skills from one local interface with their purpose and usage context close at hand.' },
          { title: 'Build task sets', description: 'Create Loadouts for recurring work such as code review, frontend implementation, testing, or documentation.' },
          { title: 'Reuse beyond one Agent', description: 'Keep Skills organized independently of Claude Code and deploy compatible sets to other supported agents.' },
        ],
        workflowTitle: 'Prepare Claude Code in three steps',
        workflowLead: 'Keep the source collection stable while changing what each project receives.',
        steps: [
          { title: 'Import your Skills', description: 'Let SkillSlot discover local Skills and choose which ones belong in the Vault.' },
          { title: 'Create a Claude Code Loadout', description: 'Group the Skills that belong together for a specific kind of work.' },
          { title: 'Deploy to the target', description: 'Select Claude Code or a project workspace and deploy the Loadout with an explicit action.' },
        ],
        compatibilityTitle: 'Claude Code without a Claude-only library',
        compatibility: 'Your Vault remains useful when your workflow also includes Codex, Gemini CLI, or project-level shared Skills. Organize around the task instead of duplicating a collection for each tool.',
        faqTitle: 'Claude Code Skills FAQ',
        faqs: [
          { question: 'Can SkillSlot find existing Claude Code Skills?', answer: 'SkillSlot scans supported local Agent locations during setup and lets you choose which discovered Skills to import.' },
          { question: 'Do Loadouts change the original Skill content?', answer: 'Loadouts are reusable selections of Skills. They help you control what is deployed without requiring a separate edited copy for every task.' },
          { question: 'Can Claude Code Skills be shared with Codex?', answer: 'When a Skill is compatible with both tools, you can keep it in the same Vault and include it in Loadouts for each supported target.' },
        ],
        ctaTitle: 'Bring order to your Claude Code Skills',
        ctaDescription: 'Download SkillSlot for macOS and turn your current Skill folders into reusable Loadouts.',
      },
      zh: {
        metaTitle: 'Claude Code Skills 管理工具 | SkillSlot',
        metaDescription: '从本地 Vault 发现、整理、组合并部署 Claude Code Skills，需要时还可复用于其他 AI 编程 Agent。',
        eyebrow: 'Claude Code Skills',
        title: '更清晰地管理 Claude Code Skills',
        lead: '无需记住每一个目录，也能看清和整理 Claude Code Skills。SkillSlot 将它们收进本地 Vault，并在需要时部署面向具体任务的 Loadout。',
        problemTitle: 'Claude Code 配置应该一目了然',
        problem: [
          '少量 Skills 可以手动维护，但当个人目录和项目目录里的数量不断增加，重复副本、模糊命名和被遗忘的文件夹会让整套配置越来越难以信任。',
          'SkillSlot 提供可视化清单，并把整理与部署分开：准备项目环境时，不会失去对源集合的掌控。',
        ],
        benefitsTitle: '整理一次，按需部署',
        benefits: [
          { title: '看清现有 Skills', description: '在一个本地界面中浏览和搜索 Claude Code Skills，并随时查看其用途与适用场景。' },
          { title: '建立任务套装', description: '为代码审查、前端实现、测试或文档等重复工作创建 Loadout。' },
          { title: '不被单一 Agent 绑定', description: 'Skills 独立于 Claude Code 整理，并可把兼容的组合部署到其他受支持 Agent。' },
        ],
        workflowTitle: '三步准备 Claude Code',
        workflowLead: '保持源集合稳定，只改变每个项目实际获得的 Skills。',
        steps: [
          { title: '导入 Skills', description: '让 SkillSlot 发现本地 Skills，并选择需要收进 Vault 的内容。' },
          { title: '创建 Claude Code Loadout', description: '把同一类工作需要的 Skills 组合在一起。' },
          { title: '部署到目标', description: '选择 Claude Code 或具体项目工作目录，明确执行部署。' },
        ],
        compatibilityTitle: '支持 Claude Code，但不建立 Claude 专属孤岛',
        compatibility: '当工作流也包含 Codex、Gemini CLI 或项目级共享 Skills 时，同一个 Vault 依然可用。按任务整理，而不是为每个工具复制一套集合。',
        faqTitle: 'Claude Code Skills 常见问题',
        faqs: [
          { question: 'SkillSlot 能发现已有的 Claude Code Skills 吗？', answer: '可以。SkillSlot 会在设置过程中扫描受支持的本地 Agent 位置，并让你选择要导入的 Skills。' },
          { question: 'Loadout 会修改原始 Skill 内容吗？', answer: 'Loadout 是可复用的 Skills 选择集合，用于控制部署内容，不需要为每个任务维护一份单独编辑的副本。' },
          { question: 'Claude Code Skills 能复用于 Codex 吗？', answer: '如果某个 Skill 同时兼容两个工具，可以在同一个 Vault 中维护，并加入面向不同目标的 Loadout。' },
        ],
        ctaTitle: '整理你的 Claude Code Skills',
        ctaDescription: '下载 macOS 版 SkillSlot，把现有 Skill 文件夹变成可复用的 Loadout。',
      },
    },
  },
  'claude-skills-marketplace': {
    slug: 'claude-skills-marketplace',
    copy: {
      en: {
        metaTitle: 'Claude Skills Marketplace & Manager | SkillSlot',
        metaDescription: 'Browse a Claude Skills marketplace from your Mac, install Skills into one local Vault, and deploy curated Loadouts to Claude Code, Codex, and Gemini CLI.',
        eyebrow: 'Claude Skills Marketplace',
        title: 'Browse the Claude Skills marketplace without losing track',
        lead: 'SkillSlot brings marketplace discovery and local management together: search third-party Skill sources, install into one Vault, and deploy only the Skills each agent actually needs.',
        problemTitle: 'Installing Skills is easy. Keeping track of them is not.',
        problem: [
          'Marketplaces and GitHub repositories make it simple to find interesting Claude Skills. But every install lands in another folder, and after a few weeks it is hard to say which Skills you have, which ones you actually use, and which copy each agent received.',
          'SkillSlot separates discovery from deployment. Skills you install stay in one organized Vault, and each agent only receives a deliberate Loadout you choose.',
        ],
        benefitsTitle: 'A marketplace workflow that stays organized',
        benefits: [
          { title: 'Discover from one place', description: 'Search third-party Skill sources from inside SkillSlot instead of juggling browser tabs, git clones, and zip downloads.' },
          { title: 'Install into your Vault', description: 'Every Skill you add lands in one local, searchable collection, with its name, summary, and usage context close at hand.' },
          { title: 'Deploy deliberate sets', description: 'Compose Loadouts for specific work and deploy them to Claude Code, Codex, Gemini CLI, or shared workspace targets.' },
        ],
        workflowTitle: 'From marketplace find to running Skill',
        workflowLead: 'Three steps, and the source collection stays stable.',
        steps: [
          { title: 'Search', description: 'Look for Skills in the built-in Skill market or import ones you already found on disk.' },
          { title: 'Install', description: 'Add chosen Skills to the Vault so they are searchable and understandable before anything ships.' },
          { title: 'Deploy', description: 'Include the Skill in a Loadout and deploy it to the agent or project that needs it.' },
        ],
        compatibilityTitle: 'Marketplace Skills and your own, side by side',
        compatibility: 'The Vault does not care where a Skill came from. Marketplace installs, GitHub downloads, and Skills you wrote yourself are organized with the same model and can share Loadouts across Claude Code, Codex, and Gemini CLI.',
        faqTitle: 'Claude Skills marketplace FAQ',
        faqs: [
          { question: 'Which Skill sources can I install from?', answer: 'SkillSlot’s built-in Skill market searches supported third-party sources such as ClawHub. Those requests go directly to the source service, and you can also import Skills you already have on disk.' },
          { question: 'Do I need an account to install Skills?', answer: 'No. SkillSlot is local-first: installs land in your Vault on your Mac, and no SkillSlot account is required.' },
          { question: 'What happens to marketplace Skills in Free Mode?', answer: 'Importing, browsing, searching, and managing Skills is unlimited in Free Mode, and deployment to every built-in supported Agent and shared .agents/skills targets has no limits either.' },
        ],
        ctaTitle: 'Turn marketplace finds into a real workflow',
        ctaDescription: 'Download SkillSlot for macOS, search the Skill market, and deploy your first Loadout to Claude Code.',
      },
      zh: {
        metaTitle: 'Claude Skills 市场浏览与安装管理 | SkillSlot',
        metaDescription: '在 Mac 上搜索 Claude Skills 市场，把 Skills 安装进同一个本地 Vault，再按 Loadout 部署到 Claude Code、Codex 和 Gemini CLI。',
        eyebrow: 'Claude Skills 市场',
        title: '逛 Claude Skills 市场，不再失去掌控',
        lead: 'SkillSlot 把市场发现与本地管理合在一起：搜索第三方 Skill 来源，安装进同一个 Vault，再只把每个 Agent 真正需要的 Skills 部署出去。',
        problemTitle: '安装 Skills 很容易，追踪它们很难',
        problem: [
          '市场和 GitHub 仓库让你很容易找到感兴趣的 Claude Skills。但每次安装都落进另一个文件夹，几周之后，你很难说清自己有哪些 Skills、哪些真的在用、每个 Agent 拿到的又是哪一份副本。',
          'SkillSlot 把发现与部署分开：安装的 Skills 统一进入有序的 Vault，每个 Agent 只接收你明确选择的 Loadout。',
        ],
        benefitsTitle: '保持有序的市场工作流',
        benefits: [
          { title: '一处发现', description: '在 SkillSlot 内搜索第三方 Skill 来源，不必在浏览器标签、git clone 和 zip 下载之间来回切换。' },
          { title: '装进 Vault', description: '新增的 Skills 进入同一个本地集合，名称、摘要与使用场景一目了然。' },
          { title: '按需部署', description: '为具体工作组合 Loadout，并部署到 Claude Code、Codex、Gemini CLI 或共享工作目录。' },
        ],
        workflowTitle: '从市场发现到运行中的 Skill',
        workflowLead: '三个步骤，源集合保持稳定。',
        steps: [
          { title: '搜索', description: '在内置 Skill 市场查找 Skills，或导入你磁盘上已有的内容。' },
          { title: '安装', description: '把选中的 Skills 加入 Vault，先看清用途，再决定部署。' },
          { title: '部署', description: '把 Skill 加入 Loadout，部署到需要的 Agent 或项目。' },
        ],
        compatibilityTitle: '市场安装的和自制的，放在一起管理',
        compatibility: 'Vault 不关心 Skill 从哪里来。市场安装、GitHub 下载和你自己编写的 Skills 用同一套模型整理，并可在 Claude Code、Codex 和 Gemini CLI 之间共享 Loadout。',
        faqTitle: 'Claude Skills 市场常见问题',
        faqs: [
          { question: '可以从哪些来源安装 Skills？', answer: 'SkillSlot 内置 Skill 市场支持搜索 ClawHub 等第三方来源，请求直接发送给对应服务；你也可以导入磁盘上已有的 Skills。' },
          { question: '安装 Skills 需要注册账号吗？', answer: '不需要。SkillSlot 本地优先：安装内容落在你 Mac 上的 Vault 中，无需 SkillSlot 账号。' },
          { question: 'Free Mode 下市场 Skills 会受限吗？', answer: 'Free Mode 中导入、浏览、搜索和管理 Skills 不限数量，部署到所有内置支持 Agent 和共享 .agents/skills 目标同样不限。' },
        ],
        ctaTitle: '把市场里的发现变成真正的工作流',
        ctaDescription: '下载 macOS 版 SkillSlot，搜索 Skill 市场，把第一个 Loadout 部署到 Claude Code。',
      },
    },
  },
  'codex-skills': {
    slug: 'codex-skills',
    copy: {
      en: {
        metaTitle: 'Manage Codex Skills and Loadouts | SkillSlot',
        metaDescription: 'Organize local Codex Skills, create reusable Loadouts, and deploy the right Skills to Codex projects and shared agent workspaces.',
        eyebrow: 'Codex Skills',
        title: 'Keep Codex Skills ready for the work at hand',
        lead: 'SkillSlot gives Codex users a local Vault for finding, understanding, and combining Skills—then deploying a deliberate set to the project that needs it.',
        problemTitle: 'A long Skills folder is not a workflow',
        problem: [
          'As Codex Skills accumulate, the hard part is no longer installation. It is deciding which Skills belong together, which version to trust, and which project should receive them.',
          'SkillSlot makes those decisions visible through a central Vault, reusable Loadouts, and explicit deployment targets.',
        ],
        benefitsTitle: 'A practical control center for Codex Skills',
        benefits: [
          { title: 'Searchable inventory', description: 'Keep Skill names, summaries, and usage guidance in one place so the right capability is easier to find.' },
          { title: 'Project-ready Loadouts', description: 'Save a repeatable group of Skills for a stack or workflow instead of rebuilding the selection each time.' },
          { title: 'Shared target support', description: 'Deploy to Codex and supported shared .agents/skills workspaces while keeping one source collection.' },
        ],
        workflowTitle: 'Set up a Codex project without folder work',
        workflowLead: 'Choose the task, choose the target, and keep the deployment scoped.',
        steps: [
          { title: 'Review the Vault', description: 'Search the Skills you already own and check what each one is for.' },
          { title: 'Select a Loadout', description: 'Use an existing task set or compose a new one for the project.' },
          { title: 'Deploy to Codex', description: 'Activate the selected Skills in the intended Codex or workspace target.' },
        ],
        compatibilityTitle: 'Works with shared Agent conventions',
        compatibility: 'In addition to built-in Codex targets, SkillSlot supports shared .agents/skills locations and custom workspace targets, helping one collection serve more than one tool.',
        faqTitle: 'Codex Skills FAQ',
        faqs: [
          { question: 'Can I organize Codex Skills by project type?', answer: 'Yes. Create Loadouts for project types or recurring workflows, then deploy the appropriate Loadout when you switch contexts.' },
          { question: 'Does SkillSlot support shared .agents/skills folders?', answer: 'Yes. Shared .agents/skills locations are among the supported deployment targets.' },
          { question: 'Can I search Skills before deploying them?', answer: 'Yes. The Vault is designed for browsing, searching, and understanding Skills before you decide what to deploy.' },
        ],
        ctaTitle: 'Give Codex the right Skills, project by project',
        ctaDescription: 'Download SkillSlot and turn your Codex Skill collection into deliberate, reusable setups.',
      },
      zh: {
        metaTitle: 'Codex Skills 与 Loadout 管理工具 | SkillSlot',
        metaDescription: '整理本地 Codex Skills，创建可复用的 Loadout，并把合适的 Skills 部署到 Codex 项目和共享 Agent 工作目录。',
        eyebrow: 'Codex Skills',
        title: '让 Codex Skills 随时匹配当前任务',
        lead: 'SkillSlot 为 Codex 用户提供本地 Vault，用于查找、理解和组合 Skills，再把经过选择的一组内容部署到真正需要它的项目。',
        problemTitle: '很长的 Skills 文件夹并不等于工作流',
        problem: [
          '当 Codex Skills 不断增加，难点不再是安装，而是判断哪些 Skills 应该组合、哪一份值得信任，以及哪个项目应该获得它们。',
          'SkillSlot 通过中央 Vault、可复用 Loadout 和明确的部署目标，让这些决定变得可见。',
        ],
        benefitsTitle: '实用的 Codex Skills 中控台',
        benefits: [
          { title: '可搜索的清单', description: '集中保存 Skill 名称、摘要和使用指引，更快找到合适的能力。' },
          { title: '面向项目的 Loadout', description: '为技术栈或工作流保存可重复使用的一组 Skills，无需每次重新选择。' },
          { title: '共享目标支持', description: '部署到 Codex 和受支持的共享 .agents/skills 工作目录，同时只维护一个源集合。' },
        ],
        workflowTitle: '无需处理文件夹即可准备 Codex 项目',
        workflowLead: '选择任务、选择目标，并让部署范围保持清晰。',
        steps: [
          { title: '查看 Vault', description: '搜索已经拥有的 Skills，并确认每个 Skill 的用途。' },
          { title: '选择 Loadout', description: '使用已有任务套装，或为当前项目组合一个新的 Loadout。' },
          { title: '部署到 Codex', description: '在预期的 Codex 或工作目录目标中启用选定 Skills。' },
        ],
        compatibilityTitle: '兼容共享 Agent 约定',
        compatibility: '除内置 Codex 目标外，SkillSlot 还支持共享 .agents/skills 位置和自定义工作目录，让一套集合服务多个工具。',
        faqTitle: 'Codex Skills 常见问题',
        faqs: [
          { question: '能按项目类型整理 Codex Skills 吗？', answer: '可以。为项目类型或重复工作流创建 Loadout，在切换上下文时部署相应套装。' },
          { question: 'SkillSlot 支持共享 .agents/skills 文件夹吗？', answer: '支持。共享 .agents/skills 位置属于内置支持的部署目标。' },
          { question: '部署前可以先搜索 Skills 吗？', answer: '可以。Vault 用于在部署决定前浏览、搜索并理解 Skills。' },
        ],
        ctaTitle: '按项目为 Codex 准备合适的 Skills',
        ctaDescription: '下载 SkillSlot，把 Codex Skill 集合变成明确、可复用的项目配置。',
      },
    },
  },
  'gemini-cli-skills': {
    slug: 'gemini-cli-skills',
    copy: {
      en: {
        metaTitle: 'Manage Gemini CLI Skills on macOS | SkillSlot',
        metaDescription: 'Organize Gemini CLI Skills in a local Vault, create task-based Loadouts, and reuse compatible Skills across multiple AI coding agents.',
        eyebrow: 'Gemini CLI Skills',
        title: 'Organize Gemini CLI Skills without another silo',
        lead: 'Use SkillSlot to collect Gemini CLI Skills into one local Vault, understand what each Skill is for, and deploy task-focused Loadouts without duplicating your whole library.',
        problemTitle: 'Keep tool-specific folders from fragmenting your library',
        problem: [
          'Gemini CLI can be one part of a broader agent workflow. If every tool gets a separate manually maintained Skill collection, useful capabilities drift into duplicates and become harder to update.',
          'SkillSlot keeps the source collection organized independently, while still letting you deploy the combination Gemini CLI needs.',
        ],
        benefitsTitle: 'A reusable Gemini CLI Skill library',
        benefits: [
          { title: 'Local visibility', description: 'Browse Gemini CLI Skills alongside the rest of your local collection without sending the Vault to a cloud account.' },
          { title: 'Task-based combinations', description: 'Save Loadouts for research, implementation, review, or other repeated workflows.' },
          { title: 'Cross-agent reuse', description: 'Include compatible Skills in Loadouts for Gemini CLI, Claude Code, Codex, and supported workspace targets.' },
        ],
        workflowTitle: 'Move from collection to deployment',
        workflowLead: 'Keep organization stable and change only the active task set.',
        steps: [
          { title: 'Collect', description: 'Bring discovered Gemini CLI and other local Skills into the Vault.' },
          { title: 'Choose', description: 'Select or create the Loadout that matches the current job.' },
          { title: 'Activate', description: 'Deploy it to Gemini CLI or the intended project target.' },
        ],
        compatibilityTitle: 'One Vault across changing tools',
        compatibility: 'When you move between Gemini CLI, Claude Code, Codex, and other supported agents, the organization model stays the same: Vault, Loadout, target, deploy.',
        faqTitle: 'Gemini CLI Skills FAQ',
        faqs: [
          { question: 'Can Gemini CLI Skills live with Skills for other agents?', answer: 'Yes. The Vault is agent-independent, so compatible Skills can be organized once and used in more than one Loadout.' },
          { question: 'Can I create a Gemini-specific Loadout?', answer: 'Yes. A Loadout can represent the exact group of Skills you want available for a Gemini CLI workflow.' },
          { question: 'Is the Skill library stored locally?', answer: 'Yes. SkillSlot is local-first and keeps its core Skill data on your Mac.' },
        ],
        ctaTitle: 'Build a cleaner Gemini CLI setup',
        ctaDescription: 'Download SkillSlot for macOS and organize your Gemini CLI Skills alongside the rest of your Agent toolkit.',
      },
      zh: {
        metaTitle: 'Gemini CLI Skills 管理工具 | SkillSlot',
        metaDescription: '在本地 Vault 中整理 Gemini CLI Skills，创建面向任务的 Loadout，并跨多个 AI 编程 Agent 复用兼容 Skills。',
        eyebrow: 'Gemini CLI Skills',
        title: '整理 Gemini CLI Skills，不再制造新的孤岛',
        lead: '用 SkillSlot 把 Gemini CLI Skills 收进一个本地 Vault，看懂每个 Skill 的用途，并部署面向任务的 Loadout，无需复制整套资源库。',
        problemTitle: '别让工具专属目录割裂你的 Skill 库',
        problem: [
          'Gemini CLI 往往只是整个 Agent 工作流的一部分。如果每个工具都要手动维护一套独立 Skills，有用的能力就会逐渐分裂成多个副本，更新也更困难。',
          'SkillSlot 让源集合保持独立和有序，同时仍能为 Gemini CLI 部署真正需要的组合。',
        ],
        benefitsTitle: '可复用的 Gemini CLI Skill 库',
        benefits: [
          { title: '本地可见', description: '把 Gemini CLI Skills 与其他本地集合一起浏览，无需上传到云端账号。' },
          { title: '面向任务的组合', description: '为研究、实现、审查或其他重复工作流保存 Loadout。' },
          { title: '跨 Agent 复用', description: '把兼容 Skills 加入 Gemini CLI、Claude Code、Codex 和受支持工作目录的 Loadout。' },
        ],
        workflowTitle: '从集合走向部署',
        workflowLead: '保持整理结构稳定，只切换当前生效的任务套装。',
        steps: [
          { title: '收集', description: '把发现的 Gemini CLI 和其他本地 Skills 收进 Vault。' },
          { title: '选择', description: '选择或创建适合当前工作的 Loadout。' },
          { title: '启用', description: '将其部署到 Gemini CLI 或预期的项目目标。' },
        ],
        compatibilityTitle: '工具变化，Vault 不变',
        compatibility: '在 Gemini CLI、Claude Code、Codex 和其他受支持 Agent 之间切换时，整理模型始终一致：Vault、Loadout、目标、部署。',
        faqTitle: 'Gemini CLI Skills 常见问题',
        faqs: [
          { question: 'Gemini CLI Skills 能与其他 Agent 的 Skills 放在一起吗？', answer: '可以。Vault 独立于具体 Agent，兼容 Skills 可以只整理一次，并用于多个 Loadout。' },
          { question: '能创建 Gemini 专属 Loadout 吗？', answer: '可以。Loadout 可以精确表示某个 Gemini CLI 工作流需要的一组 Skills。' },
          { question: 'Skill 库保存在本地吗？', answer: '是的。SkillSlot 本地优先，核心 Skill 数据保存在你的 Mac 上。' },
        ],
        ctaTitle: '建立更清晰的 Gemini CLI 配置',
        ctaDescription: '下载 macOS 版 SkillSlot，把 Gemini CLI Skills 与其他 Agent 工具一起整理。',
      },
    },
  },
}

export function isSeoLandingSlug(value: string): value is SeoLandingSlug {
  return SEO_LANDING_SLUGS.includes(value as SeoLandingSlug)
}
