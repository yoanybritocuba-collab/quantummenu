"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { languages, type Language } from "@/lib/translations"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.demos"), href: "#demos" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.pricing"), href: "#pricing" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentFlag = languages.find(l => l.code === language)?.flag

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-red-500/20" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 w-full">
          
          {/* Logo - izquierda */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-transparent">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent hidden sm:inline-block">
              QuantumMenu
            </span>
          </button>

          {/* Desktop Navigation - centro */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base text-zinc-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right side - fijo a la derecha */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-base sm:text-xl hover:scale-110 transition-transform duration-200"
                aria-label="Select language"
              >
                {currentFlag}
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 glass rounded-xl overflow-hidden shadow-xl border border-red-500/30 z-50 min-w-[140px] bg-black/90 backdrop-blur-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language)
                        setIsLangOpen(false)
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? "bg-red-500/20 text-red-400"
                          : "text-zinc-300 hover:bg-red-500/10"
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span className="flex-1 text-left text-xs">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button - SIN CUADRO */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 hover:bg-red-500/10 transition-colors rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - desplegable */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-red-500/20 mt-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-left text-sm text-zinc-300 hover:text-white hover:bg-red-500/10 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}