export type ChangelogSection = {
  type: 'fixes' | 'features' | 'improvements'
  items: { zh: string; en: string }[]
}

export type ChangelogEntry = {
  version: { zh: string; en: string }
  date: { zh: string; en: string }
  sections: ChangelogSection[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: { zh: 'v0.1.0', en: 'v0.1.0' },
    date: { zh: '2026 年 8 月 21 日', en: 'AUG 21, 2026' },
    sections: [
      {
        type: 'features',
        items: [
          { zh: '新增 Skill 市场，可搜索 ClawHub 并直接加入技能库', en: 'Added Skill discovery and installation from ClawHub' },
          { zh: '安装前可查看版本、安全状态、运行要求和完整说明', en: 'Review versions, security status, requirements, and documentation before installing' },
        ],
      },
      {
        type: 'improvements',
        items: [
          { zh: '统一在线查找与本地导入入口，并简化应用导航', en: 'Unified online discovery and local imports with simpler navigation' },
          { zh: '许可验证支持离线状态，并会在联网后自动重试', en: 'License verification now handles offline use and retries automatically' },
        ],
      },
      {
        type: 'fixes',
        items: [
          { zh: '修复试用状态误判，并加强重复、冲突和异常安装包处理', en: 'Fixed incorrect trial states and strengthened duplicate, conflict, and package handling' },
        ],
      },
    ],
  },
  {
    version: { zh: '预览版 · 2026.06', en: 'Preview · 2026.06' },
    date: { zh: '2026 年 6 月 18 日', en: 'JUN 18, 2026' },
    sections: [
      {
        type: 'features',
        items: [
          { zh: '新增浅色主题，以及完整的试用与许可证激活流程', en: 'Added a light theme and complete trial and license activation flows' },
          { zh: '新增 AI Skill 摘要，并支持在独立窗口查看完整文档', en: 'Added AI Skill summaries and a focused full-document view' },
        ],
      },
      {
        type: 'improvements',
        items: [
          { zh: '优化 Loadout 创建、部署布局、详情面板和菜单栏同步', en: 'Improved Loadout creation, deployment layout, detail panels, and menu bar sync' },
        ],
      },
    ],
  },
  {
    version: { zh: '早期预览 · 2026.05', en: 'Early Preview · 2026.05' },
    date: { zh: '2026 年 5 月 29 日', en: 'MAY 29, 2026' },
    sections: [
      {
        type: 'features',
        items: [
          { zh: '完成 Vault、Loadout 与多 Agent 部署的核心工作流', en: 'Introduced the core Vault, Loadout, and multi-Agent deployment workflow' },
          { zh: '支持项目工作目录作为部署目标', en: 'Added project workspaces as deployment targets' },
          { zh: '新增中英文界面和 Skill Map', en: 'Added Chinese and English interfaces plus Skill Map' },
        ],
      },
    ],
  },
]
