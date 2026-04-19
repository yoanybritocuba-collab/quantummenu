"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramón García",
    role: "Dueño",
    business: "Restaurante La Barca",
    location: "Barcelona",
    avatar: "RG",
    avatarColor: "#1ec8ff",
    rating: 5,
    text: "Antes tardaba días en imprimir las cartas cada vez que cambiaba un precio. Ahora lo hago en 30 segundos desde el móvil. El equipo nos ayudó con todo el proceso y el resultado quedó precioso.",
  },
  {
    name: "Cristina Llorente",
    role: "Directora",
    business: "Clínica DentalPro",
    location: "Madrid",
    avatar: "CL",
    avatarColor: "#39ff14",
    rating: 5,
    text: "La web que nos hicieron superó todas las expectativas. En tres meses ya estábamos en primera página de Google para 'dentista Madrid' y recibíamos reservas online sin parar.",
  },
  {
    name: "Héctor Muñoz",
    role: "Propietario",
    business: "Tapas El Maestro",
    location: "Valencia",
    avatar: "HM",
    avatarColor: "#a78bfa",
    rating: 5,
    text: "La carta digital con QR ha modernizado completamente nuestro bar. Los clientes la usan sin problemas y nosotros ya no gastamos en imprimir menús. Atención al cliente de 10.",
  },
  {
    name: "María José Fernández",
    role: "Gerente",
    business: "Inmobiliaria Keystone",
    location: "Sevilla",
    avatar: "MJ",
    avatarColor: "#fb7185",
    rating: 5,
    text: "Necesitaba una web moderna que generara leads reales. El resultado fue espectacular — el diseño es profesional y los clientes nos dicen que la web les transmite mucha confianza.",
  },
  {
    name: "Laura Abad",
    role: "Fundadora",
    business: "Café Almendra",
    location: "Bilbao",
    avatar: "LA",
    avatarColor: "#fb923c",
    rating: 5,
    text: "Gracias a la carta digital mis clientes pueden ver exactamente lo que ofrezco ese día, con fotos y todo. El QR quedó precioso con mi logo. Sin duda lo recomiendo a cualquier cafetería.",
  },
  {
    name: "Javier Santos",
    role: "Responsable",
    business: "Studio Mía",
    location: "Zaragoza",
    avatar: "JS",
    avatarColor: "#e879f9",
    rating: 5,
    text: "La web con reservas online ha cambiado mi negocio. Antes el teléfono no paraba. Ahora las reservas llegan solas, incluso a las 2 de la mañana. ¡Impresionante!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-electric-500/5 rounded-full blur-[100px]" />
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
            Testimonios
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Lo que dicen{" "}
            <span className="gradient-text-blue">nuestros clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-white/40">4.9/5 de media · +40 clientes</span>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-glass rounded-2xl p-5 card-glass-hover shimmer-card relative"
            >
              <Quote className="w-6 h-6 text-electric-500/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-white/60 leading-relaxed mb-5 italic">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    backgroundColor: t.avatarColor + "18",
                    border: `1px solid ${t.avatarColor}30`,
                    color: t.avatarColor,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/35">
                    {t.role} · {t.business} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
