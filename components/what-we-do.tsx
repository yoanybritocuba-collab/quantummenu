"use client"

import { Monitor, Smartphone, Store, Link2, Megaphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/lib/language-context"

export function WhatWeDo() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleClick = (areaId: string) => {
    window.location.hash = areaId
    setTimeout(() => {
      const element = document.getElementById("services")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-4">
            <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">
              {t("whatWeDo.badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">{t("whatWeDo.title1")}</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("whatWeDo.title2")}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mt-3">
            {t("whatWeDo.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="group relative cursor-pointer" onClick={() => handleClick("web")}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/0 to-purple-500/0 group-hover:from-red-500/30 group-hover:to-purple-500/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-4 sm:p-6 border border-zinc-800 group-hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/10">
                <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{t("areas.web.title")}</h3>
              <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed">{t("areas.web.description")}</p>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative cursor-pointer" onClick={() => handleClick("qr")}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/30 group-hover:to-pink-500/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-4 sm:p-6 border border-zinc-800 group-hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/10">
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{t("areas.qr.title")}</h3>
              <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed">{t("areas.qr.description")}</p>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative cursor-pointer" onClick={() => handleClick("catalog")}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/30 group-hover:to-amber-500/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-4 sm:p-6 border border-zinc-800 group-hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/10">
                <Store className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{t("areas.catalog.title")}</h3>
              <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed">{t("areas.catalog.description")}</p>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative cursor-pointer" onClick={() => handleClick("linkbio")}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-4 sm:p-6 border border-zinc-800 group-hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/10">
                <Link2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{t("areas.linkbio.title")}</h3>
              <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed">{t("areas.linkbio.description")}</p>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative cursor-pointer" onClick={() => handleClick("landing")}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/30 group-hover:to-yellow-500/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-4 sm:p-6 border border-zinc-800 group-hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/10">
                <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{t("areas.landing.title")}</h3>
              <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed">{t("areas.landing.description")}</p>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}