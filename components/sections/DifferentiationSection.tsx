"use client";

import { motion } from "framer-motion";
import { Zap, HeartHandshake, Clock, Sparkles, PhoneCall, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Sin complicaciones técnicas",
    desc: "No necesitas saber de tecnología. Nosotros nos encargamos de todo y tú solo te centras en tu negocio.",
    color: "text-electric-400",
    bg: "bg-electric-500/8",
    border: "border-electric-500/15",
  },
  {
    icon: Clock,
    title: "Actualizaciones en segundos",
    desc: "Cambia precios, añade platos, oculta productos no disponibles. Todo en tiempo real, desde tu móvil.",
    color: "text-neon-green",
    bg: "bg-neon-green/8",
    border: "border-neon-green/15",
  },
  {
    icon: Sparkles,
    title: "Diseño que impresiona",
    desc: "Diseños modernos y personalizados para tu marca. Tu negocio merecía una imagen profesional.",
    color: "text-purple-400",
    bg: "bg-purple-500/8",
    border: "border-purple-500/15",
  },
  {
    icon: HeartHandshake,
    title: "Soporte cercano y rápido",
    desc: "Tienes dudas, te ayudamos. Por WhatsApp, email o llamada. Respuesta en menos de 2 horas en horario laboral.",
    color: "text-pink-400",
    bg: "bg-pink-500/8",
    border: "border-pink-500/15",
  },
  {
    icon: PhoneCall,
    title: "Gestión desde el móvil",
    desc: "El panel de administración funciona perfectamente desde tu smartphone. Sin ordenador ni conocimientos.",
    color: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/15",
  },
  {
    icon: TrendingUp,
    title: "Resultados medibles",
    desc: "Estadísticas de visitas, escaneos QR y comportamiento de clientes. Datos reales para decisiones reales.",
    color: "text-teal-400",
    bg: "bg-teal-500/8",
    border: "border-teal-500/15",
  },
];

const comparisonData = [
  { feature: "Actualización de carta", us: true, paper: false, agency: "Días" },
  { feature: "Sin conocimientos técnicos", us: true, paper: true, agency: false },
  { feature: "Panel de administración", us: true, paper: false, agency: true },
  { feature: "Precio mensual bajo", us: true, paper: false, agency: false },
  { feature: "Soporte personalizado", us: true, paper: false, agency: true },
  { feature: "QR personalizado", us: true, paper: false, agency: true },
];

export default function DifferentiationSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-500/[0.03] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium text-white/50 bg-white/5 border border-white/10 rounded-full">
            ¿Por qué nosotros?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Lo que nos hace{" "}
            <span className="gradient-text">diferentes</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            No somos una agencia grande ni cara. Somos un desarrollador especializado que
            trabaja directamente contigo para darte resultados reales.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`p-5 rounded-2xl border ${item.bg} ${item.border} card-glass-hover`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.bg} border ${item.border}`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Comparativa honesta
          </h3>

          <div className="card-glass rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-px bg-white/5">
              <div className="bg-dark-900/60 px-4 py-3">
                <span className="text-xs text-white/30">Característica</span>
              </div>
              <div className="bg-electric-500/10 px-4 py-3 text-center border-x border-electric-500/10">
                <span className="text-xs font-semibold text-electric-400">TuNegocio Digital</span>
              </div>
              <div className="bg-dark-900/60 px-4 py-3 text-center">
                <span className="text-xs text-white/30">Carta en papel</span>
              </div>
              <div className="bg-dark-900/60 px-4 py-3 text-center">
                <span className="text-xs text-white/30">Agencia grande</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 gap-px bg-white/[0.03] ${
                  i % 2 === 0 ? "" : "bg-white/[0.01]"
                }`}
              >
                <div className="bg-dark-900/40 px-4 py-3.5">
                  <span className="text-sm text-white/60">{row.feature}</span>
                </div>
                <div className="bg-electric-500/5 px-4 py-3.5 text-center border-x border-electric-500/8">
                  {row.us === true ? (
                    <span className="text-neon-green text-lg">✓</span>
                  ) : (
                    <span className="text-white/20 text-sm">{row.us}</span>
                  )}
                </div>
                <div className="bg-dark-900/40 px-4 py-3.5 text-center">
                  {row.paper === true ? (
                    <span className="text-white/40 text-lg">✓</span>
                  ) : row.paper === false ? (
                    <span className="text-red-400/40 text-lg">✗</span>
                  ) : (
                    <span className="text-white/30 text-xs">{row.paper}</span>
                  )}
                </div>
                <div className="bg-dark-900/40 px-4 py-3.5 text-center">
                  {row.agency === true ? (
                    <span className="text-white/40 text-lg">✓</span>
                  ) : row.agency === false ? (
                    <span className="text-red-400/40 text-lg">✗</span>
                  ) : (
                    <span className="text-white/30 text-xs">{row.agency}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
