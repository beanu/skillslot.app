'use client'

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { zh, type TranslationKey } from './zh'
import { en } from './en'

type Locale = 'zh' | 'en'

const dictionaries = { zh, en } as const

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved && (saved === 'zh' || saved === 'en')) {
      setLocaleState(saved)
    }
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : 'en'
  }, [])

  const t = useCallback((key: TranslationKey, vars?: Record<string, string | number>) => {
    let value = dictionaries[locale][key] ?? key
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        value = value.replace(`{${k}}`, String(v))
      })
    }
    return value
  }, [locale])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    }
  }, [locale, mounted])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
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
