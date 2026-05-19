"use client"

import { useState } from "react"
import {
  Monitor, Smartphone, Store, Link2, Megaphone, CalendarClock, Check, X, ChefHat,
  FolderTree, Edit2, ShoppingCart, Image, CreditCard, User, Clock, Star, Search,
  BarChart3, Palette, Layout, Phone, Layers, Type, PaintBucket, TrendingUp, Eye,
  MousePointerClick, Calendar, Scissors, Sparkles, Timer, DollarSign, Power,
  Package, ShoppingBag, Globe, Settings, Mail, MapPin, Instagram, MessageCircle,
  Music, ArrowRight, ChevronRight, Zap
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/lib/language-context"
import NextImage from "next/image"

interface WhatWeDoProps {
  setActivePage: (page: string) => void
  scrollToServices: () => void
}

export function WhatWeDo({ setActivePage, scrollToServices }: WhatWeDoProps) {
  const { t } = useLanguage()
  const [activeArea, setActiveArea] = useState<string | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleClick = (areaId: string) => {
    if (activeArea === areaId) {
      setActiveArea(null)
    } else {
      setActiveArea(areaId)
      localStorage.setItem("activeServiceArea", areaId)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const items = [
    { id: "web", icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />, title: t("areas.web.title"), desc: t("areas.web.description"), gradient: "from-red-500/20 to-red-600/10", border: "border-red-500/30" },
    { id: "qr", icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />, title: t("areas.qr.title"), desc: t("areas.qr.description"), gradient: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/30" },
    { id: "catalog", icon: <Store className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />, title: t("areas.catalog.title"), desc: t("areas.catalog.description"), gradient: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30" },
    { id: "linkbio", icon: <Link2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />, title: t("areas.linkbio.title"), desc: t("areas.linkbio.description"), gradient: "from-cyan-500/20 to-cyan-600/10", border: "border-cyan-500/30" },
    { id: "landing", icon: <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />, title: t("areas.landing.title"), desc: t("areas.landing.description"), gradient: "from-amber-500/20 to-amber-600/10", border: "border-amber-500/30" },
    { id: "turns", icon: <CalendarClock className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />, title: t("areas.turns.title"), desc: t("areas.turns.description"), gradient: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/30" },
  ]

  // QR Menu (se mantiene igual)
  const qrMenuItems = [
    { id: 1, nameKey: "menu.ribeye", categoryKey: "categories.main", price: 32, available: true, recommended: true, image: "/demo-ribeye.jpg" },
    { id: 2, nameKey: "menu.trufflePasta", categoryKey: "categories.pasta", price: 24, available: true, recommended: false, image: "/demo-pasta.jpg" },
    { id: 3, nameKey: "menu.margherita", categoryKey: "categories.pizza", price: 18, available: false, recommended: false, image: "/demo-pizza.jpg" },
    { id: 4, nameKey: "menu.salmon", categoryKey: "categories.main", price: 28, available: true, recommended: true, image: "/demo-salmon.jpg" },
    { id: 5, nameKey: "menu.chocolateCake", categoryKey: "categories.dessert", price: 9, available: true, recommended: false, image: "/demo-cake.jpg" },
  ]

  const qrCategories = [
    { id: 1, nameKey: "categories.entrantes", nameEnKey: "categories.entrantesEn", active: true, order: 1 },
    { id: 2, nameKey: "categories.principales", nameEnKey: "categories.principalesEn", active: true, order: 2 },
    { id: 3, nameKey: "categories.postres", nameEnKey: "categories.postresEn", active: false, order: 3 },
    { id: 4, nameKey: "categories.bebidas", nameEnKey: "categories.bebidasEn", active: true, order: 4 },
  ]

  const [qrMenu, setQrMenu] = useState(qrMenuItems)
  const [qrCats, setQrCats] = useState(qrCategories)

  const toggleQrAvailability = (id: number) => {
    setQrMenu(prev => prev.map(item => item.id === id ? { ...item, available: !item.available } : item))
  }
  const toggleQrRecommended = (id: number) => {
    setQrMenu(prev => prev.map(item => item.id === id ? { ...item, recommended: !item.recommended } : item))
  }
  const toggleQrCategory = (id: number) => {
    setQrCats(prev => prev.map(cat => cat.id === id ? { ...cat, active: !cat.active } : cat))
  }

  const renderMonitors = () => {
    if (!activeArea) return null

    switch(activeArea) {
      // ===== DESARROLLO WEB =====
      case "web":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            {/* Monitor 1: Página web realista con imagen local */}
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumWeb</span>
                </div>
                <div className="bg-white rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px]">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 px-3 py-2 flex items-center justify-between">
                    <Globe className="w-4 h-4 text-white" />
                    <div className="flex gap-3 text-white text-[8px] font-semibold">
                      <span>{t("demo.web.home")}</span>
                      <span className="opacity-60">{t("nav.services")}</span>
                      <span className="opacity-60">{t("nav.contact")}</span>
                    </div>
                  </div>
                  {/* Hero con imagen local */}
                  <div className="relative h-32 bg-gradient-to-br from-red-100 to-orange-50 overflow-hidden">
                    <NextImage
                      src="/web-hero.jpg"
                      alt="Website preview"
                      fill
                      className="object-cover opacity-30"
                    />
                    <div className="relative z-10 p-4 text-center h-full flex flex-col justify-center">
                      <h3 className="text-red-800 font-bold text-sm mb-1">TuWeb Profesional</h3>
                      <p className="text-red-600 text-[8px] mb-2">Creamos la web de tus sueños</p>
                      <button className="bg-red-600 text-white text-[8px] px-3 py-1 rounded-full font-bold mx-auto">Contactar</button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-gray-800 font-bold text-[10px] mb-2 flex items-center gap-1"><Layers className="w-3 h-3 text-red-500" /> Servicios</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-red-50 rounded-lg p-2 text-center">
                        <Search className="w-4 h-4 text-red-500 mx-auto mb-1" />
                        <span className="text-[7px] text-gray-700 font-semibold">SEO</span>
                      </div>
                      <div className="bg-red-50 rounded-lg p-2 text-center">
                        <Palette className="w-4 h-4 text-red-500 mx-auto mb-1" />
                        <span className="text-[7px] text-gray-700 font-semibold">Diseño</span>
                      </div>
                      <div className="bg-red-50 rounded-lg p-2 text-center">
                        <Smartphone className="w-4 h-4 text-red-500 mx-auto mb-1" />
                        <span className="text-[7px] text-gray-700 font-semibold">Móvil</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 mx-3 rounded-lg p-3 mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="text-[8px] text-gray-600 italic">"Excelente trabajo, muy profesionales"</p>
                    <p className="text-[7px] text-gray-400 mt-1">- Cliente Satisfecho</p>
                  </div>
                  <div className="bg-red-600 mx-3 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-[10px]">{t("contact.title1")} {t("contact.title2")}</p>
                      <p className="text-red-200 text-[7px]">info@quantummenu.org</p>
                    </div>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Monitor 2: Panel de administración */}
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Admin Panel</span>
                </div>
                <div className="bg-gray-950 rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="p-3 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-center">
                        <Eye className="w-3 h-3 text-red-400 mx-auto mb-1" />
                        <div className="text-red-400 font-bold text-sm">1,234</div>
                        <div className="text-red-300 text-[7px]">Visitas</div>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 text-center">
                        <MousePointerClick className="w-3 h-3 text-green-400 mx-auto mb-1" />
                        <div className="text-green-400 font-bold text-sm">89%</div>
                        <div className="text-green-300 text-[7px]">Conversión</div>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <h4 className="text-white text-[10px] font-semibold mb-2 flex items-center gap-1"><Layout className="w-3 h-3 text-red-400" /> Páginas</h4>
                      {[
                        { name: t("demo.web.home"), active: true },
                        { name: t("nav.services"), active: true },
                        { name: "Blog", active: false },
                        { name: t("demo.web.portfolio"), active: true },
                      ].map((page, i) => (
                        <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-800 last:border-0">
                          <span className="text-gray-300 text-[9px]">{page.name}</span>
                          <span className={`w-2 h-2 rounded-full ${page.active ? "bg-green-500" : "bg-red-500"}`} />
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <h4 className="text-white text-[10px] font-semibold mb-2 flex items-center gap-1"><PaintBucket className="w-3 h-3 text-red-400" /> Personalización</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 text-[8px]">Color:</span>
                        <div className="w-4 h-4 rounded bg-red-600" />
                        <span className="text-gray-500 text-[8px]">#FF0000</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-[8px]">Fuente:</span>
                        <Type className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-500 text-[8px]">Inter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      // ===== QR MENU (SE MANTIENE IGUAL) =====
      case "qr":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-purple-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-purple-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                </div>
                <div className="bg-black rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px]">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-purple-500/20">
                    <div className="flex items-center gap-1.5"><Edit2 className="w-3.5 h-3.5 text-purple-400" /><span className="text-white font-semibold text-[10px] sm:text-xs">{t("demo.productos")}</span></div>
                    <p className="text-[8px] text-zinc-500 mt-0.5 text-center">{t("demo.productosHint")}</p>
                  </div>
                  <div className="p-2 sm:p-3 space-y-2 h-[350px] sm:h-[400px] md:h-[440px] overflow-y-auto custom-scrollbar">
                    {qrMenu.map((item) => (
                      <div key={item.id} className="bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl overflow-hidden border border-zinc-800">
                        <div className="flex gap-2 p-2">
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800"><NextImage src={item.image} alt={item.nameKey} fill className="object-cover" /></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-1">
                              <div>
                                <div className="flex items-center gap-1"><h4 className="text-white font-semibold text-[10px] sm:text-xs">{t(item.nameKey)}</h4>{item.recommended && <ChefHat className="w-3 h-3 text-yellow-400" />}</div>
                                <p className="text-zinc-500 text-[8px]">{t(item.categoryKey)}</p>
                              </div>
                              <span className="text-purple-400 font-bold text-[10px] sm:text-xs">€{item.price}</span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <button onClick={() => toggleQrAvailability(item.id)} className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-medium ${item.available ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>{item.available ? <Check className="w-2 h-2" /> : <X className="w-2 h-2" />}{item.available ? t("admin.available") : t("admin.soldOut")}</button>
                              <button onClick={() => toggleQrRecommended(item.id)} className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-medium ${item.recommended ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : "bg-zinc-800 text-zinc-500 border border-zinc-700"}`}><ChefHat className="w-2 h-2" />{item.recommended ? t("admin.suggested") : t("admin.highlight")}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-purple-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-purple-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                </div>
                <div className="bg-black rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px]">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-purple-500/20">
                    <div className="flex items-center gap-1.5"><FolderTree className="w-3.5 h-3.5 text-purple-400" /><span className="text-white font-semibold text-[10px] sm:text-xs">{t("demo.categorias")}</span></div>
                    <p className="text-[8px] text-zinc-500 mt-0.5 text-center">{t("demo.categoriasHint")}</p>
                  </div>
                  <div className="p-2 sm:p-3 space-y-2 h-[350px] sm:h-[400px] md:h-[440px] overflow-y-auto custom-scrollbar">
                    {qrCats.map((cat) => (
                      <div key={cat.id} className="bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl overflow-hidden border border-zinc-800">
                        <div className="flex items-center justify-between p-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2"><FolderTree className="w-4 h-4 text-purple-400" /><h4 className="text-white font-semibold text-sm">{t(cat.nameKey)}</h4></div>
                            <p className="text-zinc-500 text-xs mt-0.5">{t(cat.nameEnKey)}</p>
                            <p className="text-zinc-600 text-[10px] mt-1">{t("demo.order")}: {cat.order}</p>
                          </div>
                          <button onClick={() => toggleQrCategory(cat.id)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${cat.active ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>{cat.active ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}{cat.active ? t("admin.active") : t("admin.inactive")}</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      // ===== CATÁLOGO DIGITAL (CON IMÁGENES LOCALES) =====
      case "catalog":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            {/* Monitor 1: Tienda con productos reales */}
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-orange-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-orange-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Tienda Online</span>
                </div>
                <div className="bg-white rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2">
                    <div className="bg-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                      <Search className="w-3 h-3 text-white" />
                      <span className="text-white/70 text-[8px]">Buscar productos...</span>
                    </div>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {[
                      { name: "Zapatillas", price: "89.99", img: "/catalog-shoes.jpg" },
                      { name: "Camiseta", price: "45.00", img: "/catalog-shirt.jpg" },
                      { name: "Mochila", price: "65.50", img: "/catalog-bag.jpg" },
                      { name: "Reloj", price: "120.00", img: "/catalog-watch.jpg" },
                    ].map((product, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                        <div className="h-20 bg-gray-200 relative overflow-hidden">
                          <NextImage src={product.img} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="p-2">
                          <h5 className="text-[8px] font-semibold text-gray-800">{product.name}</h5>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-orange-600 font-bold text-[10px]">€{product.price}</span>
                            <button className="bg-orange-500 text-white rounded-full p-1">
                              <ShoppingCart className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Monitor 2: Carrito con miniaturas locales */}
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-orange-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-orange-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Pedidos</span>
                </div>
                <div className="bg-white rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2">
                    <h4 className="text-white font-bold text-[10px] flex items-center gap-1"><ShoppingCart className="w-3 h-3" /> Carrito (2)</h4>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-200 relative">
                        <NextImage src="/catalog-shoes.jpg" alt="Zapatillas" fill className="object-cover" />
                      </div>
                      <div className="flex-1"><p className="text-[9px] font-semibold text-gray-800">Zapatillas</p><p className="text-[8px] text-gray-500">x1</p></div>
                      <span className="text-orange-600 font-bold text-[10px]">€89.99</span>
                    </div>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-200 relative">
                        <NextImage src="/catalog-shirt.jpg" alt="Camiseta" fill className="object-cover" />
                      </div>
                      <div className="flex-1"><p className="text-[9px] font-semibold text-gray-800">Camiseta</p><p className="text-[8px] text-gray-500">x2</p></div>
                      <span className="text-orange-600 font-bold text-[10px]">€90.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-800 font-bold text-[10px]">Total</span>
                      <span className="text-orange-600 font-bold text-sm">€179.99</span>
                    </div>
                    <button className="w-full bg-orange-500 text-white rounded-full py-2 text-[10px] font-bold flex items-center justify-center gap-1">
                      <CreditCard className="w-3 h-3" /> Pagar Ahora
                    </button>
                  </div>
                  <div className="px-3">
                    <h4 className="text-gray-800 font-bold text-[10px] mb-2 flex items-center gap-1"><Package className="w-3 h-3 text-orange-500" /> Pedidos Recientes</h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center bg-green-50 rounded-lg p-2">
                        <span className="text-[8px] font-semibold text-gray-700">#1234</span>
                        <span className="text-[7px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">✓ Completado</span>
                      </div>
                      <div className="flex justify-between items-center bg-yellow-50 rounded-lg p-2">
                        <span className="text-[8px] font-semibold text-gray-700">#1235</span>
                        <span className="text-[7px] text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded-full">⏳ Pendiente</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-50 rounded-lg p-2">
                        <span className="text-[8px] font-semibold text-gray-700">#1233</span>
                        <span className="text-[7px] text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded-full">🚚 Enviado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      // ===== LINK EN BIO =====
      case "linkbio":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-cyan-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-cyan-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Link en Bio</span>
                </div>
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-0.5 mb-3">
                      <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative">
                        <NextImage src="/avatar-profile.jpg" alt="Profile" fill className="object-cover" />
                      </div>
                    </div>
                    <h4 className="text-white font-bold text-sm">@TuNegocio</h4>
                    <p className="text-gray-400 text-[8px] mb-4">Digitaliza tu mundo 🌍</p>
                    <div className="w-full space-y-2">
                      {[
                        { icon: <Instagram className="w-3.5 h-3.5" />, name: "Instagram", color: "bg-gradient-to-r from-pink-500 to-purple-500", clicks: 234 },
                        { icon: <MessageCircle className="w-3.5 h-3.5" />, name: "WhatsApp", color: "bg-gradient-to-r from-green-500 to-emerald-500", clicks: 189 },
                        { icon: <ShoppingBag className="w-3.5 h-3.5" />, name: "Tienda Online", color: "bg-gradient-to-r from-blue-500 to-indigo-500", clicks: 145 },
                        { icon: <Music className="w-3.5 h-3.5" />, name: "TikTok", color: "bg-gradient-to-r from-gray-700 to-gray-900", clicks: 98 },
                      ].map((link, i) => (
                        <div key={i} className={`${link.color} rounded-xl p-2.5 flex items-center justify-between cursor-pointer hover:scale-105 transition-transform`}>
                          <div className="flex items-center gap-2">
                            {link.icon}
                            <span className="text-white font-semibold text-[9px]">{link.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-white/70 text-[7px]">{link.clicks}</span>
                            <ArrowRight className="w-3 h-3 text-white/70" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-cyan-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-cyan-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Analíticas</span>
                </div>
                <div className="bg-gray-950 rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="p-4 space-y-3">
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                      <Eye className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                      <div className="text-cyan-400 text-3xl font-bold">666</div>
                      <div className="text-cyan-300 text-[9px]">Visitas totales</div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                      <TrendingUp className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                      <div className="text-blue-400 text-3xl font-bold">89%</div>
                      <div className="text-blue-300 text-[9px]">Tasa de click</div>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-3">
                      <h4 className="text-white text-[10px] font-semibold mb-2 flex items-center gap-1"><BarChart3 className="w-3.5 h-3.5 text-cyan-400" /> Top Enlaces</h4>
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <span className="text-pink-400 font-bold text-[9px]">🥇</span>
                            <span className="text-gray-300 text-[8px]">Instagram</span>
                          </div>
                          <span className="text-pink-400 font-bold text-[10px]">234</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <span className="text-green-400 font-bold text-[9px]">🥈</span>
                            <span className="text-gray-300 text-[8px]">WhatsApp</span>
                          </div>
                          <span className="text-green-400 font-bold text-[10px]">189</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <span className="text-blue-400 font-bold text-[9px]">🥉</span>
                            <span className="text-gray-300 text-[8px]">Tienda</span>
                          </div>
                          <span className="text-blue-400 font-bold text-[10px]">145</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      // ===== LANDING PAGE =====
      case "landing":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-amber-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-amber-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Landing Page</span>
                </div>
                <div className="bg-white rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-500 p-4 text-center text-white">
                    <Megaphone className="w-6 h-6 mx-auto mb-2" />
                    <h3 className="font-bold text-sm mb-1">Impulsa tu Negocio</h3>
                    <p className="text-white/80 text-[8px] mb-2">La mejor solución digital para ti</p>
                    <button className="bg-white text-amber-600 text-[9px] px-4 py-1.5 rounded-full font-bold">Empieza Gratis</button>
                  </div>
                  <div className="p-3">
                    <h4 className="text-gray-800 font-bold text-[10px] mb-2">✨ Beneficios</h4>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[8px] text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center"><Sparkles className="w-3 h-3 text-amber-600" /></div>
                        Resultados rápidos
                      </div>
                      <div className="flex items-center gap-2 text-[8px] text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center"><Settings className="w-3 h-3 text-amber-600" /></div>
                        Fácil de configurar
                      </div>
                      <div className="flex items-center gap-2 text-[8px] text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center"><Smartphone className="w-3 h-3 text-amber-600" /></div>
                        100% responsive
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 mx-3 rounded-lg p-2 mb-2">
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />))}
                    </div>
                    <p className="text-[7px] text-gray-600 italic">"Increíble, duplicamos clientes"</p>
                  </div>
                  <div className="px-3 pb-3">
                    <h4 className="text-gray-800 font-bold text-[10px] mb-2">💰 Planes</h4>
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="bg-gray-100 rounded-lg p-2 text-center"><span className="text-[8px] font-bold text-gray-700">Básico</span><div className="text-amber-600 font-bold text-xs">€9</div></div>
                      <div className="bg-amber-100 rounded-lg p-2 text-center border-2 border-amber-500"><span className="text-[8px] font-bold text-amber-700">Pro</span><div className="text-amber-600 font-bold text-xs">€29</div></div>
                      <div className="bg-gray-100 rounded-lg p-2 text-center"><span className="text-[8px] font-bold text-gray-700">Premium</span><div className="text-amber-600 font-bold text-xs">€99</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-amber-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-amber-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Editor</span>
                </div>
                <div className="bg-gray-950 rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="p-3 space-y-3">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <h4 className="text-white text-[10px] font-semibold mb-2 flex items-center gap-1"><Layers className="w-3 h-3 text-amber-400" /> Secciones</h4>
                      {[
                        { name: "Hero", active: true, color: "bg-amber-400" },
                        { name: "Beneficios", active: true, color: "bg-yellow-400" },
                        { name: "Testimonios", active: false, color: "bg-orange-400" },
                        { name: "Precios", active: true, color: "bg-green-400" },
                        { name: "CTA Final", active: true, color: "bg-blue-400" },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-800 last:border-0">
                          <div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${s.color}`} /><span className="text-gray-300 text-[9px]">{s.name}</span></div>
                          <Power className={`w-3 h-3 ${s.active ? "text-green-400" : "text-red-400"}`} />
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <h4 className="text-white text-[10px] font-semibold mb-2 flex items-center gap-1"><Palette className="w-3 h-3 text-amber-400" /> Colores</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2"><span className="text-gray-400 text-[8px] w-16">Primario:</span><div className="w-5 h-5 rounded bg-amber-500" /><span className="text-gray-500 text-[8px]">#FF4500</span></div>
                        <div className="flex items-center gap-2"><span className="text-gray-400 text-[8px] w-16">Fondo:</span><div className="w-5 h-5 rounded bg-gray-900 border border-gray-700" /><span className="text-gray-500 text-[8px]">#1a1a2e</span></div>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <h4 className="text-white text-[10px] font-semibold mb-2 flex items-center gap-1"><Type className="w-3 h-3 text-amber-400" /> Texto Hero</h4>
                      <input className="w-full bg-gray-800 text-white text-[9px] px-2 py-1.5 rounded-lg border border-gray-700 mb-2" defaultValue="Impulsa tu Negocio" readOnly />
                      <button className="w-full bg-amber-500 text-white text-[9px] py-1.5 rounded-lg font-bold">Guardar Cambios</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      // ===== TURNOS/CITAS =====
      case "turns":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-emerald-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-emerald-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Turnos</span>
                </div>
                <div className="bg-white rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      <span className="font-bold text-xs">Enero 2024</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {['Lu','Ma','Mi','Ju','Vi','Sa','Do'].map(d => (<span key={d} className="text-[7px] font-semibold opacity-80">{d}</span>))}
                      {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                        <span key={day} className={`text-[8px] py-0.5 rounded-full ${day === 15 ? "bg-white text-emerald-600 font-bold" : "hover:bg-white/20"}`}>{day}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-gray-800 font-bold text-[10px] mb-2 flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-emerald-500" /> Citas - 15 Enero</h4>
                    <div className="space-y-1.5">
                      {[
                        { time: "10:00", client: "María García", service: "Corte de pelo", status: "confirmed" },
                        { time: "11:30", client: "Juan Pérez", service: "Tinte", status: "pending" },
                        { time: "13:00", client: "Ana López", service: "Peinado", status: "confirmed" },
                        { time: "14:30", client: "Carlos Ruiz", service: "Barba", status: "cancelled" },
                      ].map((app, i) => (
                        <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${
                          app.status === "confirmed" ? "bg-green-50 border border-green-200" :
                          app.status === "pending" ? "bg-yellow-50 border border-yellow-200" :
                          "bg-red-50 border border-red-200"
                        }`}>
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0"><User className="w-4 h-4 text-emerald-600" /></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between"><span className="text-[9px] font-semibold text-gray-800 truncate">{app.client}</span><span className="text-[7px] text-emerald-600 font-mono font-bold"><Clock className="w-2 h-2 inline" /> {app.time}</span></div>
                            <p className="text-[7px] text-gray-500 truncate">{app.service}</p>
                          </div>
                          <span className={`text-[7px] px-1.5 py-0.5 rounded-full ${
                            app.status === "confirmed" ? "bg-green-100 text-green-600" :
                            app.status === "pending" ? "bg-yellow-100 text-yellow-600" :
                            "bg-red-100 text-red-600"
                          }`}>{app.status === "confirmed" ? "✓" : app.status === "pending" ? "⏳" : "✕"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-60 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border border-emerald-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 rounded-full z-10 border border-emerald-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">Servicios</span>
                </div>
                <div className="bg-gray-950 rounded-[2rem] overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] pt-10 sm:pt-12">
                  <div className="p-3 space-y-3">
                    <h4 className="text-white text-[10px] font-semibold flex items-center gap-1"><Scissors className="w-3.5 h-3.5 text-emerald-400" /> Lista de Servicios</h4>
                    {[
                      { name: "Corte de pelo", time: "30 min", price: "15", active: true, icon: <Scissors className="w-4 h-4" /> },
                      { name: "Tinte", time: "1h 30min", price: "45", active: true, icon: <Sparkles className="w-4 h-4" /> },
                      { name: "Peinado", time: "45 min", price: "25", active: true, icon: <User className="w-4 h-4" /> },
                      { name: "Barba", time: "20 min", price: "10", active: false, icon: <User className="w-4 h-4" /> },
                    ].map((service, i) => (
                      <div key={i} className={`bg-gray-900 rounded-xl p-3 border ${service.active ? "border-emerald-500/30" : "border-red-500/30 opacity-60"}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${service.active ? "bg-emerald-500/20" : "bg-red-500/20"}`}>
                              <div className={service.active ? "text-emerald-400" : "text-red-400"}>{service.icon}</div>
                            </div>
                            <div>
                              <h5 className="text-white font-semibold text-[10px]">{service.name}</h5>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-emerald-400 text-[9px] flex items-center gap-0.5"><Timer className="w-2.5 h-2.5" /> {service.time}</span>
                                <span className="text-emerald-400 text-[9px] flex items-center gap-0.5"><DollarSign className="w-2.5 h-2.5" /> €{service.price}</span>
                              </div>
                            </div>
                          </div>
                          <Power className={`w-4 h-4 ${service.active ? "text-green-400" : "text-red-400"}`} />
                        </div>
                      </div>
                    ))}
                    <div className="bg-gray-900 rounded-xl p-3">
                      <h5 className="text-white text-[10px] font-semibold mb-2 flex items-center gap-1"><Clock className="w-3 h-3 text-emerald-400" /> Horario</h5>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[9px]"><span className="text-gray-400">Lun - Vie</span><span className="text-emerald-400 font-semibold">9:00 - 20:00</span></div>
                        <div className="flex justify-between text-[9px]"><span className="text-gray-400">Sábado</span><span className="text-emerald-400 font-semibold">10:00 - 14:00</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-4">
            <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("whatWeDo.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">{t("whatWeDo.title1")}</span><br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{t("whatWeDo.title2")}</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mt-3">{t("whatWeDo.subtitle")}</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {items.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className={`group relative cursor-pointer transition-all duration-300 ${activeArea === item.id ? "scale-105 z-10" : "hover:scale-102"}`} 
              onClick={() => handleClick(item.id)}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur-xl transition-all duration-500 ${activeArea === item.id ? "opacity-100 from-green-500/40 to-emerald-500/40" : "opacity-0 group-hover:opacity-100 from-green-500/30 to-emerald-500/30"}`} />
              <div className={`relative h-full bg-gradient-to-br from-zinc-900/90 to-black rounded-2xl p-4 sm:p-6 border transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center ${activeArea === item.id ? `${item.border} shadow-lg shadow-green-500/10 bg-zinc-800/90` : "border-zinc-800 hover:border-zinc-600"}`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 shadow-lg ${activeArea === item.id ? "scale-110 ring-2 ring-green-500/50" : "group-hover:scale-110"}`}>
                  {item.icon}
                </div>
                <h3 className={`text-sm sm:text-base font-bold mb-1 sm:mb-2 transition-colors ${activeArea === item.id ? "text-green-400" : "text-white group-hover:text-white"}`}>{item.title}</h3>
                <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent transition-opacity duration-300 ${activeArea === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeArea && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden mt-10"
            >
              {renderMonitors()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #22c55e, #10b981); border-radius: 10px; }
      `}</style>
    </section>
  )
}