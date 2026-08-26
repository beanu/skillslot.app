'use client'

import { useEffect, useRef } from 'react'

type SkillNode = {
  x: number
  y: number
  radius: number
  phase: number
  speed: number
  color: string
  label: string
}

const NODES: SkillNode[] = [
  { x: 0.06, y: 0.20, radius: 3.2, phase: 0.08, speed: 0.82, color: '#f6a316', label: 'skill://design' },
  { x: 0.14, y: 0.48, radius: 2.6, phase: 0.42, speed: 0.68, color: '#9d65e5', label: 'skill://review' },
  { x: 0.23, y: 0.76, radius: 3.4, phase: 0.71, speed: 0.75, color: '#68b88d', label: 'vault://local' },
  { x: 0.31, y: 0.13, radius: 2.4, phase: 0.24, speed: 0.92, color: '#69aee8', label: 'skill://deploy' },
  { x: 0.35, y: 0.86, radius: 2.8, phase: 0.56, speed: 0.72, color: '#f6a316', label: 'loadout://01' },
  { x: 0.65, y: 0.14, radius: 2.7, phase: 0.63, speed: 0.86, color: '#68b88d', label: 'agent://codex' },
  { x: 0.70, y: 0.83, radius: 3.1, phase: 0.18, speed: 0.66, color: '#9d65e5', label: 'agent://claude' },
  { x: 0.78, y: 0.67, radius: 2.5, phase: 0.83, speed: 0.78, color: '#69aee8', label: 'workspace://dev' },
  { x: 0.87, y: 0.34, radius: 3.3, phase: 0.34, speed: 0.74, color: '#f6a316', label: 'agent://gemini' },
  { x: 0.95, y: 0.72, radius: 2.5, phase: 0.94, speed: 0.88, color: '#68b88d', label: 'deploy://ready' },
]

const TAU = Math.PI * 2

export function HeroSkillField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    let width = 0
    let height = 0
    let frame = 0
    let active = true
    let inView = true
    let lastTime = performance.now()
    let elapsed = 0
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointer = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const density = Math.min(window.devicePixelRatio || 1, 1.75)
      width = Math.max(1, bounds.width)
      height = Math.max(1, bounds.height)
      canvas.width = Math.round(width * density)
      canvas.height = Math.round(height * density)
      context.setTransform(density, 0, 0, density, 0, 0)
      draw(elapsed)
    }

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      ) {
        pointer.targetX = -1000
        pointer.targetY = -1000
        return
      }
      pointer.targetX = event.clientX - bounds.left
      pointer.targetY = event.clientY - bounds.top
    }

    const onVisibilityChange = () => {
      active = !document.hidden
      if (active && inView && !reducedMotion.matches) {
        lastTime = performance.now()
        frame = requestAnimationFrame(animate)
      } else {
        cancelAnimationFrame(frame)
      }
    }

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height)
      if (!width || !height) return

      pointer.x += (pointer.targetX - pointer.x) * 0.055
      pointer.y += (pointer.targetY - pointer.y) * 0.055

      const mobile = width < 640
      const visibleNodes = mobile ? NODES.filter((_, index) => index % 2 === 0) : NODES

      const nodePositions = visibleNodes.map((node) => {
        const wave = time * 0.00024 * node.speed + node.phase * TAU
        let x = node.x * width + Math.cos(wave * 1.7) * (mobile ? 3 : 9)
        let y = node.y * height + Math.sin(wave) * (mobile ? 5 : 12)
        const dx = x - pointer.x
        const dy = y - pointer.y
        const distance = Math.hypot(dx, dy)
        const influence = Math.max(0, 1 - distance / 190)
        if (distance > 0) {
          x += dx / distance * influence * 22
          y += dy / distance * influence * 22
        }
        return { ...node, x, y }
      })

      nodePositions.forEach((node) => {
        context.save()
        context.shadowColor = node.color
        context.shadowBlur = mobile ? 8 : 15
        context.fillStyle = node.color
        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, TAU)
        context.fill()
        context.shadowBlur = 0
        context.strokeStyle = `${node.color}45`
        context.beginPath()
        context.arc(node.x, node.y, node.radius + 6, 0, TAU)
        context.stroke()

        if (!mobile) {
          const labelOnLeft = node.x < width * 0.5
          context.font = '10px ui-monospace, SFMono-Regular, Menlo, monospace'
          context.textAlign = labelOnLeft ? 'left' : 'right'
          context.fillStyle = 'rgba(255,255,255,0.22)'
          context.fillText(node.label, node.x + (labelOnLeft ? 13 : -13), node.y + 3)
        }
        context.restore()
      })

      const vignette = context.createLinearGradient(0, 0, 0, height)
      vignette.addColorStop(0, 'rgba(15, 15, 18, 0.08)')
      vignette.addColorStop(0.66, 'rgba(15, 15, 18, 0.18)')
      vignette.addColorStop(1, 'rgba(15, 15, 18, 1)')
      context.fillStyle = vignette
      context.fillRect(0, 0, width, height)
    }

    const animate = (now: number) => {
      if (!active || !inView || reducedMotion.matches) return
      const delta = Math.min(40, now - lastTime)
      lastTime = now
      elapsed += delta
      draw(elapsed)
      frame = requestAnimationFrame(animate)
    }

    const onMotionChange = () => {
      cancelAnimationFrame(frame)
      if (reducedMotion.matches) {
        elapsed = 2600
        draw(elapsed)
      } else if (active && inView) {
        lastTime = performance.now()
        frame = requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      cancelAnimationFrame(frame)
      if (inView && active && !reducedMotion.matches) {
        lastTime = performance.now()
        frame = requestAnimationFrame(animate)
      }
    }, { threshold: 0.01 })
    const resizeObserver = new ResizeObserver(resize)

    resizeObserver.observe(canvas)
    observer.observe(canvas)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    reducedMotion.addEventListener('change', onMotionChange)
    resize()
    onMotionChange()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      reducedMotion.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[100svh] min-h-[680px] max-h-[920px] overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_42%_32%_at_50%_37%,_var(--background)_0%,_var(--background)_52%,_transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_var(--background)_94%)] opacity-60" />
    </div>
  )
}
