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
  // Siempre empezar con "es" en el servidor y en el primer render del cliente
  const [language, setLanguage] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  // Solo cargar el idioma guardado después de que el componente esté montado
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("language") as Language
    if (saved && translations[saved]) {
      setLanguage(saved)
    }
  }, [])

  // Guardar en localStorage cuando cambie el idioma (solo en cliente)
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  const t = useCallback((key: string): string => {
    const languageTranslations = translations[language]
    if (!languageTranslations) {
      const spanishTranslations = translations["es"]
      return spanishTranslations?.[key] || key
    }
    return languageTranslations[key] || key
  }, [language])

  // Durante la hidratación, renderizar el contenido original
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "es", setLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    )
  }

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