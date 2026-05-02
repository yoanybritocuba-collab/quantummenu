"use client";

import { Cpu, Zap, Edit2, Check, X, FolderTree, ChefHat } from "lucide-react";
import NextImage from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import QRCode from "qrcode";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t, language } = useLanguage();
  const [scanLine, setScanLine] = useState(0);
  const [scanDirection, setScanDirection] = useState(1);
  const [qrImageUrl, setQrImageUrl] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRWithLogo = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const qrUrl = "https://www.quantummenu.org/";
    const logoSizeRatio = 0.28;
    try {
      await QRCode.toCanvas(canvas, qrUrl, {
        width: 180, margin: 1,
        color: { dark: "#000000", light: "#FFFFFF" },
        errorCorrectionLevel: "H",
      });
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const logo = new window.Image();
      logo.src = "/logo.png";
      logo.crossOrigin = "Anonymous";
      logo.onload = () => {
        const logoSize = canvas.width * logoSizeRatio;
        const logoX = (canvas.width - logoSize) / 2;
        const logoY = (canvas.height - logoSize) / 2;
        const padding = 3;
        ctx.fillStyle = "#000000";
        ctx.fillRect(logoX - padding, logoY - padding, logoSize + padding * 2, logoSize + padding * 2);
        ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
        setQrImageUrl(canvas.toDataURL("image/png"));
      };
      logo.onerror = () => setQrImageUrl(canvas.toDataURL("image/png"));
    } catch (error) {
      console.error("Error generando QR:", error);
    }
  }, []);

  useEffect(() => { generateQRWithLogo(); }, [generateQRWithLogo]);

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLine((prev) => {
        let newPos = prev + scanDirection * 1.2;
        if (newPos >= 85) { setScanDirection(-1); return 85; }
        if (newPos <= 15) { setScanDirection(1); return 15; }
        return newPos;
      });
    }, 40);
    return () => clearInterval(scanInterval);
  }, [scanDirection]);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showPhrase, setShowPhrase] = useState(true);
  const phrases = [t("hero.phrase1"), t("hero.phrase2"), t("hero.phrase3"), t("hero.phrase4")];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPhrase(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setShowPhrase(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases]);

  const adminMenuData = [
    { id: 1, nameKey: "menu.ribeye", categoryKey: "categories.main", price: 32, available: true, recommended: true, image: "/demo-ribeye.jpg" },
    { id: 2, nameKey: "menu.trufflePasta", categoryKey: "categories.pasta", price: 24, available: true, recommended: false, image: "/demo-pasta.jpg" },
    { id: 3, nameKey: "menu.margherita", categoryKey: "categories.pizza", price: 18, available: false, recommended: false, image: "/demo-pizza.jpg" },
    { id: 4, nameKey: "menu.salmon", categoryKey: "categories.main", price: 28, available: true, recommended: true, image: "/demo-salmon.jpg" },
    { id: 5, nameKey: "menu.chocolateCake", categoryKey: "categories.dessert", price: 9, available: true, recommended: false, image: "/demo-cake.jpg" },
  ];

  const categoriesData = [
    { id: 1, nameKey: "categories.entrantes", nameEnKey: "categories.entrantesEn", active: true, order: 1 },
    { id: 2, nameKey: "categories.principales", nameEnKey: "categories.principalesEn", active: true, order: 2 },
    { id: 3, nameKey: "categories.postres", nameEnKey: "categories.postresEn", active: false, order: 3 },
    { id: 4, nameKey: "categories.bebidas", nameEnKey: "categories.bebidasEn", active: true, order: 4 },
  ];

  const [adminMenu, setAdminMenu] = useState(adminMenuData);
  const [categories, setCategories] = useState(categoriesData);

  useEffect(() => {
    setAdminMenu(adminMenuData.map(item => ({ ...item, name: t(item.nameKey), category: t(item.categoryKey) })));
  }, [language, t]);

  useEffect(() => {
    setCategories(categoriesData.map(cat => ({ ...cat, name: t(cat.nameKey), nameEn: t(cat.nameEnKey) })));
  }, [language, t]);

  const toggleCategoryActive = (id: number) => {
    setCategories(prev => prev.map(cat => cat.id === id ? { ...cat, active: !cat.active } : cat));
  };
  const toggleAvailability = (id: number) => {
    setAdminMenu(prev => prev.map(item => item.id === id ? { ...item, available: !item.available } : item));
  };
  const toggleRecommended = (id: number) => {
    setAdminMenu(prev => prev.map(item => item.id === id ? { ...item, recommended: !item.recommended } : item));
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-screen h-[100dvh] overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 z-0">
          <NextImage src="/fondo.png" alt="Fondo" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
          <div className="flex flex-col items-center text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 mb-4 sm:mb-6">
              <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("hero.badge")}</span>
              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{t("hero.title1")}</span><br />
              <span className="text-white">{t("hero.title2")}</span>
            </h1>
            <div className="h-14 sm:h-20 mt-4">
              <p className={`text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold transition-all duration-500 transform ${showPhrase ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>{phrases[currentPhraseIndex]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QR */}
      <section className="relative py-12 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative group" style={{ zIndex: 1 }}>
              <div className="absolute -inset-3 rounded-full border border-red-500/40 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border border-purple-500/30 animate-spin-slow" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
              <div className="relative bg-white rounded-xl p-1.5 shadow-2xl">
                <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-10">
                  <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{ top: `${scanLine}%` }} />
                </div>
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white rounded-lg">
                  <canvas ref={canvasRef} style={{ display: "none" }} />
                  {qrImageUrl ? <img src={qrImageUrl} alt="QR" className="w-full h-full rounded-lg" /> : <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÓVILES DEMO CON BOTONES INTERACTIVOS */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-red-950/5 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/30 backdrop-blur-sm mb-4">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">{t("functions.badge")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{t("functions.title1")}</span><br />
              <span className="text-white">{t("functions.title2")}</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">{t("functions.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {/* Móvil Productos */}
            <div className="relative mx-auto w-64 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 backdrop-blur-sm rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                </div>
                <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
                  <div className="bg-gradient-to-r from-red-600/20 to-purple-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-red-500/20">
                    <div className="flex items-center gap-1.5">
                      <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
                      <span className="text-white font-semibold text-[10px] sm:text-xs">{t("demo.productos")}</span>
                    </div>
                    <p className="text-[8px] text-zinc-500 mt-1 text-center">{t("demo.productosHint")}</p>
                  </div>
                  <div className="p-2 sm:p-3 space-y-2 h-[340px] sm:h-[380px] md:h-[430px] overflow-y-auto custom-scrollbar">
                    {adminMenu.map((item) => (
                      <div key={item.id} className="bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-500/30 transition-all">
                        <div className="flex gap-2 p-2">
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
                            <NextImage src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-1">
                              <div>
                                <div className="flex items-center gap-1">
                                  <h4 className="text-white font-semibold text-[10px] sm:text-xs">{item.name}</h4>
                                  {item.recommended && <ChefHat className="w-3 h-3 text-yellow-400" />}
                                </div>
                                <p className="text-zinc-500 text-[8px]">{item.category}</p>
                              </div>
                              <span className="text-red-400 font-bold text-[10px] sm:text-xs">€{item.price}</span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <button onClick={() => toggleAvailability(item.id)} className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-medium transition-all ${item.available ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>
                                {item.available ? <Check className="w-2 h-2" /> : <X className="w-2 h-2" />}
                                {item.available ? t("admin.available") : t("admin.soldOut")}
                              </button>
                              <button onClick={() => toggleRecommended(item.id)} className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-medium transition-all ${item.recommended ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : "bg-zinc-800 text-zinc-500 border border-zinc-700"}`}>
                                <ChefHat className="w-2 h-2" />
                                {item.recommended ? t("admin.suggested") : t("admin.highlight")}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
              </div>
            </div>

            {/* Móvil Categorías */}
            <div className="relative mx-auto w-64 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-red-500/30">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 sm:w-36 h-5 sm:h-6 bg-black/80 backdrop-blur-sm rounded-full z-10 border border-red-500/20 flex items-center justify-center gap-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
                  <span className="text-white font-bold text-[8px] sm:text-[10px]">QuantumMenu</span>
                </div>
                <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
                  <div className="bg-gradient-to-r from-red-600/20 to-purple-700/20 p-2 sm:p-3 pt-10 sm:pt-12 border-b border-red-500/20">
                    <div className="flex items-center gap-1.5">
                      <FolderTree className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
                      <span className="text-white font-semibold text-[10px] sm:text-xs">{t("demo.categorias")}</span>
                    </div>
                    <p className="text-[8px] text-zinc-500 mt-1 text-center">{t("demo.categoriasHint")}</p>
                  </div>
                  <div className="p-2 sm:p-3 space-y-2 h-[340px] sm:h-[380px] md:h-[430px] overflow-y-auto custom-scrollbar">
                    {categories.map((cat) => (
                      <div key={cat.id} className="bg-gradient-to-r from-zinc-900/50 to-black/50 rounded-xl overflow-hidden border border-zinc-800">
                        <div className="flex items-center justify-between p-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <FolderTree className="w-4 h-4 text-red-400" />
                              <h4 className="text-white font-semibold text-sm">{cat.name}</h4>
                            </div>
                            <p className="text-zinc-500 text-xs mt-0.5">{cat.nameEn}</p>
                            <p className="text-zinc-600 text-[10px] mt-1">{t("demo.order")}: {cat.order}</p>
                          </div>
                          <button onClick={() => toggleCategoryActive(cat.id)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${cat.active ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>
                            {cat.active ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                            {cat.active ? t("admin.active") : t("admin.inactive")}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow linear infinite; animation-duration: 10s; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #ff0000, #8b5cf6); border-radius: 10px; }
      `}</style>
    </>
  );
}