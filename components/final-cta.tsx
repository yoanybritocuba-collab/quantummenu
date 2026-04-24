"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FinalCTA() {
  const { t } = useLanguage()

  const trustIndicators = [
    "cta.trust1",
    "cta.trust2",
    "cta.trust3",
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">{t("cta.badge")}</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          {t("cta.title1")}
          <br />
          <span className="text-primary text-glow-cyan">{t("cta.title2")}</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          {t("cta.subtitle")}
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="glow-cyan-lg hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t("cta.button")}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          {trustIndicators.map((indicatorKey) => (
            <span key={indicatorKey} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              {t(indicatorKey)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
