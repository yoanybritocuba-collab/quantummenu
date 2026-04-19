"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle, Loader2, Mail, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-900/20 via-dark-800 to-electric-900/20" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-electric-500/10 rounded-full blur-[80px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium text-electric-400 bg-electric-500/10 border border-electric-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
              Plazas disponibles este mes
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              ¿Listo para dar el{" "}
              <span className="gradient-text text-glow-blue">siguiente paso?</span>
            </h2>

            <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
              Empieza hoy. Presupuesto sin compromiso en menos de 24 horas. Tu negocio merece
              una presencia digital que lo represente como se merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-electric-500 text-dark-950 rounded-xl hover:bg-electric-400 transition-all duration-200 btn-primary-glow"
              >
                Empieza ahora
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/34600000000?text=Hola,%20me%20interesa%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/8 border border-white/12 rounded-xl hover:bg-white/12 hover:border-white/20 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-neon-green" />
                WhatsApp directo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact form section */}
      <section id="contacto" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium text-white/50 bg-white/5 border border-white/10 rounded-full">
                  Contacto
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Hablemos de tu{" "}
                  <span className="gradient-text-blue">proyecto</span>
                </h2>
                <p className="text-white/50 leading-relaxed">
                  Cuéntanos qué necesitas y en menos de 24 horas te enviamos un presupuesto
                  personalizado sin ningún compromiso.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/35">WhatsApp</p>
                    <a
                      href="https://wa.me/34600000000"
                      className="text-sm font-medium text-white hover:text-electric-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +34 600 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/35">Email</p>
                    <a
                      href="mailto:hola@tunegociodigital.com"
                      className="text-sm font-medium text-white hover:text-electric-400 transition-colors"
                    >
                      hola@tunegociodigital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/35">Respuesta</p>
                    <p className="text-sm font-medium text-white">En menos de 24 horas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {status === "success" ? (
                <div className="card-glass rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje recibido!</h3>
                  <p className="text-white/50">
                    Muchas gracias. Te contaré en menos de 24 horas con un presupuesto personalizado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-electric-500/40 focus:bg-electric-500/[0.03] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-electric-500/40 focus:bg-electric-500/[0.03] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-electric-500/40 focus:bg-electric-500/[0.03] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">¿Qué necesitas? *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded-xl text-sm text-white focus:outline-none focus:border-electric-500/40 transition-all appearance-none cursor-pointer"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" className="bg-dark-900">Selecciona...</option>
                        <option value="carta-qr" className="bg-dark-900">Carta Digital con QR</option>
                        <option value="web" className="bg-dark-900">Página Web Profesional</option>
                        <option value="ambos" className="bg-dark-900">Carta QR + Web</option>
                        <option value="otro" className="bg-dark-900">Otro / Consulta</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">
                      Cuéntanos sobre tu negocio
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="¿Qué tipo de negocio tienes? ¿Qué necesitas? Cualquier detalle nos ayuda a preparar un presupuesto más preciso."
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-electric-500/40 focus:bg-electric-500/[0.03] transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-electric-500 text-dark-950 rounded-xl hover:bg-electric-400 transition-all disabled:opacity-70 btn-primary-glow"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Solicitar presupuesto gratis
                        </>
                      )}
                    </button>

                    <a
                      href="https://wa.me/34600000000?text=Hola,%20quiero%20información%20sobre%20vuestros%20servicios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-neon-green" />
                      WhatsApp
                    </a>
                  </div>

                  <p className="text-xs text-white/25 text-center">
                    Sin compromiso · Respuesta en &lt;24h · Presupuesto gratuito
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
