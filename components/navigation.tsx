"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-red-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - MAS GRANDE Y TRANSPARENTE */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-transparent">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
            <span className="text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              QuantumMenu
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base text-zinc-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right side - Language selector and Mobile menu button */}
          <div className="flex items-center gap-3">
            {/* Language Selector Desktop */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all duration-200"
              >
                <Globe className="w-4 h-4 text-red-400" />
                <span className="text-sm text-white">
                  {languages.find(l => l.code === language)?.flag}
                </span>
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 glass rounded-xl overflow-hidden shadow-xl border border-red-500/30 z-50 min-w-[160px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language)
                        setIsLangOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        language === lang.code
                          ? "bg-red-500/20 text-red-400"
                          : "text-zinc-300 hover:bg-red-500/10"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="flex-1 text-left">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass glass-hover"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-red-500/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-left text-zinc-300 hover:text-white hover:bg-red-500/10 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
              {/* Mobile Language Selector */}
              <div className="px-4 py-2">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language)
                        setIsOpen(false)
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        language === lang.code
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : "bg-zinc-800/50 text-zinc-300 hover:bg-red-500/10"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}