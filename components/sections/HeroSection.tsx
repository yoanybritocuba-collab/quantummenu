"use client";

import { motion } from "framer-motion";
import { ArrowRight, QrCode, Globe, ChevronDown, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-electric-700/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-neon-green/5 rounded-full blur-[60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium text-electric-400 bg-electric-500/10 border border-electric-500/20 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
              Disponible para nuevos proyectos
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-white">Cartas digitales</span>
              <br />
              <span className="gradient-text text-glow-blue">con QR</span>
              <span className="text-white"> y webs que</span>
              <br />
              <span className="text-white">hacen crecer tu</span>
              <br />
              <span className="gradient-text-blue">negocio</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl"
            >
              Transforma tu restaurante o negocio con una{" "}
              <strong className="text-white/80 font-medium">carta digital con código QR</strong> o una{" "}
              <strong className="text-white/80 font-medium">web profesional</strong> que convierte
              visitantes en clientes. Sin complicaciones técnicas.
            </motion.p>

            {/* Social proof mini */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex -space-x-2">
                {["#1ec8ff", "#39ff14", "#ff6b6b", "#ffd93d"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-dark-950 flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: color + "22", borderColor: color + "44", color }}
                  >
                    {["R", "C", "H", "M"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-white/40">+40 negocios ya confían en nosotros</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-electric-500 text-dark-950 rounded-xl hover:bg-electric-400 transition-all duration-200 btn-primary-glow"
              >
                Ver trabajos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                Pedir presupuesto
              </a>
            </motion.div>
          </div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative animate-float">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-electric-500/20 rounded-[3rem] blur-3xl scale-75 translate-y-4" />

              {/* Phone frame */}
              <div className="relative w-64 sm:w-72 rounded-[2.5rem] bg-dark-800 border border-white/10 overflow-hidden shadow-2xl">
                {/* Status bar */}
                <div className="bg-dark-900 px-6 py-3 flex items-center justify-between">
                  <span className="text-xs text-white/40">9:41</span>
                  <div className="w-16 h-4 rounded-full bg-dark-950" />
                  <span className="text-xs text-white/40">●●●</span>
                </div>

                {/* Screen content — Digital Menu */}
                <div className="bg-dark-850 min-h-[460px]">
                  {/* Restaurant header */}
                  <div className="relative h-32 bg-gradient-to-br from-electric-900/50 to-dark-800 flex items-end p-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-850/80 to-transparent" />
                    <div className="relative">
                      <p className="text-xs text-electric-400 font-medium">RESTAURANTE</p>
                      <h3 className="text-lg font-bold text-white">La Terraza</h3>
                      <p className="text-xs text-white/50">Cocina mediterránea</p>
                    </div>
                  </div>

                  {/* QR badge */}
                  <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-electric-400" />
                      <span className="text-xs text-white/60">Carta digital activa</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-neon-green/10 text-neon-green rounded-full border border-neon-green/20">
                      ● LIVE
                    </span>
                  </div>

                  {/* Menu categories */}
                  <div className="px-4 py-3">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                      {["Entrantes", "Principales", "Postres", "Bebidas"].map((cat, i) => (
                        <button
                          key={cat}
                          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            i === 0
                              ? "bg-electric-500 text-dark-950"
                              : "bg-white/5 text-white/50 border border-white/10"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="px-4 space-y-3 pb-4">
                    {[
                      { name: "Croquetas caseras", price: "8.50€", emoji: "🥘" },
                      { name: "Ensalada templada", price: "10.00€", emoji: "🥗" },
                      { name: "Tabla de ibéricos", price: "14.50€", emoji: "🍖" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-3 bg-dark-800/60 rounded-xl border border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.emoji}</span>
                          <span className="text-sm text-white/80 font-medium">{item.name}</span>
                        </div>
                        <span className="text-sm font-bold text-electric-400">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home indicator */}
                <div className="bg-dark-850 py-2 flex justify-center">
                  <div className="w-24 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-8 top-20 card-glass px-3 py-2 rounded-xl border border-electric-500/15"
              >
                <p className="text-xs text-white/50">Menú actualizado</p>
                <p className="text-sm font-semibold text-electric-400">En segundos ⚡</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-6 bottom-24 card-glass px-3 py-2 rounded-xl border border-neon-green/15"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-neon-green" />
                  <div>
                    <p className="text-xs text-white/50">Sin papel</p>
                    <p className="text-xs font-semibold text-neon-green">100% digital</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/25">Descubre más</span>
          <ChevronDown className="w-4 h-4 text-white/25 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
