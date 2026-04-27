"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  // Cargar idioma guardado SOLO en el cliente
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && translations[saved]) {
      setLanguage(saved)
    } else {
      // Detectar idioma del navegador
      const browserLang = navigator.language.split('-')[0] as Language
      if (translations[browserLang]) {
        setLanguage(browserLang)
      }
    }
    setMounted(true)
  }, [])

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  const t = useCallback((key: string): string => {
    const langTranslations = translations[language]
    if (!langTranslations) {
      return translations["es"]?.[key] || key
    }
    const translated = langTranslations[key]
    if (!translated) {
      // Si no existe la traducción, mostrar la clave y advertencia
      console.warn(`🔤 Missing translation: "${key}" for language: ${language}`)
      return translations["es"]?.[key] || key
    }
    return translated
  }, [language])

  // Mostrar children inmediatamente para evitar problemas de hidratación
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}