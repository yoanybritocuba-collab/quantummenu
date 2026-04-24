"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe, Scan } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { languages } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
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

  const getCurrentLanguageFlag = () => {
    const currentLang = languages.find(lang => lang.code === language)
    return currentLang?.flag || "🇪🇸"
  }

  const cycleLanguage = () => {
    const currentIndex = languages.findIndex(lang => lang.code === language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex].code)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-red-500/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300 bg-white">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain p-1"
                      priority
                      sizes="(max-width: 640px) 36px, 44px"
                    />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-bold text-sm tracking-tight">
                    Quantum<span className="text-red-400">Menu</span>
                  </span>
                  <div className="text-[8px] text-red-400/70 tracking-wider">DIGITAL EXPERIENCE</div>
                </div>
                <div className="block sm:hidden">
                  <span className="text-white font-bold text-xs">Q<span className="text-red-400">M</span></span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-1 lg:gap-2 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-zinc-300 hover:text-red-400 transition-all duration-300 rounded-lg hover:bg-red-500/10 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-600 transition-all duration-300 group-hover:w-6" />
                </button>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <button
                onClick={cycleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 min-w-[70px] justify-center"
                title="Cambiar idioma"
              >
                <Globe className="w-4 h-4 text-red-400" />
                <span className="text-lg">{getCurrentLanguageFlag()}</span>
              </button>
              <div className="w-px h-6 bg-zinc-800" />
              <Button
                size="sm"
                className="bg-gradient-to-r from-red-600 to-purple-700 hover:from-red-700 hover:to-purple-800 text-white shadow-lg hover:shadow-red-500/25 transition-all duration-300 min-w-[140px]"
                onClick={() => scrollToSection("#pricing")}
              >
                <Scan className="mr-2 w-3 h-3" />
                {t("nav.getQuote")}
              </Button>
            </div>

            {/* Mobile - Selector de idioma visible junto al menú */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={cycleLanguage}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-all duration-300"
                title="Cambiar idioma"
              >
                <Globe className="w-3.5 h-3.5 text-red-400" />
                <span className="text-sm">{getCurrentLanguageFlag()}</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-all duration-300"
              >
                {isOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-xl border-b border-red-500/20 shadow-2xl transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full px-4 py-3 text-left text-zinc-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 flex items-center justify-between group"
              >
                <span>{item.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
            
            <div className="pt-4 space-y-3 border-t border-zinc-800">
              <Button
                className="w-full bg-gradient-to-r from-red-600 to-purple-700 hover:from-red-700 hover:to-purple-800 text-white shadow-lg"
                onClick={() => {
                  scrollToSection("#pricing")
                  setIsOpen(false)
                }}
              >
                <Scan className="mr-2 w-3 h-3" />
                {t("nav.getQuote")}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16 sm:h-20" />
    </>
  )
}