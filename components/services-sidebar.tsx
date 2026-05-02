"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { SignalBadge } from "@/components/signal-badge"
import {
  Monitor, Smartphone, Store, Link2, Megaphone,
  Check, Zap, Crown, Clock, Shield, CreditCard, MessageCircle, Sparkles
} from "lucide-react"

export function ServicesSidebar() {
  const { t } = useLanguage()
  const [activeArea, setActiveArea] = useState<string>("web")

  const whatsappNumber = "+34624497851"

  const sendToWhatsApp = (planName: string, price: string) => {
    const message = `Hola! Me interesa el plan *${planName}* por *${price}*`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const areas = [
    {
      id: "web",
      icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("areas.web.title"),
      subtitle: t("areas.web.description"),
      color: "from-red-500 to-red-600",
      bgActive: "bg-red-500/20 border-red-500/50 text-red-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      singlePlans: [
        { name: t("plans.web.simple"), price: "300€", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.web.advanced"), price: "350€", badge: t("badges.recommended"), features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.web.premium"), price: "400€", badge: t("badges.pro"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ],
      monthlyPlans: [
        { name: t("plans.monthly.basic"), price: "30€/mes", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsive"), t("features.paymentCart")] },
        { name: t("plans.monthly.pro"), price: "35€/mes", badge: null, features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.monthly.premium"), price: "40€/mes", badge: t("badges.bestValue"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ]
    },
    {
      id: "qr",
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("areas.qr.title"),
      subtitle: t("areas.qr.description"),
      color: "from-purple-500 to-purple-600",
      bgActive: "bg-purple-500/20 border-purple-500/50 text-purple-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      singlePlans: [
        { name: t("plans.qr.basic"), price: "300€", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.qr.pro"), price: "325€", badge: t("badges.recommended"), features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.qr.premium"), price: "350€", badge: t("badges.pro"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.premium"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ],
      monthlyPlans: [
        { name: t("plans.monthly.basic"), price: "25€/mes", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.pro"), price: "30€/mes", badge: null, features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.premium"), price: "45€/mes", badge: t("badges.bestValue"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ]
    },
    {
      id: "catalog",
      icon: <Store className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("areas.catalog.title"),
      subtitle: t("areas.catalog.description"),
      color: "from-orange-500 to-orange-600",
      bgActive: "bg-orange-500/20 border-orange-500/50 text-orange-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      singlePlans: [
        { name: t("plans.catalog.basic"), price: "300€", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.catalog.pro"), price: "320€", badge: t("badges.recommended"), features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.catalog.premium"), price: "350€", badge: t("badges.pro"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ],
      monthlyPlans: [
        { name: t("plans.monthly.basic"), price: "30€/mes", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.pro"), price: "35€/mes", badge: null, features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.premium"), price: "40€/mes", badge: t("badges.bestValue"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ]
    },
    {
      id: "linkbio",
      icon: <Link2 className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("areas.linkbio.title"),
      subtitle: t("areas.linkbio.description"),
      color: "from-cyan-500 to-cyan-600",
      bgActive: "bg-cyan-500/20 border-cyan-500/50 text-cyan-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      singlePlans: [
        { name: t("plans.linkbio.basic"), price: "220€", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.linkbio.pro"), price: "280€", badge: t("badges.recommended"), features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.linkbio.premium"), price: "300€", badge: t("badges.pro"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ],
      monthlyPlans: [
        { name: t("plans.monthly.basic"), price: "30€/mes", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.pro"), price: "35€/mes", badge: null, features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.premium"), price: "40€/mes", badge: t("badges.bestValue"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ]
    },
    {
      id: "landing",
      icon: <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("areas.landing.title"),
      subtitle: t("areas.landing.description"),
      color: "from-amber-500 to-amber-600",
      bgActive: "bg-amber-500/20 border-amber-500/50 text-amber-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      singlePlans: [
        { name: t("plans.landing.basic"), price: "300€", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.landing.pro"), price: "320€", badge: t("badges.recommended"), features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsivePremium"), t("features.paymentGateway")] },
        { name: t("plans.landing.premium"), price: "350€", badge: t("badges.pro"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ],
      monthlyPlans: [
        { name: t("plans.monthly.basic"), price: "30€/mes", badge: null, features: [t("features.hosting"), t("features.pages5"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.monitoring"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.pro"), price: "35€/mes", badge: null, features: [t("features.hosting"), t("features.pages10"), t("features.whatsappSupport"), t("features.supportBasic"), t("features.responsive"), t("features.paymentGateway")] },
        { name: t("plans.monthly.premium"), price: "40€/mes", badge: t("badges.bestValue"), features: [t("features.hosting"), t("features.domain"), t("features.pagesUnlimited"), t("features.whatsappSupport"), t("features.support24"), t("features.paymentGateway")] },
      ]
    },
  ]

  useEffect(() => {
    const checkStorage = () => {
      const savedArea = localStorage.getItem("activeServiceArea")
      if (savedArea && areas.find(a => a.id === savedArea)) {
        setActiveArea(savedArea)
        localStorage.removeItem("activeServiceArea")
      }
    }
    checkStorage()
    const interval = setInterval(checkStorage, 200)
    return () => clearInterval(interval)
  }, [])

  const activeAreaData = areas.find(a => a.id === activeArea)

  const PlanCard = ({ plan, idx }: { plan: any; idx: number }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className={`group relative ${plan.badge ? "mt-4" : ""}`}>
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-red-500 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />{plan.badge}
          </span>
        </div>
      )}
      <div className={`relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-5 sm:p-6 border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 ${plan.badge ? "border-red-500/40 group-hover:border-red-500/70" : "border-zinc-800 group-hover:border-zinc-600"}`}>
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-white font-bold text-sm sm:text-base">{plan.name}</h4>
          {plan.badge && <Crown className="w-4 h-4 text-yellow-400" />}
        </div>
        <div className="mb-4">
          <span className="text-2xl sm:text-3xl font-bold text-white">{plan.price}</span>
          {!plan.name.includes("Suscripción") && <span className="text-zinc-500 text-xs ml-1">{t("payment.oneTime")}</span>}
        </div>
        <div className="space-y-2 mb-5">
          {plan.features.map((feature: string, i: number) => (
            <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-zinc-400">
              <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {plan.badge ? (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <Shield className="w-3 h-3 text-yellow-400" />
              <span className="text-[10px] text-yellow-400 font-medium">{t("support.premium")}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-zinc-500/10 border border-zinc-500/30 rounded-full">
              <Clock className="w-3 h-3 text-zinc-400" />
              <span className="text-[10px] text-zinc-400 font-medium">{t("support.businessHours")}</span>
            </div>
          )}
          <button onClick={() => sendToWhatsApp(plan.name, plan.price)} className="ml-auto flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold bg-gradient-to-r from-red-600 to-purple-600 text-white hover:shadow-lg transition-all whitespace-nowrap">
            <MessageCircle className="w-3.5 h-3.5" />
            {t("buttons.contact")}
          </button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="services" className="relative pt-24 pb-16 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/3 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignalBadge />
        <div className="mb-8 sm:mb-10">
          <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {areas.map((area) => (
              <button key={area.id} onClick={() => setActiveArea(area.id)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeArea === area.id ? area.bgActive + " shadow-lg" : area.bgInactive}`}>
                <span>{area.icon}</span><span>{area.title}</span>
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          {activeAreaData && (
            <motion.div key={activeArea} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${activeAreaData.color} flex items-center justify-center shadow-lg`}>{activeAreaData.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{activeAreaData.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm">{activeAreaData.subtitle}</p>
              </div>
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-5">
                  <CreditCard className="w-5 h-5 text-red-400" />
                  <h4 className="text-white font-bold text-lg">{t("payment.single")}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {activeAreaData.singlePlans.map((plan, idx) => <PlanCard key={idx} plan={plan} idx={idx} />)}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <h4 className="text-white font-bold text-lg">{t("payment.monthly")}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {activeAreaData.monthlyPlans.map((plan, idx) => <PlanCard key={idx} plan={plan} idx={idx} />)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}