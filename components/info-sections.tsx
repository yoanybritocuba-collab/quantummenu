"use client"

import { motion } from "framer-motion"
import { Users, Zap, Shield, Heart, Target, Award, Clock, ThumbsUp, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface InfoSectionsProps {
  section: "about" | "process" | "guarantee"
}

export function InfoSections({ section }: InfoSectionsProps) {
  const { t } = useLanguage()

  if (section === "about") {
    return (
      <section className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <Users className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400 font-medium">SOBRE NOSOTROS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Impulsamos tu </span>
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">negocio digital</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Somos un equipo apasionado por la tecnología y el diseño. Transformamos ideas en soluciones digitales que impulsan negocios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Heart className="w-6 h-6" />, title: "Pasión", text: "Cada proyecto lo vivimos como propio. Nos apasiona ver crecer tu negocio con nuestras soluciones digitales." },
              { icon: <Target className="w-6 h-6" />, title: "Enfoque", text: "Nos centramos en tus objetivos. Cada solución está diseñada a medida para tu negocio y tus clientes." },
              { icon: <Award className="w-6 h-6" />, title: "Experiencia", text: "Años de experiencia creando webs, menús QR y soluciones digitales para todo tipo de negocios." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/0 to-purple-500/0 group-hover:from-red-500/20 group-hover:to-purple-500/20 rounded-2xl blur-xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative h-full bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-8 border border-zinc-800 group-hover:border-red-500/30 transition-all text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-purple-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <span className="text-red-400">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section === "process") {
    const steps = [
      { icon: <Zap className="w-6 h-6" />, title: "1. Contacto", text: "Cuéntanos tu idea por WhatsApp o email. Te respondemos en menos de 2 horas." },
      { icon: <Sparkles className="w-6 h-6" />, title: "2. Propuesta", text: "Te enviamos un presupuesto detallado con lo que necesitas. Sin compromiso." },
      { icon: <Clock className="w-6 h-6" />, title: "3. Desarrollo", text: "Creamos tu solución en tiempo récord. Te mantenemos al día de cada avance." },
      { icon: <ThumbsUp className="w-6 h-6" />, title: "4. Entrega", text: "Recibes tu proyecto terminado. Te enseñamos a usarlo y quedamos a tu disposición." },
    ]

    return (
      <section className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">CÓMO TRABAJAMOS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Así de </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">fácil es</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">4 pasos simples para transformar tu negocio</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="group relative">
                <div className="relative h-full bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-6 border border-zinc-800 group-hover:border-purple-500/30 transition-all text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-purple-400">{step.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.text}</p>
                  {i < 3 && <div className="hidden lg:block absolute -right-3 top-1/2 text-purple-500 text-2xl">→</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section === "guarantee") {
    return (
      <section className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400 font-medium">GARANTÍA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Tu </span>
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">tranquilidad</span>
              <span className="text-white"> es nuestra prioridad</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "Hosting 1 año gratis", text: "Todos nuestros planes incluyen hosting seguro de alta velocidad durante el primer año." },
              { icon: <Clock className="w-6 h-6" />, title: "Soporte continuo", text: "Te acompañamos después de la entrega. Resolvemos tus dudas y te ayudamos con cualquier cambio." },
              { icon: <Award className="w-6 h-6" />, title: "Satisfacción garantizada", text: "Trabajamos hasta que estés 100% satisfecho. Tu éxito es nuestro mejor portfolio." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 rounded-2xl blur-xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative h-full bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-8 border border-zinc-800 group-hover:border-amber-500/30 transition-all text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <span className="text-amber-400">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}