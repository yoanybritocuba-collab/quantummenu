"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { SignalBadge } from "@/components/signal-badge"
import {
  Monitor, Smartphone, Store, Link2, Megaphone,
  Check, Zap, Crown, Clock, Shield, CreditCard, MessageCircle
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
      label: t("areas.web.title"),
      color: "from-red-500 to-red-600",
      bgActive: "bg-red-500/20 border-red-500/50 text-red-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      plans: [
        { name: t("areas.web.plans.simple"), price: "300€", popular: false, badge: null, paymentType: "single", features: [t("features.pages5"), t("features.responsive"), t("features.contactForm"), t("features.basicSeo"), t("features.hosting")], support: "basic" },
        { name: t("areas.web.plans.advanced"), price: "450€", popular: true, badge: t("badges.recommended"), paymentType: "single", features: [t("features.pagesUnlimited"), t("features.responsivePremium"), t("features.blog"), t("features.advancedSeo"), t("features.analytics"), t("features.hosting"), t("features.maintenanceBasic")], support: "basic" },
        { name: t("areas.web.plans.premium"), price: "500€", popular: false, badge: t("badges.pro"), paymentType: "single", features: [t("features.pagesUnlimited"), t("features.customDesign"), t("features.ecommerce"), t("features.paymentGateway"), t("features.advancedSeo"), t("features.analytics"), t("features.domainSsl"), t("features.hosting"), t("features.maintenancePriority")], support: "premium" },
      ]
    },
    {
      id: "qr",
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: t("areas.qr.title"),
      color: "from-purple-500 to-purple-600",
      bgActive: "bg-purple-500/20 border-purple-500/50 text-purple-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      plans: [
        { name: t("areas.qr.plans.basic"), price: "300€", popular: false, badge: null, paymentType: "single", features: [t("features.qrDigital"), t("features.qrStickers10"), t("features.whatsappSupport"), t("features.hosting")], support: "basic" },
        { name: t("areas.qr.plans.standard"), price: "340€", popular: true, badge: t("badges.mostSold"), paymentType: "single", features: [t("features.qrDigital"), t("features.qrStickers20"), t("features.realTimeUpdates"), t("features.whatsappSupport"), t("features.hosting"), t("features.maintenanceBasic")], support: "basic" },
        { name: t("areas.qr.plans.pro"), price: "380€", popular: false, badge: t("badges.pro"), paymentType: "single", features: [t("features.qrDigital"), t("features.qrStickers30"), t("features.realTimeUpdates"), t("features.adminPanel"), t("features.customDesign"), t("features.whatsappSupport"), t("features.hosting"), t("features.maintenancePriority"), t("features.oneClickProducts"), t("features.instantCategories")], support: "premium" },
      ]
    },
    {
      id: "catalog",
      icon: <Store className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: t("areas.catalog.title"),
      color: "from-orange-500 to-orange-600",
      bgActive: "bg-orange-500/20 border-orange-500/50 text-orange-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      plans: [
        { name: t("areas.catalog.plans.basic"), price: "300€", popular: false, badge: null, paymentType: "single", features: [t("features.catalogOnline"), t("features.whatsappOrders"), t("features.basicDesign"), t("features.hosting")], support: "basic" },
        { name: t("areas.catalog.plans.pro"), price: "380€", popular: true, badge: t("badges.recommended"), paymentType: "single", features: [t("features.catalogOnline"), t("features.whatsappOrders"), t("features.premiumDesign"), t("features.orderManagement"), t("features.hosting"), t("features.maintenanceBasic")], support: "basic" },
        { name: t("areas.catalog.plans.premium"), price: "400€", popular: false, badge: t("badges.pro"), paymentType: "single", features: [t("features.catalogOnline"), t("features.whatsappOrders"), t("features.premiumDesign"), t("features.orderManagement"), t("features.productStats"), t("features.customBranding"), t("features.hosting"), t("features.maintenancePriority")], support: "premium" },
      ]
    },
    {
      id: "linkbio",
      icon: <Link2 className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: t("areas.linkbio.title"),
      color: "from-cyan-500 to-cyan-600",
      bgActive: "bg-cyan-500/20 border-cyan-500/50 text-cyan-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      plans: [
        { name: t("areas.linkbio.plans.basic"), price: "280€", popular: false, badge: null, paymentType: "single", features: [t("features.links5"), t("features.responsive"), t("features.socialMedia"), t("features.hosting")], support: "basic" },
        { name: t("areas.linkbio.plans.pro"), price: "220€", popular: true, badge: t("badges.recommended"), paymentType: "single", features: [t("features.linksUnlimited"), t("features.customDesign"), t("features.whatsappBtn"), t("features.clickStats"), t("features.hosting"), t("features.maintenanceBasic")], support: "basic" },
        { name: t("areas.linkbio.plans.premium"), price: "350€", popular: false, badge: t("badges.pro"), paymentType: "single", features: [t("features.linksUnlimited"), t("features.premiumDesign"), t("features.whatsappBtn"), t("features.advancedStats"), t("features.bioSeo"), t("features.hosting"), t("features.maintenancePriority")], support: "premium" },
      ]
    },
    {
      id: "landing",
      icon: <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: t("areas.landing.title"),
      color: "from-amber-500 to-amber-600",
      bgActive: "bg-amber-500/20 border-amber-500/50 text-amber-400",
      bgInactive: "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300",
      plans: [
        { name: t("areas.landing.plans.basic"), price: "250€", popular: false, badge: null, paymentType: "single", features: [t("features.onePage"), t("features.responsive"), t("features.contactForm"), t("features.hosting")], support: "basic" },
        { name: t("areas.landing.plans.pro"), price: "280€", popular: true, badge: t("badges.recommended"), paymentType: "single", features: [t("features.onePage"), t("features.customDesign"), t("features.whatsappBtn"), t("features.visitCounter"), t("features.basicSeo"), t("features.hosting"), t("features.maintenanceBasic")], support: "basic" },
        { name: t("areas.landing.plans.premium"), price: "350€", popular: false, badge: t("badges.pro"), paymentType: "single", features: [t("features.onePage"), t("features.customDesign"), t("features.whatsappEmail"), t("features.visitCounter"), t("features.advancedSeo"), t("features.hosting"), t("features.maintenancePriority")], support: "premium" },
      ]
    },
  ]

  const monthlyPlans = [
    { name: t("payment.monthlyBasic"), price: "30€/mes", paymentType: "monthly", features: [t("features.hosting"), t("features.updates"), t("features.backups"), t("features.emailSupport")], support: "basic" },
    { name: t("payment.monthlyPro"), price: "35€/mes", paymentType: "monthly", features: [t("features.hosting"), t("features.updates"), t("features.backups"), t("features.security"), t("features.emailSupport")], support: "basic" },
    { name: t("payment.monthlyPremium"), price: "40€/mes", paymentType: "monthly", features: [t("features.hosting"), t("features.updates"), t("features.backups"), t("features.security"), t("features.maintenancePriority"), t("features.whatsappSupport")], support: "premium" },
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
  window.addEventListener("storage", checkStorage)
  const interval = setInterval(checkStorage, 200)
  return () => {
    window.removeEventListener("storage", checkStorage)
    clearInterval(interval)
  }
}, [])

  const activeAreaData = areas.find(a => a.id === activeArea)
  const singlePlans = activeAreaData?.plans.filter(p => p.paymentType === "single") || []

  const supportBadge = (type: string) => {
    if (type === "premium") {
      return (
        <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-full">
          <Shield className="w-2.5 h-2.5 text-yellow-400" />
          <span className="text-[9px] text-yellow-400 font-medium">{t("support.premium")}</span>
        </div>
      )
    }
    return (
      <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-zinc-500/10 to-zinc-400/10 border border-zinc-500/30 rounded-full">
        <Clock className="w-2.5 h-2.5 text-zinc-400" />
        <span className="text-[9px] text-zinc-400 font-medium">{t("support.businessHours")}</span>
      </div>
    )
  }

  const PlanCard = ({ plan, idx }: { plan: any; idx: number }) => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className={`group relative ${plan.badge ? "mt-3" : ""}`}>
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-red-500 to-purple-500 text-white text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">{plan.badge}</span>
        </div>
      )}
      <div className={`relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-xl sm:rounded-2xl p-4 sm:p-5 border transition-all duration-300 group-hover:shadow-xl ${plan.badge ? "border-red-500/50 group-hover:border-red-500/70 group-hover:shadow-red-500/20" : plan.paymentType === "monthly" ? "border-purple-500/30 group-hover:border-purple-500/50" : "border-zinc-800 group-hover:border-zinc-600"}`}>
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <h4 className="text-white font-bold text-sm sm:text-base">{plan.name}</h4>
          {plan.badge && <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />}
        </div>
        <div className="mb-2 sm:mb-3">
          <span className="text-xl sm:text-2xl font-bold text-white">{plan.price}</span>
          {plan.paymentType === "single" && <span className="text-zinc-500 text-[10px] sm:text-xs ml-1">{t("payment.oneTime")}</span>}
        </div>
        <div className="space-y-1 sm:space-y-1.5 mb-3">
          {plan.features.slice(0, 4).map((feature: string, i: number) => (
            <div key={i} className="flex items-center gap-1.5 text-[10px] sm:text-xs text-zinc-400">
              <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
              {feature}
            </div>
          ))}
          {plan.features.length > 4 && <div className="text-[10px] text-zinc-500 pl-4">+{plan.features.length - 4} {t("features.more")}</div>}
        </div>
        <div className="flex items-center justify-between gap-2">
          {supportBadge(plan.support)}
          <button onClick={() => sendToWhatsApp(plan.name, plan.price)} className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition-all duration-300 whitespace-nowrap ${plan.badge ? "bg-gradient-to-r from-red-600 to-purple-600 text-white hover:shadow-lg hover:shadow-red-500/25" : plan.paymentType === "monthly" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}>
            <MessageCircle className="w-3 h-3" />
            {t("buttons.contact")}
          </button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="services" className="relative pt-24 pb-16 min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignalBadge />

        <div className="mb-6 sm:mb-8">
          <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {areas.map((area) => (
              <button key={area.id} onClick={() => setActiveArea(area.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeArea === area.id ? area.bgActive + " shadow-lg" : area.bgInactive}`}>
                <span className={activeArea === area.id ? "" : "opacity-60"}>{area.icon}</span>
                <span>{area.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeAreaData && (
            <motion.div key={activeArea} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${activeAreaData.color} flex items-center justify-center shadow-lg`}>
                  {areas.find(a => a.id === activeArea)?.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{activeAreaData.label}</h3>
              </div>
              {singlePlans.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <CreditCard className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">{t("payment.single")}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {singlePlans.map((plan, idx) => <PlanCard key={idx} plan={plan} idx={idx} />)}
                  </div>
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">{t("payment.monthly")}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {monthlyPlans.map((plan, idx) => <PlanCard key={idx} plan={plan} idx={idx} />)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}