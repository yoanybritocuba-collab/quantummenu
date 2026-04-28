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
    es: "👋 Soy QuantumBot, tu asistente virtual. Si necesitas información sobre precios, planes QR o desarrollo web, puedes consultarme con toda confianza. ¿En qué puedo ayudarte?",
    en: "👋 I'm QuantumBot, your virtual assistant. If you need information about prices, QR plans or web development, you can ask me. How can I help you?",
    ru: "👋 Я QuantumBot, ваш виртуальный помощник. Если вам нужна информация о ценах, QR-планах или веб-разработке, вы можете спросить меня. Чем могу помочь?",
    zh: "👋 我是QuantumBot，您的虚拟助手。如果您需要价格、二维码计划或网站开发的信息，可以问我。我能帮您什么？",
    fr: "👋 Je suis QuantumBot, votre assistant virtuel. Si vous avez besoin d'informations sur les prix, les plans QR ou le développement web, vous pouvez me demander. Comment puis-je vous aider ?",
    it: "👋 Sono QuantumBot, il tuo assistente virtuale. Se hai bisogno di informazioni su prezzi, piani QR o sviluppo web, puoi chiedere a me. Come posso aiutarti?"
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Saludo inicial al cargar la página
  useEffect(() => {
    if (!hasGreeted) {
      setHasGreeted(true);
      const greeting = getGreeting(language);
      const welcome = getWelcomeMessage(language);
      setMessages([{ role: "assistant", content: `${greeting}! ${welcome}` }]);
    }
  }, [language, hasGreeted]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-focus al abrir
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Cerrar si hace clic fuera del chat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
  };

  return (
    <>
      {/* Botón flotante - solo icono */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 99999 }}
          className="group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur-lg animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-red-500 to-purple-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
        </button>
      )}

      {/* Ventana del chat - profesional sin botones de sugerencias */}
      {isOpen && (
        <div 
          ref={chatRef}
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 99999, width: '400px', height: '580px' }}
          className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl shadow-2xl flex flex-col border border-red-500/30 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-purple-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <div>
                <h3 className="font-bold text-white">QuantumBot</h3>
                <p className="text-xs text-white/70">Online • Respuesta inmediata</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:bg-white/20 rounded-lg w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-200`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
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
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - sin botones de sugerencias */}
          <div className="p-4 border-t border-zinc-800 bg-black/30">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === "es" ? "Escribe tu mensaje..." : "Type your message..."}
                className="flex-1 bg-zinc-800 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 placeholder:text-zinc-500"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white p-2.5 rounded-xl disabled:opacity-50 transition-all duration-200 hover:scale-105"
              >
                <span className="text-lg">📤</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}