"use client"

import { useLanguage } from "@/lib/language-context"
import { Globe, Smartphone, Layout, Zap, Shield, Database, Code, Rocket, Server, Cloud, Palette, BarChart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Services() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Layout className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: t("services.web.title"),
      description: t("services.web.description"),
      features: [
        t("services.web.feature1"),
        t("services.web.feature2"),
        t("services.web.feature3"),
      ],
      color: "from-red-500 to-red-600",
      gradient: "from-red-500/20 to-red-600/10",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: t("services.qr.title"),
      description: t("services.qr.description"),
      features: [
        t("services.qr.feature1"),
        t("services.qr.feature2"),
        t("services.qr.feature3"),
      ],
      color: "from-purple-500 to-purple-600",
      gradient: "from-purple-500/20 to-purple-600/10",
    },
    {
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: t("services.admin.title"),
      description: t("services.admin.description"),
      features: [
        t("services.admin.feature1"),
        t("services.admin.feature2"),
        t("services.admin.feature3"),
      ],
      color: "from-pink-500 to-pink-600",
      gradient: "from-pink-500/20 to-pink-600/10",
    },
  ]

  const benefits = [
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t("services.benefit1"),
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t("services.benefit2"),
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t("services.benefit3"),
      gradient: "from-pink-500 to-pink-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("services.title1")}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">{t("services.title1")}</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("services.title2")}
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/0 via-red-500/0 to-purple-500/0 group-hover:from-red-500/30 group-hover:via-red-500/20 group-hover:to-purple-500/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-6 sm:p-8 border border-zinc-800 group-hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-white ${service.color.split(" ")[1]}`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-purple-500" />
                      <span className="text-zinc-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/30 backdrop-blur-sm mb-4">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("advantages.title")}</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            {t("advantages.subtitle")}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 hover:border-red-500/30 transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{benefit.title}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-zinc-800/50"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              50+
            </div>
            <div className="text-zinc-500 text-xs sm:text-sm">{t("stats.projects")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              98%
            </div>
            <div className="text-zinc-500 text-xs sm:text-sm">{t("stats.satisfaction")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              &lt; 2
            </div>
            <div className="text-zinc-500 text-xs sm:text-sm">{t("stats.delivery")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              24/7
            </div>
            <div className="text-zinc-500 text-xs sm:text-sm">{t("stats.support")}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}