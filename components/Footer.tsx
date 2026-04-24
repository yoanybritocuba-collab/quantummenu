"use client"

import { MessageCircle, Mail, ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">D</span>
            </div>
            <div>
              <span className="font-semibold">DevStudio</span>
              <p className="text-sm text-muted-foreground">
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
              className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center group"
            >
              <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="mailto:hello@devstudio.com"
              className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center group"
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  )
}
