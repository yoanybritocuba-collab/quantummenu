"use client"

import { useState } from "react"
import { Play, Pause, Monitor, Settings } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Demos() {
  const { t } = useLanguage()
  const [activeDemo, setActiveDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demos = [
    {
      titleKey: "demos.qrMenu.title",
      descriptionKey: "demos.qrMenu.description",
      icon: Monitor,
      features: [
        "demos.qrMenu.feature1",
        "demos.qrMenu.feature2",
        "demos.qrMenu.feature3",
      ],
    },
    {
      titleKey: "demos.admin.title",
      descriptionKey: "demos.admin.description",
      icon: Settings,
      features: [
        "demos.admin.feature1",
        "demos.admin.feature2",
        "demos.admin.feature3",
      ],
    },
  ]

  return (
    <section id="demos" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("demos.title1")} <span className="text-primary text-glow-cyan">{t("demos.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("demos.subtitle")}
          </p>
        </div>

        {/* Demo tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Demo selector */}
          <div className="lg:w-1/3 space-y-4">
            {demos.map((demo, index) => (
              <button
                key={demo.titleKey}
                onClick={() => {
                  setActiveDemo(index)
                  setIsPlaying(false)
                }}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeDemo === index
                    ? "glass glow-cyan-sm border-primary/30"
                    : "glass glass-hover"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    activeDemo === index ? "bg-primary/20" : "bg-muted"
                  }`}>
                    <demo.icon className={`w-6 h-6 ${
                      activeDemo === index ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${
                      activeDemo === index ? "text-primary" : "text-foreground"
                    }`}>
                      {t(demo.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(demo.descriptionKey)}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Video player */}
          <div className="lg:w-2/3">
            <div className="glass rounded-2xl overflow-hidden glow-cyan-sm">
              {/* Video area */}
              <div className="aspect-video bg-gradient-to-br from-card to-background relative">
                {/* Animated placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors group"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      ) : (
                        <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {isPlaying ? t("demos.playingDemo") : t("demos.clickToPlay")}
                    </p>
                  </div>
                </div>

                {/* Animated demo content when playing */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-card/90 p-6 animate-in fade-in duration-300">
                    <div className="h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-xs text-muted-foreground">
                          {t(demos[activeDemo].titleKey)}
                        </span>
                      </div>
                      <div className="flex-1 rounded-lg bg-background/50 p-4 overflow-hidden">
                        <div className="space-y-3 animate-pulse">
                          <div className="h-4 bg-primary/20 rounded w-1/3" />
                          <div className="h-8 bg-muted rounded w-full" />
                          <div className="h-8 bg-muted rounded w-3/4" />
                          <div className="h-8 bg-muted rounded w-5/6" />
                          <div className="h-12 bg-primary/30 rounded w-1/2 mt-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="p-6 border-t border-border/50">
                <div className="flex flex-wrap gap-3">
                  {demos[activeDemo].features.map((featureKey) => (
                    <span
                      key={featureKey}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {t(featureKey)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
