"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Saludo según hora e idioma
const getGreeting = (language: string): string => {
  const hour = new Date().getHours();
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 19;
  
  const greetings: Record<string, { morning: string; afternoon: string; night: string }> = {
    es: { morning: "🌞 Buenos días", afternoon: "🌤️ Buenas tardes", night: "🌙 Buenas noches" },
    en: { morning: "🌞 Good morning", afternoon: "🌤️ Good afternoon", night: "🌙 Good evening" },
    ru: { morning: "🌞 Доброе утро", afternoon: "🌤️ Добрый день", night: "🌙 Добрый вечер" },
    zh: { morning: "🌞 早上好", afternoon: "🌤️ 下午好", night: "🌙 晚上好" },
    fr: { morning: "🌞 Bonjour", afternoon: "🌤️ Bon après-midi", night: "🌙 Bonsoir" },
    it: { morning: "🌞 Buongiorno", afternoon: "🌤️ Buon pomeriggio", night: "🌙 Buonasera" }
  };
  
  const lang = greetings[language] || greetings.es;
  if (isMorning) return lang.morning;
  if (isAfternoon) return lang.afternoon;
  return lang.night;
};

const getWelcomeMessage = (language: string): string => {
  const messages: Record<string, string> = {
    es: "👋 ¿Necesitas ayuda? Pregúntame sobre precios, QR o webs.",
    en: "👋 Need help? Ask me about prices, QR or websites.",
    ru: "👋 Нужна помощь? Спросите о ценах, QR или сайтах.",
    zh: "👋 需要帮助吗？问我关于价格、二维码或网站的问题。",
    fr: "👋 Besoin d'aide? Demandez-moi les prix, QR ou sites web.",
    it: "👋 Hai bisogno di aiuto? Chiedimi prezzi, QR o siti web."
  };
  return messages[language] || messages.es;
};

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showSmallDialog, setShowSmallDialog] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Saludo inicial
  useEffect(() => {
    if (!hasGreeted) {
      setHasGreeted(true);
      const greeting = getGreeting(language);
      const welcome = getWelcomeMessage(language);
      setMessages([{ role: "assistant", content: `${greeting}! ${welcome}` }]);
      
      setTimeout(() => {
        setShowSmallDialog(false);
      }, 5000);
    }
  }, [language, hasGreeted]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowSmallDialog(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...messages, { role: "user", content: userMessage }],
          language 
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "❌ Error. WhatsApp +34 624 497 851" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowSmallDialog(false);
  };

  // Detectar móvil
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Diálogo pequeño flotante */}
      {!isOpen && showSmallDialog && messages.length > 0 && (
        <div 
          onClick={handleOpen}
          style={{ 
            position: 'fixed', 
            bottom: '68px', 
            right: '12px', 
            zIndex: 99998,
            cursor: 'pointer'
          }}
          className="bg-gradient-to-r from-red-500 to-purple-600 text-white p-1.5 px-2.5 rounded-full shadow-lg"
        >
          <p className="text-[10px] whitespace-nowrap">💬 ¿Necesitas ayuda?</p>
        </div>
      )}

      {/* Botón flotante - más pequeño */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          style={{ 
            position: 'fixed', 
            bottom: '12px', 
            right: '12px', 
            zIndex: 99999,
            width: '44px',
            height: '44px',
            borderRadius: '22px'
          }}
          className="bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <span className="text-xl">🤖</span>
        </button>
      )}

      {/* Ventana del chat - ULTRA COMPACTA */}
      {isOpen && (
        <div 
          ref={chatRef}
          style={{ 
            position: 'fixed', 
            bottom: '12px', 
            right: '12px', 
            zIndex: 99999,
            width: isMobile ? '280px' : '300px',
            height: isMobile ? '400px' : '450px',
            maxWidth: 'calc(100vw - 24px)',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
          }}
          className="bg-gradient-to-br from-zinc-900 to-black flex flex-col overflow-hidden border border-red-500/20"
        >
          {/* Header compacto */}
          <div className="bg-gradient-to-r from-red-500 to-purple-600 py-2 px-3 flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🤖</span>
              <h3 className="font-bold text-white text-xs">QuantumBot</h3>
              <span className="text-[9px] text-white/50">● Online</span>
            </div>
            <button 
              onClick={() => {
                setIsOpen(false);
                setShowSmallDialog(true);
              }} 
              className="text-white hover:bg-white/20 rounded w-5 h-5 flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>

          {/* Messages - compactos */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5" style={{ height: 'calc(100% - 85px)' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] p-1.5 px-2 rounded-lg text-[11px] ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-br-none"
                      : "bg-zinc-800 text-zinc-100 rounded-bl-none border border-zinc-700"
                  }`}
                >
                  {msg.role === "assistant" && <span className="mr-0.5 text-[9px]">🤖</span>}
                  <p className="whitespace-pre-wrap break-words leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-1.5 rounded-lg">
                  <div className="flex gap-0.5">
                    <span className="w-1 h-1 bg-red-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input ultra compacto */}
          <div className="p-2 border-t border-zinc-800 bg-black/30">
            <div className="flex gap-1.5">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isMobile ? "Pregunta algo..." : "Escribe aquí..."}
                className="flex-1 bg-zinc-800 text-white rounded-lg px-2 py-1.5 text-[11px] focus:outline-none focus:ring-1 focus:ring-red-500/50"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-2 py-1.5 rounded-lg disabled:opacity-50"
              >
                <span className="text-[11px]">📤</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}