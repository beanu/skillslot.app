import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

const content = {
  en: {
    eyebrow: 'AI AGENT SKILLS MANAGER',
    title: 'Your Agent Skills,\nin one Slot.',
    description: 'Organize local Skills. Build reusable Loadouts. Deploy across coding agents.',
  },
  zh: {
    eyebrow: 'AI AGENT SKILLS 管理工具',
    title: '你的 Agent Skills，\n收进一个 Slot。',
    description: '整理本地 Skills，组合可复用的 Loadout，并部署到不同编程 Agent。',
  },
} as const

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params
  if (locale !== 'en' && locale !== 'zh') {
    return new Response('Not found', { status: 404 })
  }

  const copy = locale === 'zh' ? content.zh : content.en

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          background: '#0f0f12',
          color: '#f5f5f3',
          padding: '68px 76px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 720,
            height: 720,
            right: -180,
            top: -320,
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(246,163,22,0.28) 0%, rgba(246,163,22,0) 68%)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
              background: '#f6a316',
              color: '#0f0f12',
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ display: 'flex', fontSize: 25, fontWeight: 700, letterSpacing: 4 }}>SKILLSLOT</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 900 }}>
          <div style={{ display: 'flex', color: '#f6a316', fontSize: 17, fontWeight: 700, letterSpacing: 3.2 }}>
            {copy.eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              whiteSpace: 'pre-wrap',
              fontSize: locale === 'zh' ? 63 : 70,
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            {copy.title}
          </div>
          <div style={{ display: 'flex', marginTop: 28, maxWidth: 900, color: '#aaa9a5', fontSize: 24, lineHeight: 1.4 }}>
            {copy.description}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#777771', fontSize: 18 }}>
          <div style={{ display: 'flex' }}>Local-first · macOS</div>
          <div style={{ display: 'flex', color: '#d7d6d1' }}>skillslot.app</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
