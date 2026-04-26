"use client"

import { useState } from "react"
import { Check, Zap, Crown, Star, Shield, Rocket, Smartphone, Layout, QrCode, CreditCard, MessageCircle, Diamond, Sparkles, Wifi, Globe, Palette, BarChart, Users, Coffee, Gift } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/lib/language-context"

export function PricingSubscription() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const whatsappNumber = "+34624497851"
  
  const sendToWhatsApp = (planName: string, price: number, cycle: string) => {
    const message = `Hola! Me interesa el plan *${planName}* - ${cycle} por *${price}€*`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodedMessage}`, '_blank')
  }

  // SECCIÓN 1: PAGO ÚNICO - QR
  const oneTimePlans = [
    {
      name: t("pricing.qrBasic"),
      price: 300,
      description: t("pricing.qrBasicDesc"),
      features: [
        t("pricing.qrBasic.feature1"),
        t("pricing.qrBasic.feature2"),
        t("pricing.qrBasic.feature3"),
        t("pricing.qrBasic.feature4"),
      ],
      icon: <QrCode className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      badge: null,
    },
    {
      name: t("pricing.qrStandard"),
      price: 320,
      description: t("pricing.qrStandardDesc"),
      features: [
        t("pricing.qrStandard.feature1"),
        t("pricing.qrStandard.feature2"),
        t("pricing.qrStandard.feature3"),
        t("pricing.qrStandard.feature4"),
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      badge: t("pricing.mostSold"),
    },
    {
      name: t("pricing.qrPro"),
      price: 350,
      description: t("pricing.qrProDesc"),
      features: [
        t("pricing.qrPro.feature1"),
        t("pricing.qrPro.feature2"),
        t("pricing.qrPro.feature3"),
        t("pricing.qrPro.feature4"),
        t("pricing.qrPro.feature5"),
      ],
      icon: <Diamond className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      badge: t("pricing.recommended"),
    },
  ]

  // SECCIÓN 2: PACKS COMPLETOS
  const packPlans = [
    {
      name: "Pack 8 QR",
      price: 500,
      description: "Web + QR + Carta + 8 QR físicos",
      features: [
        "Web completa responsive",
        "QR funcional para menú",
        "Carta digital interactiva",
        "8 QR físicos (chapa láser)",
        "Panel admin unificado",
        "Hosting 1 año incluido",
      ],
      icon: <Gift className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      badge: null,
    },
    {
      name: "Pack 15 QR",
      price: 530,
      description: "Web + QR + Carta + 15 QR físicos",
      features: [
        "Web completa responsive",
        "QR funcional para menú",
        "Carta digital interactiva",
        "15 QR físicos (chapa láser)",
        "Panel admin unificado",
        "Hosting 1 año incluido",
        "Soporte prioritario",
      ],
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      badge: t("pricing.mostComplete"),
    },
    {
      name: "Pack 20 QR",
      price: 580,
      description: "Web + QR + Carta + 20 QR físicos",
      features: [
        "Web completa responsive",
        "QR funcional para menú",
        "Carta digital interactiva",
        "20 QR físicos (chapa láser)",
        "Panel admin unificado",
        "Hosting 1 año incluido",
        "Soporte prioritario",
        "Estadísticas avanzadas",
      ],
      icon: <Crown className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      badge: "TODO INCLUIDO",
    },
  ]

  // SECCIÓN 3: SUSCRIPCIÓN MENSUAL
  const monthlyPlans = [
    {
      name: t("pricing.planQr"),
      price: 30,
      description: t("pricing.planQrDesc"),
      features: [
        t("pricing.planQr.feature1"),
        t("pricing.planQr.feature2"),
        t("pricing.planQr.feature3"),
        t("pricing.planQr.feature4"),
        t("pricing.planQr.feature5"),
        t("pricing.planQr.feature6"),
        t("pricing.planQr.feature7"),
      ],
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      badge: null,
    },
    {
      name: t("pricing.planQrPlus"),
      price: 35,
      description: t("pricing.planQrPlusDesc"),
      features: [
        t("pricing.planQrPlus.feature1"),
        t("pricing.planQrPlus.feature2"),
        t("pricing.planQrPlus.feature3"),
        t("pricing.planQrPlus.feature4"),
        t("pricing.planQrPlus.feature5"),
        t("pricing.planQrPlus.feature6"),
        t("pricing.planQrPlus.feature7"),
        t("pricing.planQrPlus.feature8"),
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      badge: t("pricing.recommended"),
    },
    {
      name: t("pricing.planFull"),
      price: 40,
      description: t("pricing.planFullDesc"),
      features: [
        t("pricing.planFull.feature1"),
        t("pricing.planFull.feature2"),
        t("pricing.planFull.feature3"),
        t("pricing.planFull.feature4"),
        t("pricing.planFull.feature5"),
        t("pricing.planFull.feature6"),
        t("pricing.planFull.feature7"),
        t("pricing.planFull.feature8"),
        t("pricing.planFull.feature9"),
      ],
      icon: <Diamond className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      badge: "TODO INCLUIDO",
    },
  ]

  // SECCIÓN 4: DESARROLLO WEB
  const webPlans = [
    {
      name: t("pricing.webSimple"),
      price: 300,
      description: t("pricing.webSimpleDesc"),
      features: [
        t("pricing.webSimple.feature1"),
        t("pricing.webSimple.feature2"),
        t("pricing.webSimple.feature3"),
        t("pricing.webSimple.feature4"),
        t("pricing.webSimple.feature5"),
      ],
      icon: <Layout className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      badge: null,
    },
    {
      name: t("pricing.webAdvanced"),
      price: 400,
      description: t("pricing.webAdvancedDesc"),
      features: [
        t("pricing.webAdvanced.feature1"),
        t("pricing.webAdvanced.feature2"),
        t("pricing.webAdvanced.feature3"),
        t("pricing.webAdvanced.feature4"),
        t("pricing.webAdvanced.feature5"),
        t("pricing.webAdvanced.feature6"),
      ],
      icon: <Rocket className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      badge: t("pricing.recommended"),
    },
    {
      name: "Web Premium",
      price: 550,
      description: "E-commerce · tienda online · pasarela de pagos",
      features: [
        "Diseño responsive premium",
        "Páginas ilimitadas",
        "Tienda online integrada",
        "Pasarela de pagos",
        "Carrito de compras",
        "SEO avanzado + Analytics",
        "Dominio + SSL incluido",
        "Soporte 24/7",
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      badge: "PRO",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const SectionCard = ({ title, subtitle, plans }: { title: string; subtitle?: string; plans: any[] }) => (
    <div className="mb-16 sm:mb-20">
      <div className="text-center mb-8 sm:mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">{title}</h3>
        {subtitle && <p className="text-zinc-400 text-sm sm:text-base mt-2">{subtitle}</p>}
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
      >
        {plans.map((plan, index) => (
          <motion.div key={index} variants={itemVariants} className="group relative h-full">
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
                  {plan.badge}
                </div>
              </div>
            )}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.color} rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-30`} />
            <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-4 sm:p-5 border border-zinc-800 group-hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                  {plan.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">{plan.name}</h4>
                  <p className="text-zinc-500 text-[10px] sm:text-xs">{plan.description}</p>
                </div>
              </div>
              <div className="mb-3">
                <span className="text-2xl sm:text-3xl font-bold text-white">{plan.price}€</span>
                <span className="text-zinc-500 text-xs ml-1">
                  {title.includes("Mensual") ? "/mes" : " único"}
                </span>
                <p className="text-green-500 text-[10px] mt-0.5">+ Hosting 1 año gratis</p>
              </div>
              <div className="space-y-1.5 mb-4">
                {plan.features.slice(0, 4).map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-[10px] sm:text-xs leading-tight">{feature}</span>
                  </div>
                ))}
                {plan.features.length > 4 && (
                  <div className="text-zinc-500 text-[9px] sm:text-[10px] mt-1 cursor-pointer hover:text-zinc-400 transition-colors">
                    +{plan.features.length - 4} características más
                  </div>
                )}
              </div>
              <button
                onClick={() => sendToWhatsApp(plan.name, plan.price, title.includes("Mensual") ? "Suscripción Mensual" : "Pago Único")}
                className={`w-full py-1.5 sm:py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 ${
                  plan.badge && (plan.badge === t("pricing.mostSold") || plan.badge === t("pricing.recommended"))
                    ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg hover:shadow-red-500/25 hover:scale-105"
                    : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 hover:border-red-500/50"
                }`}
              >
                <MessageCircle className="w-3 h-3" />
                Contratar
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )

  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-4">
            <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">PRECIOS EN EUROS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Elige tu</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Plan Ideal
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mt-3">
            Sin sorpresas ni costos ocultos. Elige el plan que mejor se adapte a tu negocio.
          </p>
        </motion.div>

        {/* SECCIÓN 1: PAGO ÚNICO - QR */}
        <SectionCard title="💳 Pago Único - QR" subtitle="Soluciones QR para tu negocio" plans={oneTimePlans} />

        {/* SECCIÓN 2: PACKS COMPLETOS */}
        <SectionCard title="📦 Packs Completos" subtitle="Todo lo que necesitas en un solo pack" plans={packPlans} />

        {/* SECCIÓN 3: SUSCRIPCIÓN MENSUAL */}
        <SectionCard title="🔄 Suscripción Mensual" subtitle="Sin permanencia, cancela cuando quieras" plans={monthlyPlans} />

        {/* SECCIÓN 4: DESARROLLO WEB */}
        <SectionCard title="🌐 Desarrollo Web" subtitle="Sitios profesionales para tu negocio" plans={webPlans} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 sm:mt-10"
        >
          <p className="text-zinc-500 text-[10px] sm:text-xs">
            🔥 Todos los planes incluyen: Hosting seguro • Actualizaciones gratuitas • Soporte técnico
          </p>
        </motion.div>
      </div>
    </section>
  )
}