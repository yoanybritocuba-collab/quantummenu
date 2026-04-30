"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { HandCoins, Sparkles } from "lucide-react"

export function SignalBadge() {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative mb-8"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Efecto de pulso exterior */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-md animate-pulse" />
          
          <div className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm">
            <HandCoins className="w-5 h-5 text-emerald-400 animate-bounce" />
            <span className="text-white font-semibold text-sm sm:text-base">
              {t("signal.badge")}
            </span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}