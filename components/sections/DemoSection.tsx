"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Eye, QrCode, Save, CheckCircle } from "lucide-react";

const initialItems = [
  { id: 1, name: "Croquetas caseras", price: "8.50", category: "Entrantes", visible: true },
  { id: 2, name: "Ensalada templada", price: "10.00", category: "Entrantes", visible: true },
  { id: 3, name: "Solomillo a la brasa", price: "22.00", category: "Principales", visible: true },
  { id: 4, name: "Tarta de la abuela", price: "6.50", category: "Postres", visible: false },
];

export default function DemoSection() {
  const [items, setItems] = useState(initialItems);
  const [saved, setSaved] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingPrice, setEditingPrice] = useState("");

  const toggleVisibility = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, visible: !item.visible } : item))
    );
  };

  const startEdit = (item: typeof items[0]) => {
    setEditingId(item.id);
    setEditingPrice(item.price);
  };

  const savePrice = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, price: editingPrice } : item))
    );
    setEditingId(null);
  };

  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric-500/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium text-electric-400 bg-electric-500/10 border border-electric-500/20 rounded-full">
            Demo interactiva
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Gestión{" "}
            <span className="gradient-text-blue">sin complicaciones</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Así de sencillo es administrar tu carta digital. Pruébalo tú mismo — es real e interactivo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Admin Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-glass rounded-2xl overflow-hidden border border-white/8">
              {/* Panel header */}
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Panel de Administración</p>
                  <h3 className="text-sm font-semibold text-white">La Terraza — Carta Digital</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-xs text-white/40">En vivo</span>
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-px bg-white/5">
                {[
                  { label: "Platos activos", value: items.filter((i) => i.visible).length.toString() },
                  { label: "Visitas hoy", value: "247" },
                  { label: "QR escaneos", value: "89" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-dark-900/50 px-4 py-3 text-center">
                    <p className="text-lg font-bold text-electric-400">{stat.value}</p>
                    <p className="text-xs text-white/35">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Items list */}
              <div className="p-4 space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                      item.visible
                        ? "bg-white/[0.02] border-white/5"
                        : "bg-white/[0.01] border-white/[0.03] opacity-50"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{item.name}</p>
                      <p className="text-xs text-white/35">{item.category}</p>
                    </div>

                    {editingId === item.id ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          value={editingPrice}
                          onChange={(e) => setEditingPrice(e.target.value)}
                          className="w-16 text-sm text-center bg-dark-800 border border-electric-500/30 rounded-lg px-2 py-1 text-white focus:outline-none focus:border-electric-500/60"
                          autoFocus
                        />
                        <span className="text-xs text-white/30">€</span>
                        <button
                          onClick={() => savePrice(item.id)}
                          className="p-1.5 text-electric-400 hover:bg-electric-500/10 rounded-lg transition-colors"
                        >
                          <Save className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-sm font-semibold text-electric-400 w-14 text-right">
                        {item.price}€
                      </span>
                    )}

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleVisibility(item.id)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          item.visible
                            ? "text-white/40 hover:text-white/70 hover:bg-white/5"
                            : "text-white/20 hover:text-white/40 hover:bg-white/5"
                        }`}
                        title={item.visible ? "Ocultar" : "Mostrar"}
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => startEdit(item)}
                        className="p-1.5 text-white/30 hover:text-electric-400 hover:bg-electric-500/10 rounded-lg transition-colors"
                        title="Editar precio"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-1.5 text-white/30 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add item button */}
                <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-white/10 text-sm text-white/30 hover:text-white/60 hover:border-white/20 hover:bg-white/[0.02] transition-all">
                  <Plus className="w-4 h-4" />
                  Añadir plato
                </button>
              </div>

              {/* Save button */}
              <div className="px-4 pb-4">
                <button
                  onClick={handleSave}
                  className="w-full py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: saved
                      ? "linear-gradient(135deg, rgba(57,255,20,0.15), rgba(57,255,20,0.08))"
                      : "linear-gradient(135deg, rgba(30,200,255,0.2), rgba(30,200,255,0.08))",
                    border: saved ? "1px solid rgba(57,255,20,0.3)" : "1px solid rgba(30,200,255,0.25)",
                    color: saved ? "#39ff14" : "#1ec8ff",
                  }}
                >
                  {saved ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Cambios publicados en la carta
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Publicar cambios
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Tú controlas tu carta, nosotros lo hacemos fácil
              </h3>
              <p className="text-white/50 leading-relaxed">
                Sin llamar a ningún técnico. Sin esperar días. Desde el panel de administración
                puedes actualizar tu carta digital en segundos, y los cambios se reflejan{" "}
                <strong className="text-white/80">instantáneamente</strong> cuando tus clientes
                escanean el QR.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Escanea el QR en tu mesa",
                  desc: "Tus clientes usan la cámara del móvil. Sin apps. Sin descargas.",
                },
                {
                  step: "02",
                  title: "Ven tu carta actualizada",
                  desc: "La carta se carga al instante con tus últimos cambios y precios.",
                },
                {
                  step: "03",
                  title: "Tú actualizas desde cualquier lugar",
                  desc: "¿Subiste el precio del vino? ¿Hay un plato agotado? Cámbialo en 10 segundos desde el móvil.",
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-electric-400">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-sm text-white/45">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <QrCode className="w-10 h-10 text-electric-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">Tu QR personalizado incluido</p>
                <p className="text-xs text-white/40 mt-0.5">
                  Con el logo de tu negocio, listo para imprimir o usar digital
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
