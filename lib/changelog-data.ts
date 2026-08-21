export type ChangelogSection = {
  type: 'fixes' | 'features' | 'improvements'
  items: { zh: string; en: string }[]
}

export type ChangelogEntry = {
  version: string
  date: string
  sections: ChangelogSection[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: 'v1.0.36',
    date: 'MAY 26, 2026',
    sections: [
      {
        type: 'fixes',
        items: [
          { zh: '提升更新可靠性，确保新版本正确安装', en: 'Improved update reliability so new versions install correctly' },
          { zh: '修复 Mac 从睡眠唤醒后可能崩溃的问题', en: 'Fixed a crash that could occur after waking your Mac from sleep' },
          { zh: '修复使用量显示偶尔卡住的问题', en: 'Fixed usage display occasionally getting stuck' },
        ],
      },
    ],
  },
  {
    version: 'v1.0.35',
    date: 'MAY 25, 2026',
    sections: [
      {
        type: 'fixes',
        items: [
          { zh: '修复 Mac 从睡眠唤醒后可能崩溃的问题', en: 'Fixed a crash that could occur after waking your Mac from sleep' },
          { zh: '修复使用量显示偶尔卡在"暂时不可用"的问题', en: 'Fixed usage display occasionally getting stuck on "temporarily unavailable"' },
        ],
      },
    ],
  },
  {
    version: 'v1.0.34',
    date: 'MAY 22, 2026',
    sections: [
      {
        type: 'features',
        items: [
          { zh: '新增 GitHub URL 一键导入 Skill 功能', en: 'Added one-click Skill import from GitHub URLs' },
          { zh: '菜单栏新增快速清理当前部署选项', en: 'Added quick clear current deploy option to menu bar' },
        ],
      },
      {
        type: 'improvements',
        items: [
          { zh: '优化 Vault 扫描速度，大仓库扫描提速 3 倍', en: 'Optimized Vault scan speed — 3x faster for large repositories' },
          { zh: '改进 Loadout 切换动画流畅度', en: 'Improved Loadout switching animation smoothness' },
        ],
      },
    ],
  },
  {
    version: 'v1.0.33',
    date: 'MAY 18, 2026',
    sections: [
      {
        type: 'features',
        items: [
          { zh: '支持 Gemini CLI Agent 部署目标', en: 'Added Gemini CLI Agent as a deploy target' },
        ],
      },
      {
        type: 'fixes',
        items: [
          { zh: '修复 Loadout 重命名后偶尔丢失配置的问题', en: 'Fixed Loadout config occasionally lost after renaming' },
          { zh: '修复部署到 Codex 时路径解析错误', en: 'Fixed path resolution error when deploying to Codex' },
          { zh: '修复菜单栏图标在深色模式下不清晰的问题', en: 'Fixed menu bar icon not crisp in dark mode' },
        ],
      },
    ],
  },
  {
    version: 'v1.0.32',
    date: 'MAY 12, 2026',
    sections: [
      {
        type: 'improvements',
        items: [
          { zh: '重新设计了技能详情面板，信息展示更清晰', en: 'Redesigned skill detail panel for clearer information display' },
          { zh: '减少内存占用至 45MB 以下', en: 'Reduced memory usage to under 45MB' },
        ],
      },
      {
        type: 'fixes',
        items: [
          { zh: '修复首次启动扫描可能遗漏部分目录的问题', en: 'Fixed first-launch scan potentially missing some directories' },
        ],
      },
    ],
  },
]
