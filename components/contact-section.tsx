"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const getTexts = (language: string) => {
  const texts: Record<string, any> = {
    es: {
      badge: "CONTACTO",
      title1: "Hablemos de ",
      title2: "tu proyecto",
      subtitle: "Cuéntanos tu idea y te ayudamos a hacerla realidad",
      whatsapp: "WhatsApp",
      whatsappDesc: "Respuesta rápida en minutos",
      email: "Email",
      emailDesc: "Consultas detalladas",
    },
    en: {
      badge: "CONTACT",
      title1: "Let's talk about ",
      title2: "your project",
      subtitle: "Tell us your idea and we'll help you make it happen",
      whatsapp: "WhatsApp",
      whatsappDesc: "Quick response in minutes",
      email: "Email",
      emailDesc: "Detailed inquiries",
    },
    ru: {
      badge: "КОНТАКТЫ",
      title1: "Обсудим ",
      title2: "ваш проект",
      subtitle: "Расскажите о вашей идее, и мы поможем её реализовать",
      whatsapp: "WhatsApp",
      whatsappDesc: "Быстрый ответ",
      email: "Email",
      emailDesc: "Подробные запросы",
    },
    fr: {
      badge: "CONTACT",
      title1: "Parlons de ",
      title2: "votre projet",
      subtitle: "Parlez-nous de votre idée et nous vous aiderons à la réaliser",
      whatsapp: "WhatsApp",
      whatsappDesc: "Réponse rapide",
      email: "Email",
      emailDesc: "Demandes détaillées",
    },
    it: {
      badge: "CONTATTI",
      title1: "Parliamo del ",
      title2: "tuo progetto",
      subtitle: "Raccontaci la tua idea e ti aiuteremo a realizzarla",
      whatsapp: "WhatsApp",
      whatsappDesc: "Risposta rapida",
      email: "Email",
      emailDesc: "Richieste dettagliate",
    },
  }
  return texts[language] || texts.es
}

export function ContactSection() {
  const { language } = useLanguage()
  const txt = getTexts(language)

  return (
    <section className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-purple-950/5 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/3 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
            <Phone className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">{txt.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">{txt.title1}</span>
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{txt.title2}</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{txt.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.a href="https://wa.me/34624497851" target="_blank" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/0 to-green-600/0 group-hover:from-green-500/30 group-hover:to-green-600/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-8 border border-zinc-800 group-hover:border-green-500/30 transition-all flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{txt.whatsapp}</h3>
                <p className="text-zinc-400 text-sm">{txt.whatsappDesc}</p>
                <p className="text-green-400 text-sm font-medium mt-1">+34 624 497 851</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>

          <motion.a href="mailto:yoanybritocuba@gmail.com" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/30 group-hover:to-red-600/30 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-8 border border-zinc-800 group-hover:border-red-500/30 transition-all flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{txt.email}</h3>
                <p className="text-zinc-400 text-sm">{txt.emailDesc}</p>
                <p className="text-red-400 text-sm font-medium mt-1">yoanybritocuba@gmail.com</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}