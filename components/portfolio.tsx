"use client"

import { useState } from "react"
import { ExternalLink, Monitor, Smartphone, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Portfolio() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      titleKey: "portfolio.project1.title",
      descriptionKey: "portfolio.project1.description",
      categoryKey: "portfolio.qrMenu",
      category: "qr-menu",
      icon: Smartphone,
      color: "from-primary to-accent",
    },
    {
      titleKey: "portfolio.project2.title",
      descriptionKey: "portfolio.project2.description",
      categoryKey: "portfolio.website",
      category: "website",
      icon: Monitor,
      color: "from-accent to-primary",
    },
    {
      titleKey: "portfolio.project3.title",
      descriptionKey: "portfolio.project3.description",
      categoryKey: "portfolio.fullPack",
      category: "full-pack",
      icon: ShoppingBag,
      color: "from-primary/80 to-accent/80",
    },
    {
      titleKey: "portfolio.project4.title",
      descriptionKey: "portfolio.project4.description",
      categoryKey: "portfolio.qrMenu",
      category: "qr-menu",
      icon: Smartphone,
      color: "from-accent/80 to-primary/80",
    },
    {
      titleKey: "portfolio.project5.title",
      descriptionKey: "portfolio.project5.description",
      categoryKey: "portfolio.website",
      category: "website",
      icon: Monitor,
      color: "from-primary to-accent",
    },
    {
      titleKey: "portfolio.project6.title",
      descriptionKey: "portfolio.project6.description",
      categoryKey: "portfolio.fullPack",
      category: "full-pack",
      icon: ShoppingBag,
      color: "from-accent to-primary",
    },
  ]

  const categories = [
    { key: "all", labelKey: "portfolio.all" },
    { key: "website", labelKey: "portfolio.website" },
    { key: "qr-menu", labelKey: "portfolio.qrMenu" },
    { key: "full-pack", labelKey: "portfolio.fullPack" },
  ]

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow-cyan">{t("portfolio.title1")}</span> {t("portfolio.title2")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground glow-cyan-sm"
                  : "glass glass-hover text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.titleKey}
              className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:glow-cyan-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project preview */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-primary/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {t(project.categoryKey)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(project.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
