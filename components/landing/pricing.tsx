'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage, useT } from '@/lib/i18n/context'
import type { TranslationKey } from '@/lib/i18n/zh'
import { SKILLSLOT_DOWNLOAD_URL } from '@/lib/site'

type PlanId = 'mac_1' | 'mac_2' | 'mac_3'

const tiers = [
  { key: '1mac', planId: 'mac_1' as PlanId, tabKey: 'pricing.tab.1mac' as TranslationKey, price: '$14.99', originalPrice: '$19.99', descKey: 'pricing.desc.1mac' as TranslationKey },
  { key: '2macs', planId: 'mac_2' as PlanId, tabKey: 'pricing.tab.2macs' as TranslationKey, price: '$24.99', originalPrice: '$34.99', descKey: 'pricing.desc.2macs' as TranslationKey },
  { key: '3macs', planId: 'mac_3' as PlanId, tabKey: 'pricing.tab.3macs' as TranslationKey, price: '$34.99', originalPrice: '$49.99', descKey: 'pricing.desc.3macs' as TranslationKey },
]

const featureKeys: TranslationKey[] = [
  'pricing.feature.agents',
  'pricing.feature.approval',
  'pricing.feature.terminal',
  'pricing.feature.sessions',
  'pricing.feature.native',
]

export function Pricing() {
  const [activeTier, setActiveTier] = useState(0)
  const [isOpeningCheckout, setIsOpeningCheckout] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const requestIds = useRef<Partial<Record<PlanId, string>>>({})
  const { locale } = useLanguage()
  const t = useT()
  const tier = tiers[activeTier]

  const handleCheckout = async () => {
    if (isOpeningCheckout) return

    setIsOpeningCheckout(true)
    setCheckoutError(null)

    const requestId =
      requestIds.current[tier.planId] || `web_${crypto.randomUUID()}`
    requestIds.current[tier.planId] = requestId

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan_id: tier.planId,
          request_id: requestId,
          locale,
        }),
      })
      const body: unknown = await response.json().catch(() => null)

      if (!response.ok) {
        const message =
          body && typeof body === 'object' && 'message' in body && Array.isArray(body.message)
            ? body.message.find((item): item is string => typeof item === 'string')
            : null
        throw new Error(message || t('pricing.checkoutError'))
      }

      const checkoutUrl =
        body && typeof body === 'object' && 'checkout_url' in body && typeof body.checkout_url === 'string'
          ? body.checkout_url
          : null

      if (!checkoutUrl) {
        throw new Error(t('pricing.checkoutError'))
      }

      window.location.assign(checkoutUrl)
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : t('pricing.checkoutError'))
      setIsOpeningCheckout(false)
    }
  }

  return (
    <section id="pricing" className="relative py-32">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-balance font-mono text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t('pricing.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Single pricing card */}
        <motion.div
          className="mx-auto max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xl">
            {/* Dot pattern background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }} />

            {/* Top: License label + rotating badge */}
            <div className="relative mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-base font-medium text-foreground/80">{t('pricing.license')}</h3>
              </div>
              {/* Rotating badge */}
              <div className="relative h-16 w-16 flex-shrink-0">
                <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="fill-muted-foreground/60" style={{ fontSize: '10.5px', letterSpacing: '3px' }}>
                    <textPath xlinkHref="#circlePath">
                      EARLY BIRD · PRICING · EARLY BIRD ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border shadow-sm">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-primary">
                      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17.5 8 12 11.5 6.5 8 12 4.5zM6 9.5l5 3v5.5l-5-3V9.5zm12 0v5.5l-5 3V12l5-3z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tier.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="text-5xl font-bold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-xl text-muted-foreground/60 line-through">{tier.originalPrice}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tab switcher */}
            <div className="mb-4 inline-flex rounded-lg border border-border bg-secondary/50 p-0.5">
              {tiers.map((item, index) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveTier(index)}
                  className={`relative rounded-md px-5 py-1.5 font-mono text-sm transition-all ${
                    activeTier === index
                      ? 'bg-foreground text-background shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(item.tabKey)}
                </button>
              ))}
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={tier.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="mb-8 text-sm text-muted-foreground"
              >
                {t(tier.descKey)}
              </motion.p>
            </AnimatePresence>

            {/* Features */}
            <ul className="mb-8 space-y-3.5">
              {featureKeys.map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-foreground/90">{t(key)}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <Button
              type="button"
              size="lg"
              className="w-full bg-foreground text-background hover:bg-foreground/90"
              disabled={isOpeningCheckout}
              onClick={() => void handleCheckout()}
            >
              {isOpeningCheckout ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {t('pricing.openingCheckout')}
                </>
              ) : (
                t('pricing.cta')
              )}
            </Button>

            <p
              className={`mt-3 text-center text-sm text-destructive ${checkoutError ? 'block' : 'hidden'}`}
              role="alert"
              aria-live="polite"
            >
              {checkoutError}
            </p>

            {/* Trial link */}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              <a href={SKILLSLOT_DOWNLOAD_URL} className="transition-colors hover:text-foreground">
                {t('pricing.trialLink')}
              </a>
            </p>

            {/* Payment issues */}
            <p className="mt-3 text-center text-xs text-muted-foreground/60">
              {t('pricing.paymentIssues')}{' '}
              <a href="mailto:hi@skillslot.app" className="underline underline-offset-2 transition-colors hover:text-muted-foreground">
                hi@skillslot.app
              </a>
            </p>

            {/* Highlight decoration */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
