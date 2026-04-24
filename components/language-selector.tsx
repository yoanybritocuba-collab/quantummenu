"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { languages, type Language } from "@/lib/translations"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find(l => l.code === language)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg glass glass-hover transition-all duration-300"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium hidden sm:inline">{currentLang?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 glass rounded-xl overflow-hidden shadow-xl border border-border/50 animate-in fade-in slide-in-from-top-2 duration-200 z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                language === lang.code
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/5 text-foreground"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.name}</span>
              {language === lang.code && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
