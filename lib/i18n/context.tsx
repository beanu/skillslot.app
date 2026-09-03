'use client'

import { createContext, useCallback, useContext, type ReactNode } from 'react'
import type { TranslationKey } from './zh'

export type Locale = 'zh' | 'en'

export type TranslationDictionary = Record<TranslationKey, string>

type LanguageContextType = {
  locale: Locale
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
  dictionary,
  locale,
}: {
  children: ReactNode
  dictionary: TranslationDictionary
  locale: Locale
}) {
  const t = useCallback((key: TranslationKey, vars?: Record<string, string | number>) => {
    let value = dictionary[key] ?? key
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        value = value.replace(`{${k}}`, String(v))
      })
    }
    return value
  }, [dictionary])

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

export function useT() {
  return useLanguage().t
}
