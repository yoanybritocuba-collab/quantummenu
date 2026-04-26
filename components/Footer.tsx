"use client"

import { MessageCircle, Mail, ArrowUp, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 border-t border-zinc-800/50 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-transparent">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" style={{ background: 'transparent' }} />
            </div>
            <div>
              <span className="font-semibold text-white">QuantumMenu</span>
              <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} {t("footer.rights")}
              </p>
            </div>
          </div>

          {/* Contact links - CON TUS DATOS REALES */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/34624497851"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900/50 hover:bg-green-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-green-500/30"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-zinc-500 group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/yoany_69"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900/50 hover:bg-pink-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-pink-500/30"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-zinc-500 group-hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="mailto:yoanybritocuba@gmail.com"
              className="w-10 h-10 rounded-xl bg-zinc-900/50 hover:bg-red-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-red-500/30"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-zinc-900/50 hover:bg-red-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-red-500/30"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Información de contacto adicional */}
        <div className="mt-6 text-center">
          <p className="text-zinc-500 text-sm">
            📧 yoanybritocuba@gmail.com | 📱 +34 624 497 851 | 📸 @yoany_69
          </p>
        </div>

        {/* Bottom text */}
        <div className="mt-6 pt-6 border-t border-zinc-800/50 text-center text-sm text-zinc-500">
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  )
}