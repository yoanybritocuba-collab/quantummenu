"use client";

import { motion } from "framer-motion";
import { QrCode, Globe, LayoutDashboard, RefreshCw, Smartphone, TrendingUp, Palette, Shield } from "lucide-react";

const services = [
  {
    icon: QrCode,
    iconColor: "text-electric-400",
    iconBg: "bg-electric-500/10 border-electric-500/20",
    title: "Carta Digital con Código QR",
    description:
      "Tu menú siempre actualizado. Los clientes escanean el QR y ven tu carta digital al instante, sin descargas ni apps.",
    benefits: [
      "Actualiza precios en segundos",
      "Sin costes de impresión",
      "Funciona en cualquier móvil",
      "Estadísticas de visualizaciones",
    ],
    badge: "MÁS POPULAR",
    badgeColor: "bg-electric-500/15 text-electric-400 border-electric-500/25",
  },
  {
    icon: Globe,
    iconColor: "text-neon-green",
    iconBg: "bg-neon-green/10 border-neon-green/20",
    title: "Página Web Profesional",
    description:
      "Una web moderna y rápida que representa tu negocio las 24h. Diseño personalizado, SEO incluido y lista para convertir.",
    benefits: [
      "Diseño a medida",
      "Optimizada para Google",
      "Velocidad de carga rápida",
      "Adaptada a móviles",
    ],
    badge: null,
    badgeColor: "",
  },
  {
    icon: LayoutDashboard,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    title: "Panel de Administración",
    description:
      "Gestiona tu carta o web desde un panel sencillo. Sin conocimientos técnicos. Cambios en tiempo real.",
    benefits: [
      "Interfaz intuitiva",
      "Añade o elimina productos",
      "Sube fotos fácilmente",
      "Soporte incluido",
    ],
    badge: null,
    badgeColor: "",
  },
];

const highlights = [
  { icon: RefreshCw, label: "Actualizaciones instantáneas" },
  { icon: Smartphone, label: "100% responsive" },
  { icon: TrendingUp, label: "SEO optimizado" },
  { icon: Palette, label: "Diseño premium" },
  { icon: Shield, label: "Hosting seguro" },
  { icon: Globe, label: "Dominio incluido" },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-500/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium text-electric-400 bg-electric-500/10 border border-electric-500/20 rounded-full">
            Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Todo lo que necesita tu{" "}
            <span className="gradient-text-blue">negocio digital</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Soluciones completas para restaurantes, tiendas y negocios locales que quieren
            destacar y atraer más clientes.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative card-glass rounded-2xl p-6 card-glass-hover shimmer-card"
            >
              {service.badge && (
                <div
                  className={`absolute -top-3 left-6 px-3 py-1 text-xs font-bold rounded-full border ${service.badgeColor}`}
                >
                  {service.badge}
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${service.iconBg}`}
              >
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{service.description}</p>

              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/5">
                <a
                  href="#contacto"
                  className="text-sm font-medium text-electric-400 hover:text-electric-300 transition-colors inline-flex items-center gap-1 group"
                >
                  Solicitar información
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center hover:bg-white/[0.04] transition-colors"
            >
              <item.icon className="w-5 h-5 text-electric-400/70" />
              <span className="text-xs text-white/40 leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
