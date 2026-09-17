# SkillSlot SEO 关键词规划

> 数据快照：Semrush（美国 / 桌面 / 2026-09-17，来自调研截图）。
> 站点现状：skillslot.app，Next.js App Router，en/zh 双语，hreflang + sitemap 已就位，
> 已有 4 张 SEO 落地页（`lib/seo-landing-pages.ts`）：`/agent-skills-manager`、`/claude-code-skills`、`/codex-skills`、`/gemini-cli-skills`。

## 1. 核心数据

| 关键词 | 美国月搜 | KD | 意图 | 判断 |
|---|---|---|---|---|
| claude skills | **27.1K**（全球 106.5K） | 63 困难（约需 84 个反链域） | 信息 | 头部词，长期主攻 |
| claude code skills | 8.1K | 47 | 信息/商业 | 已有落地页，对位准确 |
| codex skill for claude code | 8.1K | — | 信息 | 跨 agent 复用，正中产品卖点 |
| claude skill | 4.4K | 46 | 信息 | 与 claude skills 同页覆盖 |
| claude skills marketplace | 2.9K | 48 | 商业 | **最佳商业词，未覆盖** |
| how to properly activate claude code skill | 1.6K | 40 | 信息 | 最优先内容词（量高 + 最容易） |
| how to build a skill in claude | 1.3K | 56 | 信息 | 内容词 |
| what are claude skills | 1.3K | 49 | 信息 | 品类定义文 |
| where is the claude skills folder | 720 | — | 信息 | 完美契合 local-first 卖点 |
| how to use claude skills | 480 | 49 | 信息 | 内容词 |
| agent skills | 210（全球 12.6K） | 15 容易 | 信息 | 品类词，现有页面保底即可 |
| skill management | 210 | 15 | 信息 | ⚠️ 陷阱词，见第 5 节 |

词簇规模（"agent skills" 词簇）：变体 9.2K 个 / 总量 210.3K；问题型 769 个 / 总量 16.8K。

## 2. 战略读法

1. **需求长在品牌词上，不长在品类词上。** "agent skills"（210/月）和 "skill management"（210/月）是品类词，量小但 KD 15 极容易——现有 4 张落地页已保底，不值得再围绕品类词扩页。
2. **真实需求锚在 "claude skills" 上**（27.1K/月，全球 106.5K）。建"商业落地页 + 指南内容"双层结构：落地页吃商业词，指南文吃问题词，再内链养头部页。
3. **KD 63 的头部词短期打不动**（需 ~84 个反链域），先用 KD 40–56 的长尾吃流量；`claude skills marketplace`（KD 48）是量、难度、商业意图三者交集最好的词，第一优先。

## 3. 页面映射

### 已有页面（保留 + 微调）

| 路由 | 目标词 | 动作 |
|---|---|---|
| `/` | claude/agent skills manager（衍生） | 保持；主导航或页脚加 `/claude-skills` 内链 |
| `/claude-code-skills` | claude code skills（8.1K，KD 47） | ✓ 对位准确；指南上线后加锚文本内链 |
| `/agent-skills-manager` | agent skills（210，KD 15） | ✓ 保留 |
| `/codex-skills` | codex skills | 补一段 "Use Codex skills in Claude Code"（蹭 codex skill for claude code 8.1K） |
| `/gemini-cli-skills` | gemini cli skills | ✓ 保留占位 |

### 新增商业落地页（进 `seo-landing-pages.ts`，复用现有 `[slug]` 体系）

| 新路由 | 目标词 | 优先级 |
|---|---|---|
| `/claude-skills` | claude skills（27.1K）+ claude skill（4.4K） | P1，长期资产页 |
| `/claude-skills-marketplace` | claude skills marketplace（2.9K，KD 48） | **P0** |

### 新增指南栏目 `/guides/[slug]`（吃问题词，每篇同步 zh 版）

| 文章 slug | 目标词 | 月搜 | KD | 优先级 |
|---|---|---|---|---|
| how-to-activate-claude-code-skills | how to properly activate claude code skill | 1.6K | 40 | **P0** |
| what-are-claude-skills | what are claude skills | 1.3K | 49 | **P0** |
| where-is-the-claude-skills-folder | where is the claude skills folder | 720 | — | P1 |
| how-to-use-claude-skills | how to use claude skills | 480 | 49 | P1 |
| how-to-build-a-claude-skill | how to build a skill in claude | 1.3K | 56 | P2 |
| use-codex-skills-in-claude-code | codex skill for claude code | 8.1K | — | P2 |

zh 版说明：中文搜索里 "Claude skills 教程 / 安装 / 怎么用" 几乎没有强竞对，zh 页面是低成本增量。

## 4. 分阶段路线图

- **Phase 1（第 1–2 周）** ✅ 已完成（2026-09-17）：`/claude-skills-marketplace` 落地页 + how-to-activate、what-are 两篇指南（`/guides` 栏目）+ 页脚内链与 sitemap。
- **Phase 2（第 3–6 周）**：`/claude-skills` 头部页 + folder、use 两篇 + `/codex-skills` 补跨 agent 段落。
- **Phase 3（持续）**：build-a-skill、codex-in-claude 文章；外链建设冲 KD 63（GitHub awesome 列表、Product Hunt、HN、dev.to；中文侧 V2EX / 即刻）。

## 5. 避坑

- ❌ `time management skills`（6.6K）/ `management skills`（3.6K）/ `how to improve management skills`（2.9K）：全是"人的管理技能"意图，与产品无关，量再大也不追。
- ❌ `skill management software / system`：企业 L&D / 员工技能矩阵软件意图，即使排上去流量也不转化。
- ⚠️ `claude skills` 的 SERP 头部会被 anthropic.com 官方文档占据；差异化定位在"manage / organize / deploy"动词短语（工具意图），不做定义式内容与官方文档硬碰。

## 6. 技术执行要点

- 新落地页直接加 `SEO_LANDING_SLUGS`，自动获得 sitemap / hreflang / 静态化。
- `/guides/[slug]` 建议沿用现有双语内容模式（内容放 `lib/`，TS 对象驱动），保持零运行时依赖。
- 内链锚文本用目标词原文（如 "claude skills marketplace"），不要用 "learn more"。
- OG 图复用 `app/og/[locale]/route.tsx`。
- 验收口径：4–6 周后 guide 词进 Top 20、marketplace 词进 Top 30 即算 Phase 1 达标。
