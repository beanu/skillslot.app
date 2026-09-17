import type { Locale } from '@/lib/i18n/context'
import type { SeoLandingSlug } from '@/lib/seo-landing-pages'

export const GUIDE_SLUGS = [
  'how-to-activate-claude-code-skills',
  'what-are-claude-skills',
] as const

export type GuideSlug = typeof GUIDE_SLUGS[number]

// Backticks inside text render as inline code in the guide layout.
export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'code'; title: string; text: string }
  | { type: 'callout'; text: string }

export type GuideCopy = {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  lead: string
  published: string
  updated: string
  blocks: GuideBlock[]
  ctaTitle: string
  ctaDescription: string
}

export type GuideData = {
  slug: GuideSlug
  relatedLandingSlugs: SeoLandingSlug[]
  copy: Record<Locale, GuideCopy>
}

export const guides: Record<GuideSlug, GuideData> = {
  'how-to-activate-claude-code-skills': {
    slug: 'how-to-activate-claude-code-skills',
    relatedLandingSlugs: ['claude-code-skills', 'claude-skills-marketplace'],
    copy: {
      en: {
        metaTitle: 'How to Activate Claude Code Skills (Step by Step) | SkillSlot',
        metaDescription: 'A practical guide to activating Skills in Claude Code: folder locations, SKILL.md structure, how to verify activation, and fixes for Skills that never load.',
        eyebrow: 'Guide',
        title: 'How to activate Claude Code Skills',
        lead: 'The Skill is on your disk — but Claude Code ignores it. This guide covers where Skills must live, how Claude decides to load one, and how to verify and troubleshoot activation.',
        published: '2026-09-17',
        updated: '2026-09-17',
        blocks: [
          { type: 'p', text: 'Claude Code activates Skills on its own. There is no enable command to run: at the start of a session it reads the `name` and `description` frontmatter of every Skill it can find, and pulls in the full instructions when a task matches. That design keeps the context small — and it is also why a Skill filed in the wrong place, or described poorly, never activates.' },
          { type: 'h2', id: 'locations', text: 'Where Claude Code looks for Skills' },
          { type: 'p', text: 'A Skill is a folder whose instructions live in a file called `SKILL.md`. Claude Code discovers those folders in three places:' },
          { type: 'ul', items: [
            'Personal Skills: `~/.claude/skills/<skill-name>/SKILL.md` — available to your user in every project.',
            'Project Skills: `.claude/skills/<skill-name>/SKILL.md` inside the repository — versioned with the code and shared with the team.',
            'Plugin Skills: installed through a plugin marketplace with the `/plugin` command — managed per plugin rather than per folder.',
          ] },
          { type: 'p', text: 'If the folder sits anywhere else — a Downloads folder, a random subdirectory, one level too deep — Claude Code will not see it, no matter how well the Skill is written.' },
          { type: 'h2', id: 'skill-md', text: 'What a valid SKILL.md looks like' },
          { type: 'p', text: 'Activation starts with the YAML frontmatter at the top of the file. Keep the description concrete and say when the Skill applies: that sentence is the trigger Claude reads.' },
          { type: 'code', title: '~/.claude/skills/release-notes/SKILL.md', text: '---\nname: release-notes\ndescription: Draft changelogs and release notes from git history and recent PR titles. Use when the user asks to write or update release notes.\n---\n\n# Release notes\n\n1. Collect merged PR titles since the last tag.\n2. Group them under Added, Changed, Fixed.\n3. Keep one line per change, in the user\'s voice.' },
          { type: 'p', text: 'Two details matter most. First, the `description` should explain when to use the Skill, not just what it contains. Second, keep supporting scripts and templates inside the same folder — a Skill can reference its own files by relative path.' },
          { type: 'h2', id: 'activate', text: 'Activating the Skill in a session' },
          { type: 'ol', items: [
            'Place the Skill folder in `~/.claude/skills` (personal) or `.claude/skills` in your project (shared with the repo).',
            'Start a new Claude Code session. Skills are discovered when a session starts, so an already-running session will not pick up a folder you just added.',
            'Ask Claude what it can do — for example, `what skills are available in this project?` — and confirm your Skill is listed.',
            'Work on a real task that matches the description. When the task fits, Claude loads the full Skill instructions and follows them.',
          ] },
          { type: 'callout', text: 'If the listing works but the Skill never fires during real work, rewrite the description around the phrases you actually use ("use when…"), and make sure only one Skill claims the job — near-duplicate descriptions make selection unreliable.' },
          { type: 'h2', id: 'troubleshooting', text: 'When a Skill refuses to activate' },
          { type: 'ul', items: [
            'Wrong location: the folder is nested one level too deep, so `SKILL.md` is not where Claude expects it.',
            'Invalid frontmatter: a missing `name`, an empty `description`, or stray characters before the opening `---`.',
            'Stale session: the session started before the Skill was added. Restart the session.',
            'Unclear description: the Skill is found but never selected, because the description does not match how you phrase the task.',
            'Duplicate Skills: two Skills with overlapping descriptions compete for the same job; remove or rename the weaker one.',
          ] },
          { type: 'h2', id: 'managing', text: 'Managing activation across projects and agents' },
          { type: 'p', text: 'Manual activation is fine for one project and one agent. It stops scaling when you maintain Skills for several projects and several tools: the same copy-paste routine repeats for Claude Code, Codex, and Gemini CLI, each with its own directories, and the installed copies slowly drift apart.' },
          { type: 'p', text: 'SkillSlot, a local-first macOS app, keeps one Vault of your Skills and deploys them as Loadouts — reusable sets — to Claude Code and other agents with an explicit action. Instead of wondering whether the right folder reached the right project, you pick the Loadout, pick the target, and deploy.' },
        ],
        ctaTitle: 'Skip the folder ceremony',
        ctaDescription: 'Download SkillSlot for macOS and activate Loadouts in Claude Code without manual copying.',
      },
      zh: {
        metaTitle: '如何激活 Claude Code Skills（逐步指南）| SkillSlot',
        metaDescription: '激活 Claude Code Skills 的实用指南：Skill 目录位置、SKILL.md 结构、如何确认已生效，以及 Skill 不加载时的排查方法。',
        eyebrow: '指南',
        title: '如何激活 Claude Code Skills',
        lead: 'Skill 已经在磁盘上了，Claude Code 却毫无反应。这篇指南讲清 Skills 应该放在哪里、Claude 如何决定加载它们，以及如何验证和排查激活问题。',
        published: '2026-09-17',
        updated: '2026-09-17',
        blocks: [
          { type: 'p', text: 'Claude Code 会自行激活 Skills，没有所谓的“启用”命令：会话开始时，它会读取所有能找到的 Skill 的 `name` 和 `description` frontmatter，并在任务匹配时载入完整指令。这个设计让上下文保持精简——也正是为什么放错位置或描述含糊的 Skill 永远不会被激活。' },
          { type: 'h2', id: 'locations', text: 'Claude Code 在哪里寻找 Skills' },
          { type: 'p', text: '一个 Skill 就是一个文件夹，它的指令保存在 `SKILL.md` 文件中。Claude Code 会从三个位置发现这些文件夹：' },
          { type: 'ul', items: [
            '个人 Skills：`~/.claude/skills/<skill-name>/SKILL.md`——对你的用户在所有项目中可用。',
            '项目 Skills：仓库内的 `.claude/skills/<skill-name>/SKILL.md`——随代码做版本管理，与团队共享。',
            '插件 Skills：通过 `/plugin` 命令从插件市场安装——按插件而不是按文件夹管理。',
          ] },
          { type: 'p', text: '如果文件夹放在其他任何位置——下载目录、随意嵌套的子目录、深了一层的路径——无论 Skill 写得多好，Claude Code 都看不到它。' },
          { type: 'h2', id: 'skill-md', text: '一份合法的 SKILL.md 长什么样' },
          { type: 'p', text: '激活从文件顶部的 YAML frontmatter 开始。描述要具体，并写清适用场景：Claude 读取的触发条件就是这一句话。' },
          { type: 'code', title: '~/.claude/skills/release-notes/SKILL.md', text: '---\nname: release-notes\ndescription: 根据git历史和最近的PR标题起草更新日志。当用户要求撰写或更新发布说明时使用。\n---\n\n# Release notes\n\n1. 收集上一个tag以来的PR标题。\n2. 按新增、变更、修复分组。\n3. 每条变更一行，使用用户视角的表述。' },
          { type: 'p', text: '有两个细节最关键。第一，`description` 应说明“什么时候用”，而不只是“里面有什么”。第二，辅助脚本和模板要放在同一个文件夹里——Skill 可以通过相对路径引用自己的文件。' },
          { type: 'h2', id: 'activate', text: '在会话中激活 Skill' },
          { type: 'ol', items: [
            '把 Skill 文件夹放进 `~/.claude/skills`（个人）或项目的 `.claude/skills`（随仓库共享）。',
            '启动一个新的 Claude Code 会话。Skill 在会话启动时被发现，已经运行的会话不会看到刚添加的文件夹。',
            '询问 Claude 它能做什么——例如 `这个项目里有哪些可用的 skills？`——确认你的 Skill 出现在列表中。',
            '开始一个与描述匹配的真实任务。任务对得上时，Claude 会载入完整的 Skill 指令并遵循执行。',
          ] },
          { type: 'callout', text: '如果列表里能看到、实际工作中却从不触发，请围绕你真正使用的措辞（“当……时使用”）重写 description，并确保只有一个 Skill 认领这件事——描述高度雷同会让选择变得不可靠。' },
          { type: 'h2', id: 'troubleshooting', text: 'Skill 死活不激活时' },
          { type: 'ul', items: [
            '位置错误：文件夹多嵌套了一层，`SKILL.md` 不在 Claude 预期的位置。',
            'frontmatter 无效：缺少 `name`、`description` 为空，或起始 `---` 之前有多余字符。',
            '会话过期：会话在 Skill 添加之前就已启动，重启会话即可。',
            '描述不清：Skill 能被发现但从不被选中，因为 description 与你表述任务的方式不匹配。',
            '重复 Skills：两个描述重叠的 Skill 相互竞争同一任务，删除或重命名较弱的那一个。',
          ] },
          { type: 'h2', id: 'managing', text: '跨项目、跨 Agent 的激活管理' },
          { type: 'p', text: '手动激活对一个项目、一个 Agent 来说没问题。但当你为多个项目、多个工具维护 Skills 时就会失控：Claude Code、Codex、Gemini CLI 各有自己的目录，同样的复制粘贴流程反复上演，各处的安装副本逐渐失同步。' },
          { type: 'p', text: 'SkillSlot 是一款本地优先的 macOS 应用：它把你的 Skills 收进同一个 Vault，并以 Loadout（可复用组合）的形式、通过一次明确操作部署到 Claude Code 和其他 Agent。你不必再纠结“正确的文件夹有没有到达正确的项目”——选 Loadout、选目标、部署，就这三步。' },
        ],
        ctaTitle: '告别文件夹搬运',
        ctaDescription: '下载 macOS 版 SkillSlot，无需手动复制即可在 Claude Code 中启用 Loadout。',
      },
    },
  },
  'what-are-claude-skills': {
    slug: 'what-are-claude-skills',
    relatedLandingSlugs: ['claude-skills-marketplace', 'agent-skills-manager'],
    copy: {
      en: {
        metaTitle: 'What Are Claude Skills? A Practical Introduction | SkillSlot',
        metaDescription: 'Claude Skills are folder-based instruction packages that Claude loads on demand. Learn how the format works, where Skills live, and how they differ from MCP and plugins.',
        eyebrow: 'Guide',
        title: 'What are Claude Skills?',
        lead: 'A Skill is a folder of instructions Claude reads when — and only when — a task needs it. Here is how the format works, where Skills live, and how they fit with the rest of an agent setup.',
        published: '2026-09-17',
        updated: '2026-09-17',
        blocks: [
          { type: 'p', text: 'Claude Skills — also called Agent Skills — are Claude’s mechanism for reusable know-how. Each Skill is a plain folder with a `SKILL.md` file that describes a procedure: how your team reviews code, how release notes are written, which brand voice to use. Supporting scripts, templates, and reference files can live in the same folder.' },
          { type: 'p', text: 'The design principle is progressive disclosure. At the start of a session Claude keeps only each Skill’s `name` and `description` in mind. When a request matches a description, the full instructions are loaded for that conversation. A library of dozens of Skills therefore costs almost nothing until one of them is actually used.' },
          { type: 'h2', id: 'structure', text: 'How a Skill is structured' },
          { type: 'code', title: 'Folder layout', text: 'my-skill/\n├── SKILL.md        # frontmatter + instructions\n├── templates/\n│   └── issue.md    # optional supporting files\n└── scripts/\n    └── collect_prs.sh' },
          { type: 'p', text: 'The frontmatter carries the activation trigger: `name` identifies the Skill and `description` explains when to use it. The body is plain Markdown for Claude to follow, and supporting files are referenced by relative path.' },
          { type: 'h2', id: 'locations', text: 'Where Skills live' },
          { type: 'p', text: 'Personal Skills go in `~/.claude/skills`, project Skills in `.claude/skills` inside the repository, and plugin Skills arrive through a plugin marketplace via the `/plugin` command. The same Skill format also works across agents: Codex and Gemini CLI read Skills from their own directories, so one capability often needs several installed copies.' },
          { type: 'h2', id: 'compared', text: 'Skills vs. MCP servers, plugins, and slash commands' },
          { type: 'ul', items: [
            'MCP servers connect Claude to external systems and tools; Skills package instructions and files. They compose well together: a Skill describes the workflow, an MCP server provides the connection.',
            'Plugins are distribution bundles that can include Skills; installing a plugin from a marketplace is one way to add Skills.',
            'Slash commands are single shortcuts you type in a session; a Skill is a described capability Claude can choose on its own when the task fits.',
          ] },
          { type: 'h2', id: 'use-cases', text: 'What Skills are good at' },
          { type: 'ul', items: [
            'Repeatable team procedures: code-review checklists, release processes, incident reports.',
            'Project conventions: brand voice, API guidelines, architecture rules that should shape every change.',
            'Domain workflows: documentation generation, data analysis routines, QA checklists with project-specific steps.',
          ] },
          { type: 'h2', id: 'getting', text: 'Getting Skills' },
          { type: 'p', text: 'You can write a Skill yourself — any folder with a valid `SKILL.md` qualifies — copy one from a GitHub repository, or browse a marketplace. SkillSlot, a local-first macOS app, includes a Skill market that searches third-party sources such as ClawHub and installs what you find into one organized Vault.' },
          { type: 'h2', id: 'managing', text: 'When one Skill becomes thirty' },
          { type: 'p', text: 'The format is so lightweight that collections grow fast. A few Skills are easy to hand-manage; past that, the questions change from “how do I write one” to “which copy is current, and which agent has it”. SkillSlot answers those with a single Vault, AI-assisted summaries, reusable Loadouts, and explicit deployment to Claude Code, Codex, and Gemini CLI — so the collection stays understandable as it grows.' },
        ],
        ctaTitle: 'Keep your Skills organized',
        ctaDescription: 'Download SkillSlot for macOS and manage every Claude Skill — marketplace finds and your own — in one local Vault.',
      },
      zh: {
        metaTitle: '什么是 Claude Skills？入门介绍 | SkillSlot',
        metaDescription: 'Claude Skills 是按需加载的文件夹式指令包。本文讲清它的结构、存放位置，以及与 MCP、插件、斜杠命令的区别。',
        eyebrow: '指南',
        title: '什么是 Claude Skills？',
        lead: 'Skill 就是一个指令文件夹，Claude 只在任务需要时才会读取它。本文介绍这个格式如何运作、Skills 放在哪里，以及它在整套 Agent 配置中的位置。',
        published: '2026-09-17',
        updated: '2026-09-17',
        blocks: [
          { type: 'p', text: 'Claude Skills（也叫 Agent Skills）是 Claude 复用知识和流程的机制。每个 Skill 都是一个普通文件夹，核心是一份 `SKILL.md`，描述一套流程：团队怎么做代码审查、发布说明怎么写、品牌语气是什么。辅助脚本、模板和参考文件可以放在同一个文件夹里。' },
          { type: 'p', text: '它的设计原则是渐进式披露。会话开始时，Claude 只把每个 Skill 的 `name` 和 `description` 放在“心上”；当请求与某个描述匹配时，才为这次对话载入完整指令。因此几十个 Skills 的资源库几乎不占用上下文，直到真正用到为止。' },
          { type: 'h2', id: 'structure', text: 'Skill 的结构' },
          { type: 'code', title: '文件夹布局', text: 'my-skill/\n├── SKILL.md        # frontmatter + 指令\n├── templates/\n│   └── issue.md    # 可选的辅助文件\n└── scripts/\n    └── collect_prs.sh' },
          { type: 'p', text: 'frontmatter 承载激活条件：`name` 标识 Skill，`description` 说明何时使用。正文是给 Claude 遵循的 Markdown，辅助文件通过相对路径引用。' },
          { type: 'h2', id: 'locations', text: 'Skills 放在哪里' },
          { type: 'p', text: '个人 Skills 放在 `~/.claude/skills`，项目 Skills 放在仓库内的 `.claude/skills`，插件 Skills 通过 `/plugin` 命令从插件市场安装。同样的 Skill 格式也适用于其他 Agent：Codex 和 Gemini CLI 从各自的目录读取 Skills，所以一个能力往往要在多处各装一份。' },
          { type: 'h2', id: 'compared', text: 'Skills 与 MCP、插件、斜杠命令的区别' },
          { type: 'ul', items: [
            'MCP 服务器负责把 Claude 连接到外部系统和工具；Skills 封装指令和文件。两者配合得很好：Skill 描述工作流，MCP 提供连接。',
            '插件是包含 Skills 在内的分发单元；从市场安装插件是添加 Skills 的方式之一。',
            '斜杠命令是会话里手动输入的单个快捷方式；Skill 是一种带描述的能力，任务匹配时 Claude 会自己选用。',
          ] },
          { type: 'h2', id: 'use-cases', text: 'Skills 擅长什么' },
          { type: 'ul', items: [
            '可重复的团队流程：代码审查清单、发布流程、事故报告。',
            '项目规范：品牌语气、API 准则、架构规则，让每次改动都符合约定。',
            '领域工作流：文档生成、数据分析例程、带项目专属步骤的 QA 清单。',
          ] },
          { type: 'h2', id: 'getting', text: '从哪里获得 Skills' },
          { type: 'p', text: '你可以自己编写——任何包含合法 `SKILL.md` 的文件夹都算——从 GitHub 仓库复制，或在市场里浏览。SkillSlot 是一款本地优先的 macOS 应用，内置 Skill 市场，可搜索 ClawHub 等第三方来源，并把找到的内容安装进同一个有序的 Vault。' },
          { type: 'h2', id: 'managing', text: '当 1 个 Skill 变成 30 个' },
          { type: 'p', text: '这个格式太轻量，集合很快就会膨胀。几个 Skills 手动管理没问题；再往后，问题就从“怎么写一个”变成“哪份副本是最新的、哪个 Agent 装了它”。SkillSlot 用一个 Vault、AI 辅助摘要、可复用的 Loadout 和面向 Claude Code、Codex、Gemini CLI 的明确部署来回答这些问题，让集合在增长的同时保持可理解。' },
        ],
        ctaTitle: '让你的 Skills 保持有序',
        ctaDescription: '下载 macOS 版 SkillSlot，在一个本地 Vault 里管理所有 Claude Skills——市场的和自制的。',
      },
    },
  },
}

export function isGuideSlug(value: string): value is GuideSlug {
  return GUIDE_SLUGS.includes(value as GuideSlug)
}
