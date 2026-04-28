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
    es: "👋 ¿Necesitas información sobre precios, planes QR o desarrollo web? Puedes consultarme.",
    en: "👋 Need information about prices, QR plans or web development? You can ask me.",
    ru: "👋 Нужна информация? Вы можете спросить меня.",
    zh: "👋 需要信息吗？您可以问我。",
    fr: "👋 Besoin d'informations ? Vous pouvez me demander.",
    it: "👋 Hai bisogno di informazioni? Puoi chiedere a me."
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
      setMessages(prev => [...prev, { role: "assistant", content: "❌ Error. Contacta por WhatsApp +34 624 497 851" }]);
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

  return (
    <>
      {/* Diálogo pequeño flotante */}
      {!isOpen && showSmallDialog && messages.length > 0 && (
        <div 
          onClick={handleOpen}
          style={{ 
            position: 'fixed', 
            bottom: '75px', 
            right: '20px', 
            zIndex: 99998,
            maxWidth: '250px',
            cursor: 'pointer'
          }}
          className="bg-gradient-to-r from-red-500 to-purple-600 text-white p-2.5 rounded-xl shadow-xl"
        >
          <p className="text-xs">{messages[0]?.content.substring(0, 70)}...</p>
        </div>
      )}

      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            zIndex: 99999,
            width: '52px',
            height: '52px',
            borderRadius: '26px'
          }}
          className="bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <span className="text-2xl">🤖</span>
        </button>
      )}

      {/* Ventana del chat - TAMAÑO PEQUEÑO FIJO */}
      {isOpen && (
        <div 
          ref={chatRef}
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            zIndex: 99999,
            width: '350px',
            height: '480px',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
          className="bg-gradient-to-br from-zinc-900 to-black flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-purple-600 p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-lg">🤖</span>
              <div>
                <h3 className="font-bold text-white text-sm">QuantumBot</h3>
                <p className="text-xs text-white/70">Online</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setIsOpen(false);
                setShowSmallDialog(true);
              }} 
              className="text-white hover:bg-white/20 rounded-lg w-7 h-7 flex items-center justify-center text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ height: 'calc(100% - 105px)' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-2 rounded-xl text-xs ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-br-none"
                      : "bg-zinc-800 text-zinc-100 rounded-bl-none border border-zinc-700"
                  }`}
                >
                  {msg.role === "assistant" && <span className="mr-1">🤖</span>}
                  <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-2 rounded-xl">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-zinc-800 bg-black/30">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe..."
                className="flex-1 bg-zinc-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-red-500/50"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white p-2 rounded-xl disabled:opacity-50"
              >
                <span className="text-sm">📤</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}