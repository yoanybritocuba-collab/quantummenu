"use client"

import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, language } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const txt: Record<string, Record<string, string>> = {
    es: { backToTop: "Volver arriba" },
    en: { backToTop: "Back to top" },
    ru: { backToTop: "Наверх" },
    fr: { backToTop: "Haut de page" },
    it: { backToTop: "Torna su" }
  };
  const text = txt[language] || txt.es;

  return (
    <footer className="relative bg-black border-t border-zinc-800/50">
      <div className="h-1 bg-gradient-to-r from-purple-600 via-red-500 to-orange-400" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Logo + nombre */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-28 h-28 sm:w-32 sm:h-32 mb-3">
            <img src="/logo.png" alt="QuantumMenu" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            QuantumMenu
          </h3>
          <p className="text-zinc-500 text-sm mt-2 text-center">{t("footer.tagline")}</p>
        </div>

        {/* Contacto - iconos dorados con borde */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {/* Teléfono */}
          <a href="tel:+34624497851" className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-all group">
            <span className="w-8 h-8 rounded-full border border-amber-400/50 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.3)] transition-all">
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </span>
            <span className="text-sm group-hover:text-amber-400 transition-colors">+34 624 497 851</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/34624497851" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-all group">
            <span className="w-8 h-8 rounded-full border border-amber-400/50 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.3)] transition-all">
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/><path d="M9 12l2 2 4-4"/></svg>
            </span>
            <span className="text-sm group-hover:text-amber-400 transition-colors">+34 624 497 851</span>
          </a>

          {/* Email */}
          <a href="mailto:yoanybritocuba@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-all group">
            <span className="w-8 h-8 rounded-full border border-amber-400/50 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.3)] transition-all">
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <span className="text-sm group-hover:text-amber-400 transition-colors">yoanybritocuba@gmail.com</span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/yoany_69" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-all group">
            <span className="w-8 h-8 rounded-full border border-amber-400/50 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.3)] transition-all">
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </span>
            <span className="text-sm group-hover:text-amber-400 transition-colors">@yoany_69</span>
          </a>
        </div>

        {/* Volver arriba */}
        <div className="text-center mb-6">
          <button onClick={scrollToTop} className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-sm group">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            {text.backToTop}
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-zinc-800/30 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} QuantumMenu — {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}