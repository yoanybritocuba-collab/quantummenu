"use client";

import { motion } from "framer-motion";
import { ExternalLink, QrCode, Globe } from "lucide-react";

const projects = [
  {
    type: "carta-digital",
    title: "Restaurante La Barca",
    description: "Carta digital completa con QR personalizado para restaurante de mariscos en Barcelona.",
    result: "+35% más pedidos desde la carta",
    tags: ["Carta QR", "Panel Admin", "Foto-menú"],
    icon: QrCode,
    iconColor: "text-electric-400",
    gradient: "from-electric-900/30 to-dark-800",
    accentColor: "text-electric-400",
    metrics: [
      { label: "Platos en carta", value: "48" },
      { label: "Idiomas", value: "3" },
    ],
  },
  {
    type: "web",
    title: "Clínica DentalPro",
    description: "Web profesional para clínica dental con citas online, galería de casos y SEO local optimizado.",
    result: "Posición #1 en Google local",
    tags: ["Web profesional", "SEO", "Citas online"],
    icon: Globe,
    iconColor: "text-neon-green",
    gradient: "from-green-900/20 to-dark-800",
    accentColor: "text-neon-green",
    metrics: [
      { label: "Tráfico +", value: "180%" },
      { label: "Nuevos pacientes", value: "+22/mes" },
    ],
  },
  {
    type: "carta-digital",
    title: "Tapas El Maestro",
    description: "Carta digital con categorías, alérgenos y precios dinámicos. Actualización diaria del menú del día.",
    result: "0€ en impresión al mes",
    tags: ["Carta QR", "Alérgenos", "Menú del día"],
    icon: QrCode,
    iconColor: "text-electric-400",
    gradient: "from-electric-900/20 to-dark-800",
    accentColor: "text-electric-400",
    metrics: [
      { label: "Ahorro impresión", value: "120€/mes" },
      { label: "Actualización", value: "<1 min" },
    ],
  },
  {
    type: "web",
    title: "Inmobiliaria Keystone",
    description: "Portal inmobiliario con búsqueda avanzada de propiedades, formularios de contacto y dashboard.",
    result: "+60% leads cualificados",
    tags: ["Portal web", "Leads", "Dashboard"],
    icon: Globe,
    iconColor: "text-purple-400",
    gradient: "from-purple-900/20 to-dark-800",
    accentColor: "text-purple-400",
    metrics: [
      { label: "Propiedades", value: "200+" },
      { label: "Leads/mes", value: "+45" },
    ],
  },
  {
    type: "carta-digital",
    title: "Café Almendra",
    description: "Carta digital para cafetería con horarios, especialidades de temporada y botón de WhatsApp.",
    result: "Clientes más satisfechos",
    tags: ["Carta QR", "WhatsApp", "Temporada"],
    icon: QrCode,
    iconColor: "text-amber-400",
    gradient: "from-amber-900/15 to-dark-800",
    accentColor: "text-amber-400",
    metrics: [
      { label: "Visitas carta", value: "3.2K/mes" },
      { label: "Valoración", value: "4.9 ★" },
    ],
  },
  {
    type: "web",
    title: "Peluquería Studio Mía",
    description: "Web con sistema de reservas, galería de trabajos y tienda online de productos capilares.",
    result: "Reservas 24/7 sin teléfono",
    tags: ["Reservas online", "Galería", "Tienda"],
    icon: Globe,
    iconColor: "text-pink-400",
    gradient: "from-pink-900/15 to-dark-800",
    accentColor: "text-pink-400",
    metrics: [
      { label: "Reservas online", value: "67%" },
      { label: "Tiempo ahorro", value: "2h/día" },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/3 rounded-full blur-[120px]" />
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
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proyectos que{" "}
            <span className="gradient-text">generan resultados</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Casos reales de negocios que han transformado su presencia digital
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative card-glass rounded-2xl overflow-hidden card-glass-hover shimmer-card cursor-pointer"
            >
              {/* Visual header */}
              <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <project.icon className={`w-12 h-12 ${project.iconColor} opacity-20 absolute right-6 bottom-4 scale-[3] blur-sm`} />
                <div className="relative text-center p-6">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <project.icon className={`w-4 h-4 ${project.iconColor}`} />
                    <span className={`text-xs font-medium ${project.iconColor}`}>
                      {project.type === "carta-digital" ? "Carta Digital QR" : "Página Web"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>

                {/* Hover reveal */}
                <div className="absolute inset-0 bg-dark-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-sm text-white font-medium">
                    <ExternalLink className="w-4 h-4" />
                    Ver proyecto
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

                {/* Result highlight */}
                <div className={`flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5`}>
                  <span className="text-lg">📈</span>
                  <span className={`text-sm font-semibold ${project.accentColor}`}>{project.result}</span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-white/[0.02] rounded-lg p-2.5">
                      <p className={`text-base font-bold ${project.accentColor}`}>{m.value}</p>
                      <p className="text-xs text-white/35">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-white/40 bg-white/[0.03] border border-white/8 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
          >
            ¿Tu negocio podría ser el siguiente?
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
