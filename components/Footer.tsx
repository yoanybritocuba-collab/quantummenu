"use client"

import { MessageCircle, Mail, ArrowUp, Instagram, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="pt-16 pb-8 px-4 border-t border-zinc-800/50 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Logo grande centrado */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-transparent mb-4">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" style={{ background: 'transparent' }} />
          </div>
          <span className="text-2xl font-bold text-white">QuantumMenu</span>
          <p className="text-zinc-500 text-sm mt-1">{t("footer.tagline")}</p>
        </div>

        {/* En móvil: todo en columna. En desktop: 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Columna 1 - Contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <div className="space-y-3">
              <a href="https://wa.me/34624497851" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-green-400 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-zinc-900/50 flex items-center justify-center group-hover:bg-green-500/20 transition-all border border-zinc-800 group-hover:border-green-500/30">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+34 624 497 851</span>
              </a>
              <a href="mailto:yoanybritocuba@gmail.com" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-red-400 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-zinc-900/50 flex items-center justify-center group-hover:bg-red-500/20 transition-all border border-zinc-800 group-hover:border-red-500/30">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">yoanybritocuba@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Columna 2 - Redes Sociales */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Redes Sociales</h4>
            <div className="flex items-center justify-center gap-3">
              <a href="https://wa.me/34624497851" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-zinc-900/50 hover:bg-green-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-green-500/30">
                <MessageCircle className="w-5 h-5 text-zinc-400 group-hover:text-green-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/yoany_69" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-zinc-900/50 hover:bg-pink-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-pink-500/30">
                <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-pink-400 transition-colors" />
              </a>
              <a href="mailto:yoanybritocuba@gmail.com" className="w-11 h-11 rounded-xl bg-zinc-900/50 hover:bg-red-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-red-500/30">
                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-red-400 transition-colors" />
              </a>
            </div>
            <p className="text-zinc-500 text-xs mt-3">@yoany_69</p>
          </div>

          {/* Columna 3 - Empresa */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">QuantumMenu</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <button onClick={scrollToTop} className="mt-4 inline-flex items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors text-sm">
              <ArrowUp className="w-4 h-4" />
              Volver arriba
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} QuantumMenu - {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}