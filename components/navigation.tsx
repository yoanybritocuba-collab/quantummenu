"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, Briefcase, Users, Shield, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { languages, type Language } from "@/lib/translations"

interface NavigationProps {
  activePage: string
  setActivePage: (page: string) => void
}

export function Navigation({ activePage, setActivePage }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const handleNavClick = (page: string) => {
    setActivePage(page)
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: "", icon: <Home className="w-5 h-5" /> },
    { id: "services", label: t("nav.services"), icon: <Briefcase className="w-4 h-4" /> },
    { id: "about", label: t("nav.about"), icon: <Users className="w-4 h-4" /> },
    { id: "guarantee", label: t("nav.guarantee"), icon: <Shield className="w-4 h-4" /> },
    { id: "contact", label: t("nav.contact"), icon: <Phone className="w-4 h-4" /> },
  ]

  const [currentFlag, setCurrentFlag] = useState<string>("🇪🇸")

  useEffect(() => {
    const flag = languages.find(l => l.code === language)?.flag
    if (flag) setCurrentFlag(flag)
  }, [language])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <button onClick={() => handleNavClick("home")} className="flex items-center gap-2 flex-shrink-0 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-transparent">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hidden sm:inline-block">
              QuantumMenu
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activePage === item.id
                    ? "bg-red-500/20 text-red-400"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {item.icon}
                {item.label && <span>{item.label}</span>}
              </button>
            ))}
            
            {/* Selector idiomas desktop */}
            <div className="relative ml-1">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="w-9 h-9 flex items-center justify-center text-lg hover:scale-110 transition-transform rounded-lg hover:bg-zinc-800/50">
                {currentFlag}
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full right-0 mt-2 rounded-xl overflow-hidden shadow-xl border border-red-500/30 z-50 min-w-[150px] bg-zinc-900/95 backdrop-blur-xl">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => { setLanguage(lang.code as Language); setIsLangOpen(false) }} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${language === lang.code ? "bg-red-500/20 text-red-400" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"}`}>
                        <span className="text-base">{lang.flag}</span>
                        <span className="flex-1 text-left text-xs">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Móvil: idioma + hamburguesa */}
          <div className="flex md:hidden items-center gap-1">
            <button onClick={(e) => { e.stopPropagation(); setIsLangOpen(!isLangOpen); }} className="w-9 h-9 flex items-center justify-center text-lg hover:scale-110 transition-transform rounded-lg hover:bg-zinc-800/50 relative">
              {currentFlag}
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full right-0 mt-2 rounded-xl overflow-hidden shadow-xl border border-red-500/30 z-50 min-w-[140px] bg-zinc-900/95 backdrop-blur-xl">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={(e) => { e.stopPropagation(); setLanguage(lang.code as Language); setIsLangOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs transition-colors ${language === lang.code ? "bg-red-500/20 text-red-400" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"}`}>
                        <span className="text-base">{lang.flag}</span>
                        <span className="flex-1 text-left">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-zinc-800/50 transition-colors rounded-xl">
              {isOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5 text-red-400" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden border-t border-zinc-800">
              <div className="flex flex-col gap-0.5 py-3">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => handleNavClick(item.id)} className={`flex items-center gap-3 px-4 py-3 text-left text-sm rounded-xl transition-all ${activePage === item.id ? "bg-red-500/20 text-red-400" : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"}`}>
                    {item.icon}
                    {item.label || "Inicio"}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}