"use client"

import { Laptop, Rocket, Wrench, Palette, Clock, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChooseMe() {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: Laptop,
      titleKey: "why.easy.title",
      descriptionKey: "why.easy.description",
    },
    {
      icon: Rocket,
      titleKey: "why.fast.title",
      descriptionKey: "why.fast.description",
    },
    {
      icon: Wrench,
      titleKey: "why.noHassle.title",
      descriptionKey: "why.noHassle.description",
    },
    {
      icon: Palette,
      titleKey: "why.design.title",
      descriptionKey: "why.design.description",
    },
    {
      icon: Clock,
      titleKey: "why.available.title",
      descriptionKey: "why.available.description",
    },
    {
      icon: MessageCircle,
      titleKey: "why.direct.title",
      descriptionKey: "why.direct.description",
    },
  ]

  const stats = [
    { valueKey: "why.stat1.value", labelKey: "why.stat1.label" },
    { valueKey: "why.stat2.value", labelKey: "why.stat2.label" },
    { valueKey: "why.stat3.value", labelKey: "why.stat3.label" },
    { valueKey: "why.stat4.value", labelKey: "why.stat4.label" },
  ]

  return (
    <section id="why" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("why.title1")} <span className="text-primary text-glow-cyan">{t("why.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("why.subtitle")}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.titleKey}
              className="group glass glass-hover rounded-2xl p-6 transition-all duration-500 hover:glow-cyan-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:glow-cyan-sm transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {t(reason.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 glass rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow-cyan mb-2">
                  {t(stat.valueKey)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
