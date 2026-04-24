"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Scan, Star, UtensilsCrossed, Cpu, Zap, Edit2, Check, X, TrendingUp, Save, FolderTree, Settings, Clock, AlertCircle, Key, Globe, Shield, Info, ChefHat } from "lucide-react"
import NextImage from "next/image"
import { useState, useEffect, useRef } from "react"
import QRCode from 'qrcode'
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()
  const [scanned, setScanned] = useState(false)
  const [scanLine, setScanLine] = useState(0)
  const [scanDirection, setScanDirection] = useState(1)
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number}>>([])
  const [qrImageUrl, setQrImageUrl] = useState<string>("")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeDemo, setActiveDemo] = useState<"productos" | "categorias" | "config">("productos")
  const [selectedCategory, setSelectedCategory] = useState("todos")
  
  const [adminMenu, setAdminMenu] = useState([
    { id: 1, name: "Ribeye Steak", price: 32, available: true, recommended: true, category: "Principal", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
    { id: 2, name: "Pasta con Trufa", price: 24, available: true, recommended: false, category: "Pastas", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop" },
    { id: 3, name: "Pizza Margherita", price: 18, available: false, recommended: false, category: "Pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { id: 4, name: "Salmón a la Parrilla", price: 28, available: true, recommended: true, category: "Principal", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop" },
    { id: 5, name: "Tarta de Chocolate", price: 9, available: true, recommended: false, category: "Postre", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
  ])

  const [categories, setCategories] = useState([
    { id: 1, name: "Entrantes", nameEn: "Starters", active: true, order: 1 },
    { id: 2, name: "Platos Principales", nameEn: "Main Courses", active: true, order: 2 },
    { id: 3, name: "Postres", nameEn: "Desserts", active: false, order: 3 },
    { id: 4, name: "Bebidas", nameEn: "Drinks", active: true, order: 4 },
  ])

  const menuCategories = [
    { id: "todos", name: "Todos", icon: "🍽️" },
    { id: "Principal", name: "Principales", icon: "🥩" },
    { id: "Pastas", name: "Pastas", icon: "🍝" },
    { id: "Postre", name: "Postres", icon: "🍰" },
    { id: "Bebida", name: "Bebidas", icon: "🥤" },
  ]

  const allPlatos = [
    { name: "Ribeye Steak", price: "€32", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop", category: "Principal", rating: 4.9, chefSuggestion: true },
    { name: "Pasta con Trufa", price: "€24", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop", category: "Pastas", rating: 4.8, chefSuggestion: false },
    { name: "Salmón a la Parrilla", price: "€28", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop", category: "Principal", rating: 4.9, chefSuggestion: true },
    { name: "Tarta de Chocolate", price: "€9", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", category: "Postre", rating: 4.9, chefSuggestion: false },
    { name: "Mojito", price: "€12", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop", category: "Bebida", rating: 4.8, chefSuggestion: false },
  ]

  const filteredPlatos = selectedCategory === "todos" 
    ? allPlatos 
    : allPlatos.filter(p => p.category === selectedCategory)

  const toggleAvailability = (id: number) => {
    setAdminMenu(prev => prev.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ))
  }

  const toggleRecommended = (id: number) => {
    setAdminMenu(prev => prev.map(item => 
      item.id === id ? { ...item, recommended: !item.recommended } : item
    ))
  }

  const toggleCategoryActive = (id: number) => {
    setCategories(prev => prev.map(cat => 
      cat.id === id ? { ...cat, active: !cat.active } : cat
    ))
  }

  const qrUrl = "https://tipico-caribeno.vercel.app/admin/login"

  useEffect(() => {
    const generateQRWithLogo = async () => {
      try {
        const canvas = canvasRef.current
        if (!canvas) return
        
        await QRCode.toCanvas(canvas, qrUrl, {
          width: 400,
          margin: 2,
          color: { dark: '#000000', light: '#FFFFFF' },
          errorCorrectionLevel: 'H'
        })
        
        const logo = new window.Image()
        logo.src = '/logo.png'
        logo.crossOrigin = 'Anonymous'
        
        logo.onload = () => {
          const ctx = canvas.getContext('2d')
          if (!ctx) return
          
          const logoSize = canvas.width * 0.28
          const logoX = (canvas.width - logoSize) / 2
          const logoY = (canvas.height - logoSize) / 2
          
          ctx.save()
          // CUADRADO NEGRO en lugar de círculo blanco
          ctx.fillStyle = '#000000'
          ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10)
          ctx.shadowColor = 'rgba(0,0,0,0.5)'
          ctx.shadowBlur = 8
          ctx.drawImage(logo, logoX, logoY, logoSize, logoSize)
          ctx.shadowColor = 'transparent'
          ctx.restore()
          
          const imageUrl = canvas.toDataURL('image/png')
          setQrImageUrl(imageUrl)
        }
        
        logo.onerror = () => {
          const imageUrl = canvas.toDataURL('image/png')
          setQrImageUrl(imageUrl)
        }
      } catch (error) {
        console.error('Error generando QR:', error)
      }
    }
    
    generateQRWithLogo()
  }, [qrUrl])

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLine(prev => {
        let newPos = prev + (scanDirection * 1.2)
        if (newPos >= 95) {
          setScanDirection(-1)
          return 95
        }
        if (newPos <= 5) {
          setScanDirection(1)
          return 5
        }
        return newPos
      })
    }, 30)
    
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1
    }))
    setParticles(newParticles)
    
    return () => clearInterval(scanInterval)
  }, [scanDirection])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 sm:py-16 md:py-20 bg-black">
        <canvas ref={canvasRef} style={{ display: 'none' }} width={400} height={400} />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-purple-950/30" />
          {particles.map((particle, i) => (
            <div key={i} className="absolute rounded-full bg-red-400/20" style={{ left: `${particle.x}%`, top: `${particle.y}%`, width: `${particle.size}px`, height: `${particle.size}px`, animation: `pulse ${Math.random() * 3 + 2}s infinite` }} />
          ))}
          <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px)`, backgroundSize: '100% 4px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
            
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 w-full max-w-md mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/30 backdrop-blur-sm mx-auto lg:mx-0">
                <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("hero.badge")}</span>
                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                  <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {t("hero.title1")}
                  </span>
                  <br />
                  <span className="text-white">{t("hero.title2")}</span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                {t("hero.subtitle")}
              </p>

              <div className="pt-4">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group" style={{ zIndex: 1 }}>
                    <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-red-500/40 animate-spin-slow shadow-[0_0_20px_rgba(255,0,0,0.3)]" style={{ zIndex: 0 }} />
                    <div className="absolute -inset-9 sm:-inset-12 rounded-full border border-purple-500/30 animate-spin-slow" style={{ animationDuration: '8s', animationDirection: 'reverse', zIndex: 0 }} />
                    <div className="absolute -inset-12 sm:-inset-16 rounded-full border border-red-500/20 animate-spin-slow" style={{ animationDuration: '12s', zIndex: 0 }} />
                    <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full shadow-[0_0_10px_#ff0000] animate-pulse" style={{ zIndex: 0 }} />
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full shadow-[0_0_10px_#ff0000] animate-pulse delay-75" style={{ zIndex: 0 }} />
                    <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full shadow-[0_0_10px_#ff0000] animate-pulse delay-150" style={{ zIndex: 0 }} />
                    <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full shadow-[0_0_10px_#ff0000] animate-pulse delay-300" style={{ zIndex: 0 }} />
                    
                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl" style={{ zIndex: 2, position: 'relative' }}>
                      <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl pointer-events-none" style={{ zIndex: 5 }}>
                        <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4]" style={{ top: `${scanLine}%` }} />
                        <div className="absolute left-0 w-full h-12 sm:h-20 bg-gradient-to-b from-cyan-500/0 via-cyan-500/15 to-cyan-500/0 pointer-events-none" style={{ top: `${scanLine - 20}%` }} />
                      </div>
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                        {qrImageUrl ? <img src={qrImageUrl} alt="QR Code" className="w-full h-full rounded-lg sm:rounded-xl" /> : <div className="w-full h-full bg-gray-200 rounded-lg sm:rounded-xl animate-pulse" />}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start pt-6">
                  <Button size="default" className="bg-gradient-to-r from-red-600 to-purple-700 hover:from-red-700 hover:to-purple-800 text-white px-6 sm:px-8 py-2 sm:py-2.5 shadow-xl transform hover:scale-105 transition-all duration-300" onClick={() => setScanned(true)}>
                    <Scan className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                    {t("hero.button")}
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative w-full flex justify-center">
              <div className="relative perspective-1000">
                <div className="relative transition-all duration-700 hover:rotate-y-0" style={{ transform: 'rotateY(0deg) lg:rotateY(15deg)' }}>
                  <div className="relative mx-auto w-72 sm:w-80 md:w-96">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full scale-110" />
                    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-6 bg-black/80 backdrop-blur-sm rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden bg-transparent">
                          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" style={{ background: 'transparent' }} />
                        </div>
                        <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                      </div>
                      <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-[520px] sm:h-[570px] md:h-[620px]">
                        <div className="bg-gradient-to-r from-red-600/20 to-purple-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-red-500/20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 sm:gap-2"><UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" /><span className="text-white font-semibold text-xs sm:text-sm tracking-wide">CARTA</span></div>
                            <div className="flex gap-0.5 sm:gap-1"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-pulse" /><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-500 rounded-full" /><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full" /></div>
                          </div>
                        </div>
                        
                        <div className="w-full bg-blue-600/80 py-1">
                          <div className="animate-ticker whitespace-nowrap inline-block">
                            <span className="text-white text-[9px] font-medium mx-3">📢 {t("info.line1")} - {t("menu.ribeye")}</span>
                            <span className="text-white text-[9px] font-medium mx-3">|</span>
                            <span className="text-white text-[9px] font-medium mx-3">🎉 {t("info.line2")}</span>
                            <span className="text-white text-[9px] font-medium mx-3">|</span>
                            <span className="text-white text-[9px] font-medium mx-3">⭐ {t("info.line3")}</span>
                          </div>
                        </div>
                        
                        <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden">
                          <NextImage src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=300&fit=crop" alt={t("menu.ribeye")} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-3">
                            <span className="text-white font-bold text-sm sm:text-base drop-shadow-lg">{t("menu.ribeye")}</span>
                            <div className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /><span className="text-yellow-400 text-[10px] sm:text-xs">4.9</span></div>
                          </div>
                          <div className="absolute top-2 right-2 bg-yellow-500/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
                            <ChefHat className="w-3 h-3 text-white" />
                            <span className="text-white text-[8px] sm:text-[10px] font-bold">{t("admin.suggested")}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 overflow-x-auto px-2 py-2 border-b border-zinc-800">
                          <button
                            onClick={() => setSelectedCategory("todos")}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                              selectedCategory === "todos" 
                                ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-md" 
                                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                            }`}
                          >
                            <span>🍽️</span>
                            <span>Todos</span>
                          </button>
                          <button
                            onClick={() => setSelectedCategory("Principal")}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                              selectedCategory === "Principal" 
                                ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-md" 
                                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                            }`}
                          >
                            <span>🥩</span>
                            <span>{t("categories.main")}</span>
                          </button>
                          <button
                            onClick={() => setSelectedCategory("Pastas")}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                              selectedCategory === "Pastas" 
                                ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-md" 
                                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                            }`}
                          >
                            <span>🍝</span>
                            <span>{t("categories.pasta")}</span>
                          </button>
                          <button
                            onClick={() => setSelectedCategory("Postre")}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                              selectedCategory === "Postre" 
                                ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-md" 
                                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                            }`}
                          >
                            <span>🍰</span>
                            <span>{t("categories.dessert")}</span>
                          </button>
                          <button
                            onClick={() => setSelectedCategory("Bebida")}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                              selectedCategory === "Bebida" 
                                ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-md" 
                                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                            }`}
                          >
                            <span>🥤</span>
                            <span>{t("categories.drink")}</span>
                          </button>
                        </div>
                        
                        <div className="p-2 sm:p-3 space-y-2 h-[220px] sm:h-[240px] md:h-[270px] overflow-y-auto custom-scrollbar">
                          {filteredPlatos.map((item, idx) => (
                            <div key={idx} className="group bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer">
                              <div className="flex gap-2 p-2 sm:p-3">
                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0"><NextImage src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" /></div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-1">
                                    <div>
                                      <div className="flex items-center gap-1">
                                        <h4 className="text-white font-semibold text-xs sm:text-sm truncate">{item.name}</h4>
                                        {item.chefSuggestion && <ChefHat className="w-3 h-3 text-yellow-400" />}
                                      </div>
                                      <p className="text-red-400/70 text-[8px] sm:text-[10px]">{item.category}</p>
                                    </div>
                                    <span className="text-red-400 font-bold text-xs sm:text-sm bg-red-500/10 px-1.5 sm:px-2 py-0.5 rounded shrink-0">{item.price}</span>
                                  </div>
                                  <div className="flex items-center gap-0.5 mt-0.5 sm:mt-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-700'}`} />))}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/30 backdrop-blur-sm mb-4">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("functions.badge")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t("functions.title1")}
              </span>
              <br />
              <span className="text-white">{t("functions.title2")}</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              {t("functions.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12">
            <button onClick={() => setActiveDemo("productos")} className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeDemo === "productos" ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg" : "bg-zinc-800 text-zinc-400 hover:text-white"}`}>
              <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" /> {t("demo.productos")}
            </button>
            <button onClick={() => setActiveDemo("categorias")} className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeDemo === "categorias" ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg" : "bg-zinc-800 text-zinc-400 hover:text-white"}`}>
              <FolderTree className="w-3 h-3 sm:w-4 sm:h-4" /> {t("demo.categorias")}
            </button>
            <button onClick={() => setActiveDemo("config")} className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeDemo === "config" ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg" : "bg-zinc-800 text-zinc-400 hover:text-white"}`}>
              <Settings className="w-3 h-3 sm:w-4 sm:h-4" /> {t("demo.config")}
            </button>
          </div>

          <div className="flex justify-center">
            {activeDemo === "productos" && (
              <div className="relative perspective-1000">
                <div className="relative transition-all duration-700 hover:rotate-y-0" style={{ transform: 'rotateY(5deg)' }}>
                  <div className="relative mx-auto w-72 sm:w-80 md:w-96">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full scale-110" />
                    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-6 bg-black/80 backdrop-blur-sm rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden bg-transparent">
                          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" style={{ background: 'transparent' }} />
                        </div>
                        <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                      </div>
                      <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-[500px] sm:h-[550px] md:h-[600px]">
                        <div className="bg-gradient-to-r from-red-600/20 to-purple-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-red-500/20">
                          <div className="flex items-center gap-1.5 sm:gap-2"><Edit2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" /><span className="text-white font-semibold text-[10px] sm:text-xs tracking-wide">{t("demo.productos")}</span></div>
                          <p className="text-[8px] sm:text-[10px] text-zinc-500 mt-1 text-center">{t("demo.productosHint")}</p>
                        </div>
                        <div className="p-2 sm:p-3 space-y-2 h-[420px] sm:h-[460px] md:h-[510px] overflow-y-auto custom-scrollbar">
                          {adminMenu.map((item) => (
                            <div key={item.id} className="bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all duration-300">
                              <div className="flex gap-2 p-2 sm:p-3">
                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0"><NextImage src={item.image} alt={item.name} fill className="object-cover" /></div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-1">
                                    <div>
                                      <div className="flex items-center gap-1">
                                        <h4 className="text-white font-semibold text-xs sm:text-sm truncate">{item.name}</h4>
                                        {item.recommended && <ChefHat className="w-3 h-3 text-yellow-400" />}
                                      </div>
                                      <p className="text-zinc-500 text-[8px] sm:text-[10px]">{item.category}</p>
                                    </div>
                                    <span className="text-red-400 font-bold text-xs sm:text-sm">€{item.price}</span>
                                  </div>
                                  <div className="flex items-center justify-between mt-1 sm:mt-2">
                                    <div className="flex items-center gap-1 sm:gap-2">
                                      <button onClick={() => toggleAvailability(item.id)} className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-medium transition-all duration-200 ${item.available ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>
                                        {item.available ? <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> : <X className="w-2 h-2 sm:w-2.5 sm:h-2.5" />}{item.available ? t("admin.available") : t("admin.soldOut")}
                                      </button>
                                      <button onClick={() => toggleRecommended(item.id)} className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-medium transition-all duration-200 ${item.recommended ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : "bg-zinc-800 text-zinc-500 border border-zinc-700"}`}>
                                        <ChefHat className="w-2 h-2 sm:w-2.5 sm:h-2.5" />{item.recommended ? t("admin.suggested") : t("admin.highlight")}
                                      </button>
                                    </div>
                                    <Save className="w-3 h-3 text-cyan-400 opacity-50" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === "categorias" && (
              <div className="relative perspective-1000">
                <div className="relative transition-all duration-700 hover:rotate-y-0" style={{ transform: 'rotateY(5deg)' }}>
                  <div className="relative mx-auto w-72 sm:w-80 md:w-96">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full scale-110" />
                    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-6 bg-black/80 backdrop-blur-sm rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden bg-transparent">
                          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" style={{ background: 'transparent' }} />
                        </div>
                        <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                      </div>
                      <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-[500px] sm:h-[550px] md:h-[600px]">
                        <div className="bg-gradient-to-r from-red-600/20 to-purple-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-red-500/20">
                          <div className="flex items-center gap-1.5 sm:gap-2"><FolderTree className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" /><span className="text-white font-semibold text-[10px] sm:text-xs tracking-wide">{t("demo.categorias")}</span></div>
                          <p className="text-[8px] sm:text-[10px] text-zinc-500 mt-1 text-center">{t("demo.categoriasHint")}</p>
                        </div>
                        <div className="p-2 sm:p-3 space-y-2 h-[420px] sm:h-[460px] md:h-[510px] overflow-y-auto custom-scrollbar">
                          {categories.map((cat) => (
                            <div key={cat.id} className="bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all duration-300">
                              <div className="flex items-center justify-between p-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2"><FolderTree className="w-4 h-4 text-red-400" /><h4 className="text-white font-semibold text-sm">{cat.name}</h4></div>
                                  <p className="text-zinc-500 text-xs mt-0.5">{cat.nameEn}</p>
                                  <p className="text-zinc-600 text-[10px] mt-1">{t("demo.order")}: {cat.order}</p>
                                </div>
                                <button onClick={() => toggleCategoryActive(cat.id)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${cat.active ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>
                                  {cat.active ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}{cat.active ? t("admin.active") : t("admin.inactive")}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === "config" && (
              <div className="relative perspective-1000">
                <div className="relative transition-all duration-700 hover:rotate-y-0" style={{ transform: 'rotateY(5deg)' }}>
                  <div className="relative mx-auto w-72 sm:w-80 md:w-96">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full scale-110" />
                    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-6 bg-black/80 backdrop-blur-sm rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden bg-transparent">
                          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" style={{ background: 'transparent' }} />
                        </div>
                        <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                      </div>
                      <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-[500px] sm:h-[550px] md:h-[600px]">
                        <div className="bg-gradient-to-r from-red-600/20 to-purple-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-red-500/20">
                          <div className="flex items-center gap-1.5 sm:gap-2"><Settings className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" /><span className="text-white font-semibold text-[10px] sm:text-xs tracking-wide">{t("demo.config")}</span></div>
                        </div>
                        
                        <div className="p-2 sm:p-3 space-y-3 h-[420px] sm:h-[460px] md:h-[510px] overflow-y-auto custom-scrollbar">
                          
                          <div className="w-full bg-blue-600/80 py-1 overflow-hidden rounded-lg">
                            <div className="animate-ticker whitespace-nowrap inline-block">
                              <span className="text-white text-[9px] font-medium mx-3">{t("config.infoLine")}: {t("config.systemUpdated")} - {t("config.lastSync")}: {new Date().toLocaleDateString()}</span>
                              <span className="text-white text-[9px] font-medium mx-3">|</span>
                              <span className="text-white text-[9px] font-medium mx-3">✓ {t("config.allServices")}</span>
                              <span className="text-white text-[9px] font-medium mx-3">|</span>
                              <span className="text-white text-[9px] font-medium mx-3">📊 {t("config.uptime")}: 99.9%</span>
                            </div>
                          </div>

                          <div className="bg-zinc-900/50 rounded-xl p-3 border border-zinc-800">
                            <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-red-400" /><h4 className="text-white font-semibold text-sm">{t("config.security")}</h4></div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 cursor-pointer hover:bg-zinc-800/70 transition-colors">
                              <div className="flex items-center gap-2"><Key className="w-4 h-4 text-red-400" /><span className="text-white text-xs">{t("config.changePassword")}</span></div>
                              <ArrowRight className="w-3 h-3 text-zinc-500" />
                            </div>
                          </div>

                          <div className="bg-zinc-900/50 rounded-xl p-3 border border-zinc-800">
                            <div className="flex items-center gap-2 mb-3"><Clock className="w-4 h-4 text-red-400" /><h4 className="text-white font-semibold text-sm">{t("config.restaurantHours")}</h4></div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-zinc-400">{t("config.monFri")}:</span>
                                <span className="text-white">12:00 - 23:00</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-zinc-400">{t("config.satSun")}:</span>
                                <span className="text-white">13:00 - 00:00</span>
                              </div>
                              <div className="flex justify-between items-center text-xs border-t border-zinc-800 pt-2 mt-1">
                                <span className="text-green-400 text-[10px]">📅 {t("config.nextHoliday")}:</span>
                                <span className="text-white text-[10px]">1 de Mayo - {t("config.closed")}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-spin-slow { animation: spin-slow linear infinite; }
        .animate-ticker { 
          animation: ticker 25s linear infinite;
          display: inline-block;
        }
        .perspective-1000 { perspective: 1000px; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #ff0000, #8b5cf6); border-radius: 10px; }
        @media (min-width: 1024px) { .rotate-y-0 { transform: rotateY(0deg); } }
      `}</style>
    </>
  )
}