"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Check, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type PackageType = "website" | "qr-menu" | "full-pack"
type ComplexityLevel = 0 | 1 | 2

export function Pricing() {
  const { t } = useLanguage()
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("full-pack")
  const [complexity, setComplexity] = useState<ComplexityLevel>(1)

  const packages: Record<PackageType, {
    nameKey: string
    descriptionKey: string
    baseFeatures: string[]
    complexityFeatures: Record<ComplexityLevel, string[]>
    prices: Record<ComplexityLevel, number>
  }> = {
    "website": {
      nameKey: "pricing.website",
      descriptionKey: "pricing.web.description",
      baseFeatures: [
        "pricing.web.responsive",
        "pricing.web.seo",
        "pricing.web.contact",
      ],
      complexityFeatures: {
        0: ["pricing.web.basic1", "pricing.web.basic2"],
        1: ["pricing.web.standard1", "pricing.web.standard2", "pricing.web.standard3"],
        2: ["pricing.web.advanced1", "pricing.web.advanced2", "pricing.web.advanced3", "pricing.web.advanced4"],
      },
      prices: { 0: 500, 1: 800, 2: 1200 },
    },
    "qr-menu": {
      nameKey: "pricing.qrMenu",
      descriptionKey: "pricing.qr.description",
      baseFeatures: [
        "pricing.qr.mobile",
        "pricing.qr.qrCode",
        "pricing.qr.realtime",
      ],
      complexityFeatures: {
        0: ["pricing.qr.basic1", "pricing.qr.basic2"],
        1: ["pricing.qr.standard1", "pricing.qr.standard2", "pricing.qr.standard3"],
        2: ["pricing.qr.advanced1", "pricing.qr.advanced2", "pricing.qr.advanced3", "pricing.qr.advanced4"],
      },
      prices: { 0: 300, 1: 500, 2: 800 },
    },
    "full-pack": {
      nameKey: "pricing.fullPack",
      descriptionKey: "pricing.full.description",
      baseFeatures: [
        "pricing.full.everything1",
        "pricing.full.everything2",
        "pricing.full.admin",
        "pricing.full.support",
      ],
      complexityFeatures: {
        0: ["pricing.full.basic1", "pricing.full.basic2"],
        1: ["pricing.full.standard1", "pricing.full.standard2", "pricing.full.standard3"],
        2: ["pricing.full.advanced1", "pricing.full.advanced2", "pricing.full.advanced3", "pricing.full.advanced4"],
      },
      prices: { 0: 600, 1: 1000, 2: 1600 },
    },
  }

  // Traducciones específicas para el selector de complejidad
  const getComplexityLabel = (level: ComplexityLevel): string => {
    if (level === 0) return "Básico"
    if (level === 1) return "Estándar"
    return "Avanzado"
  }

  const currentPackage = packages[selectedPackage]
  const price = currentPackage.prices[complexity]
  const features = [...currentPackage.baseFeatures, ...currentPackage.complexityFeatures[complexity]]

  // Traducción de los nombres de los paquetes
  const getPackageName = (pkg: PackageType): string => {
    switch(pkg) {
      case "website": return "Web"
      case "qr-menu": return "QR Menu"
      case "full-pack": return "Pack Completo"
      default: return ""
    }
  }

  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("pricing.title1")}
            </span>
            <br />
            <span className="text-white">{t("pricing.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 glow-cyan-sm">
          <div className="mb-10">
            <label className="block text-sm font-medium text-muted-foreground mb-4">
              Elige tu paquete
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(packages) as PackageType[]).map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    selectedPackage === pkg
                      ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg"
                      : "glass glass-hover"
                  }`}
                >
                  <span className="font-medium text-sm md:text-base">
                    {getPackageName(pkg)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-medium text-muted-foreground">
                Nivel de complejidad
              </label>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                {getComplexityLabel(complexity)}
              </span>
            </div>
            <Slider
              value={[complexity]}
              onValueChange={(value) => setComplexity(value[0] as ComplexityLevel)}
              max={2}
              step={1}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Básico</span>
              <span>Estándar</span>
              <span>Avanzado</span>
            </div>
          </div>

          <div className="text-center mb-10 py-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
            <p className="text-sm text-muted-foreground mb-2">Precio estimado</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl md:text-6xl font-bold text-primary text-glow-cyan">
                €{price}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {t(currentPackage.descriptionKey)}
            </p>
          </div>

          <div className="mb-10">
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Características incluidas
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {features.map((featureKey) => (
                <div key={featureKey} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{t(featureKey)}</span>
                </div>
              ))}
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full glow-cyan hover:glow-cyan-lg transition-all duration-300 bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Comenzar con {getPackageName(selectedPackage)}
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Precios sin IVA. Consulta por proyectos personalizados.
        </p>
      </div>
    </section>
  )
}