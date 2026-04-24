"use client"

import { MessageCircle, Mail, ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-black">
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

          {/* Quick contact */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/34624497851"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900/50 hover:bg-red-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-red-500/30"
            >
              <MessageCircle className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
            </a>
            <a
              href="mailto:hello@devstudio.com"
              className="w-10 h-10 rounded-xl bg-zinc-900/50 hover:bg-red-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-red-500/30"
            >
              <Mail className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-zinc-900/50 hover:bg-red-500/20 flex items-center justify-center group transition-all duration-300 border border-zinc-800 hover:border-red-500/30"
            >
              <ArrowUp className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-zinc-800/50 text-center text-sm text-zinc-500">
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  )
}