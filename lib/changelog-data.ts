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
    version: 'v0.1.0',
    date: { zh: '2026 年 8 月 21 日', en: 'AUG 21, 2026' },
    sections: [
      {
        type: 'features',
        items: [
          { zh: '新增“添加技能”中心，可直接搜索 ClawHub，从社区发现并添加 Skill', en: 'Added the Add Skills center for discovering and installing community Skills from ClawHub' },
          { zh: '安装前可查看发布者、版本、下载量、安全状态、运行要求和完整 SKILL.md', en: 'Review the publisher, version, downloads, security status, requirements, and full SKILL.md before installing' },
          { zh: 'Skill 加入技能库后，可立即打开详情并部署到目标 Agent', en: 'Open an installed Skill immediately and deploy it to a target Agent' },
        ],
      },
      {
        type: 'improvements',
        items: [
          { zh: '重新整理应用导航，技能库、添加技能、部署和设置更容易找到', en: 'Reorganized navigation so the Skill Library, Add Skills, Deployments, and Settings are easier to find' },
          { zh: '在线查找与本地导入统一到同一个入口，管理不同来源的 Skill 更顺手', en: 'Brought online discovery and local imports into one clear entry point' },
          { zh: '许可与试用状态更加清晰；离线时继续使用最近一次验证结果，并在联网后自动重试', en: 'Made license and trial status clearer, with cached offline status and automatic retry when you reconnect' },
          { zh: '更新 SkillSlot 应用图标，并优化主窗口尺寸和整体布局', en: 'Updated the SkillSlot app icon and refined the main window layout' },
        ],
      },
      {
        type: 'fixes',
        items: [
          { zh: '修复许可证服务暂时不可用时，试用状态可能被错误显示为已过期的问题', en: 'Fixed trial status sometimes appearing expired when the license service was temporarily unavailable' },
          { zh: '改进重复 Skill 和名称冲突提示，避免误装或覆盖已有内容', en: 'Improved duplicate and name-conflict handling to prevent accidental installs or overwrites' },
          { zh: '安装失败时会自动清理未完成内容，不在技能库中留下残缺文件', en: 'Clean up incomplete files automatically when an installation fails' },
          { zh: '加强 Skill 安装包检查，拦截异常路径、符号链接和超出限制的文件', en: 'Strengthened package checks against unsafe paths, symbolic links, and oversized files' },
        ],
      },
    ],
  },
]
