'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/lib/i18n/context'
import { faqPage, type LocalizedText } from '@/lib/public-pages'

function localized(locale: 'zh' | 'en', value: LocalizedText) {
  return value[locale]
}

export function FAQ() {
  const { locale } = useLanguage()

  return (
    <section id="faq" className="relative scroll-mt-16 overflow-hidden border-t border-border py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-primary">
            {localized(locale, faqPage.eyebrow)}
          </p>
          <h2 className="mt-4 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {localized(locale, faqPage.title)}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-7 text-muted-foreground">
            {localized(locale, faqPage.description)}
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <Accordion type="single" collapsible defaultValue={faqPage.sections[0]?.id}>
            {faqPage.sections.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border-border">
                <AccordionTrigger className="py-6 font-mono text-base font-semibold leading-6 text-foreground hover:no-underline sm:text-lg">
                  {localized(locale, section.title)}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8">
                  {section.paragraphs && (
                    <div className="space-y-3">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={index} className="max-w-[72ch] text-pretty text-[0.95rem] leading-7 text-muted-foreground">
                          {localized(locale, paragraph)}
                        </p>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
