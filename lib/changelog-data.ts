export type ChangelogSection = {
  type: 'fixes' | 'features' | 'improvements'
  items: { zh: string; en: string }[]
}

export type ChangelogEntry = {
  version: string
  date: { zh: string; en: string }
  sections: ChangelogSection[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: 'V0.3.0',
    date: { zh: '2026 年 8 月 21 日', en: 'AUG 21, 2026' },
    sections: [
      {
        type: 'features',
        items: [
          { zh: '新增 ClawHub Skill 市场', en: 'Added the ClawHub Skill market' },
          { zh: '支持安装前查看 Skill 详情', en: 'Added pre-install Skill details' },
        ],
      },
      {
        type: 'improvements',
        items: [
          { zh: '整合在线搜索与本地导入', en: 'Unified online search and local imports' },
          { zh: '优化许可证离线验证', en: 'Improved offline license verification' },
        ],
      },
      {
        type: 'fixes',
        items: [
          { zh: '修复试用状态误判', en: 'Fixed incorrect trial states' },
          { zh: '优化重复与冲突处理', en: 'Improved duplicate and conflict handling' },
          { zh: '加强安装包安全校验', en: 'Strengthened package validation' },
        ],
      },
    ],
  },
  {
    version: 'V0.2.0',
    date: { zh: '2026 年 6 月 18 日', en: 'JUN 18, 2026' },
    sections: [
      {
        type: 'features',
        items: [
          { zh: '新增浅色主题', en: 'Added a light theme' },
          { zh: '新增试用与许可证激活', en: 'Added trial and license activation' },
          { zh: '新增 AI Skill 摘要', en: 'Added AI Skill summaries' },
        ],
      },
      {
        type: 'improvements',
        items: [
          { zh: '优化 Loadout 创建流程', en: 'Improved Loadout creation' },
          { zh: '优化部署与详情布局', en: 'Refined deployment and detail layouts' },
        ],
      },
      {
        type: 'fixes',
        items: [
          { zh: '修复菜单栏状态不同步', en: 'Fixed menu bar sync' },
        ],
      },
    ],
  },
  {
    version: 'V0.1.0',
    date: { zh: '2026 年 5 月 29 日', en: 'MAY 29, 2026' },
    sections: [
      {
        type: 'features',
        items: [
          { zh: '完成 Vault 与 Loadout', en: 'Introduced Vault and Loadout' },
          { zh: '支持多 Agent 部署', en: 'Added multi-Agent deployment' },
          { zh: '支持项目工作目录', en: 'Added project workspaces' },
          { zh: '新增中英文界面', en: 'Added Chinese and English' },
          { zh: '新增 Skill Map', en: 'Added Skill Map' },
        ],
      },
      {
        type: 'fixes',
        items: [
          { zh: '修复 Loadout 删除与选择问题', en: 'Fixed Loadout deletion and selection' },
        ],
      },
    ],
  },
]
