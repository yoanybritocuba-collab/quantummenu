"use client"

import { useState } from "react"
import { Check, Zap, Crown, Sparkles, Star, Shield, Rocket, Smartphone, Layout, QrCode, CreditCard, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/lib/language-context"

export function PricingSubscription() {
  const { t } = useLanguage()
  const [billingCycle, setBillingCycle] = useState<"one-time" | "monthly">("one-time")
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
        t("pricing.qrBasic.feature5"),
        t("pricing.qrBasic.feature6"),
      ],
      icon: <QrCode className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      badge: null,
      popular: false,
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
        t("pricing.qrStandard.feature5"),
        t("pricing.qrStandard.feature6"),
        t("pricing.qrStandard.feature7"),
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      badge: t("pricing.mostSold"),
      popular: true,
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
        t("pricing.qrPro.feature6"),
        t("pricing.qrPro.feature7"),
        t("pricing.qrPro.feature8"),
      ],
      icon: <Crown className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      badge: t("pricing.recommended"),
      popular: false,
    },
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
        t("pricing.webSimple.feature6"),
      ],
      icon: <Layout className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      badge: null,
      popular: false,
    },
    {
      name: t("pricing.webAdvanced"),
      price: 500,
      description: t("pricing.webAdvancedDesc"),
      features: [
        t("pricing.webAdvanced.feature1"),
        t("pricing.webAdvanced.feature2"),
        t("pricing.webAdvanced.feature3"),
        t("pricing.webAdvanced.feature4"),
        t("pricing.webAdvanced.feature5"),
        t("pricing.webAdvanced.feature6"),
        t("pricing.webAdvanced.feature7"),
        t("pricing.webAdvanced.feature8"),
      ],
      icon: <Rocket className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      badge: t("pricing.pro"),
      popular: false,
    },
    {
      name: t("pricing.pack8qr"),
      price: 500,
      description: t("pricing.pack8qrDesc"),
      features: [
        t("pricing.pack8qr.feature1"),
        t("pricing.pack8qr.feature2"),
        t("pricing.pack8qr.feature3"),
        t("pricing.pack8qr.feature4"),
        t("pricing.pack8qr.feature5"),
        t("pricing.pack8qr.feature6"),
        t("pricing.pack8qr.feature7"),
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-purple-600",
      badge: t("pricing.offer"),
      popular: false,
    },
    {
      name: t("pricing.pack15qr"),
      price: 530,
      description: t("pricing.pack15qrDesc"),
      features: [
        t("pricing.pack15qr.feature1"),
        t("pricing.pack15qr.feature2"),
        t("pricing.pack15qr.feature3"),
        t("pricing.pack15qr.feature4"),
        t("pricing.pack15qr.feature5"),
        t("pricing.pack15qr.feature6"),
        t("pricing.pack15qr.feature7"),
        t("pricing.pack15qr.feature8"),
      ],
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      badge: t("pricing.mostComplete"),
      popular: false,
    },
  ]

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
      badge: t("pricing.popular"),
      popular: true,
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
      popular: false,
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
      icon: <Crown className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      badge: t("pricing.everythingIncluded"),
      popular: false,
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

  const currentPlans = billingCycle === "one-time" ? oneTimePlans : monthlyPlans

  return (
    <section id="pricing" className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-4 sm:mb-6">
            <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("pricing.badge")}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">{t("pricing.title1")}</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("pricing.title2")}
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="relative flex p-1 bg-zinc-900/50 rounded-full border border-zinc-800 backdrop-blur-sm">
            <button
              onClick={() => setBillingCycle("one-time")}
              className={`relative px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                billingCycle === "one-time"
                  ? "text-white bg-gradient-to-r from-red-600 to-purple-600 shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t("pricing.oneTime")}
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "text-white bg-gradient-to-r from-red-600 to-purple-600 shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t("pricing.monthly")}
              <span className="absolute -top-2 -right-1 text-[8px] sm:text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">
                {t("pricing.save")}
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {currentPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.color} rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-30 ${plan.popular ? "opacity-30" : ""}`} />
              
              <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-6 sm:p-8 border border-zinc-800 group-hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-zinc-500 text-xs sm:text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{plan.price}€</span>
                  <span className="text-zinc-500 ml-1 text-sm">
                    {billingCycle === "one-time" ? "" : "/mes"}
                  </span>
                  {billingCycle === "one-time" && (
                    <p className="text-green-500 text-xs mt-1">+ {t("pricing.hostingFree")}</p>
                  )}
                </div>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-zinc-300 text-xs sm:text-sm">{feature.replace("✅ ", "")}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => sendToWhatsApp(plan.name, plan.price, billingCycle === "one-time" ? t("pricing.oneTime") : t("pricing.monthly"))}
                  className={`w-full py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg hover:shadow-red-500/25 hover:scale-105"
                      : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 hover:border-red-500/50"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {billingCycle === "one-time" ? t("pricing.hireWhatsapp") : t("pricing.subscribeWhatsapp")}
                </button>

                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-zinc-500 text-xs sm:text-sm">
            🔥 {t("pricing.allPlansInclude")}<br />
            📦 {t("pricing.qrNote")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}