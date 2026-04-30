"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const getGreeting = (language: string): string => {
  const hour = new Date().getHours();
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 19;
  const greetings: Record<string, { morning: string; afternoon: string; night: string }> = {
    es: { morning: "🌞 Buenos días", afternoon: "🌤️ Buenas tardes", night: "🌙 Buenas noches" },
    en: { morning: "🌞 Good morning", afternoon: "🌤️ Good afternoon", night: "🌙 Good evening" },
    ru: { morning: "🌞 Доброе утро", afternoon: "🌤️ Добрый день", night: "🌙 Добрый вечер" },
    fr: { morning: "🌞 Bonjour", afternoon: "🌤️ Bon après-midi", night: "🌙 Bonsoir" },
    it: { morning: "🌞 Buongiorno", afternoon: "🌤️ Buon pomeriggio", night: "🌙 Buonasera" }
  };
  const lang = greetings[language] || greetings.es;
  if (isMorning) return lang.morning;
  if (isAfternoon) return lang.afternoon;
  return lang.night;
};

const getSmallDialogText = (language: string): string => {
  const hour = new Date().getHours();
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 19;
  const texts: Record<string, { morning: string; afternoon: string; night: string }> = {
    es: { morning: "¡Buenos días! 👋", afternoon: "¡Buenas tardes! ✨", night: "¡Buenas noches! 🌙" },
    en: { morning: "Good morning! 👋", afternoon: "Good afternoon! ✨", night: "Good evening! 🌙" },
    ru: { morning: "Доброе утро! 👋", afternoon: "Добрый день! ✨", night: "Добрый вечер! 🌙" },
    fr: { morning: "Bonjour! 👋", afternoon: "Bon après-midi! ✨", night: "Bonsoir! 🌙" },
    it: { morning: "Buongiorno! 👋", afternoon: "Buon pomeriggio! ✨", night: "Buonasera! 🌙" }
  };
  const lang = texts[language] || texts.es;
  if (isMorning) return lang.morning;
  if (isAfternoon) return lang.afternoon;
  return lang.night;
};

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [isWaving, setIsWaving] = useState(false);
  const [lookAround, setLookAround] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const greeting = getGreeting(language);
    setMessages([{ role: "assistant", content: `¡${greeting}! 👋 Soy Q-Bot. ¿En qué puedo ayudarte?` }]);
  }, [language]);

  useEffect(() => {
    const waveInterval = setInterval(() => { setIsWaving(true); setTimeout(() => setIsWaving(false), 1200); }, 7000);
    return () => clearInterval(waveInterval);
  }, []);

  useEffect(() => {
    const lookInterval = setInterval(() => { setLookAround(Math.random() * 12 - 6); }, 2000);
    return () => clearInterval(lookInterval);
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus(); }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false); setShowBubble(true);
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
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, { role: "user", content: userMessage }], language }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "❌ Error. WhatsApp +34 624 497 851" }]);
    } finally { setIsLoading(false); }
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          onClick={() => { setIsOpen(true); setShowBubble(false); }}
          initial={{ scale: 0, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-3 right-2 sm:bottom-4 sm:right-4 z-[99999] bg-transparent border-0 cursor-pointer p-0"
          aria-label="Abrir chat"
        >
          <div className="relative">
            {/* Burbuja */}
            <AnimatePresence>
              {showBubble && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-red-500 text-white px-2 py-1 rounded-xl text-[9px] font-medium whitespace-nowrap shadow-lg"
                >
                  {getSmallDialogText(language)}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Robot mini */}
            <motion.div
              className="relative w-6 h-6 sm:w-7 sm:h-7"
              animate={{ y: [0, -1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Cuerpo */}
              <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-red-500 rounded-xl shadow-lg shadow-purple-500/30">
                <motion.div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              </div>

              {/* Cuello */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full" />

              {/* Cabeza */}
              <motion.div
                className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-6 h-5 sm:w-7 sm:h-6"
                animate={{ rotate: lookAround }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg shadow-md border border-purple-500/20">
                  {/* Ojos */}
                  <div className="absolute inset-0.5 flex items-center justify-center gap-1">
                    <motion.div className="w-2 h-3 bg-black rounded-full overflow-hidden" animate={{ scaleY: isWaving ? 0.1 : 1 }} transition={{ duration: 0.15 }}>
                      <div className="absolute top-0.5 left-0.5 w-1 h-1.5 bg-white rounded-full" />
                    </motion.div>
                    <motion.div className="w-2 h-3 bg-black rounded-full overflow-hidden" animate={{ scaleY: isWaving ? 0.1 : 1 }} transition={{ duration: 0.15 }}>
                      <div className="absolute top-0.5 left-0.5 w-1 h-1.5 bg-white rounded-full" />
                    </motion.div>
                  </div>
                </div>

                {/* Brazos */}
                <div className="absolute -left-3 top-1.5">
                  <motion.div className="w-2.5 h-0.5 bg-gradient-to-r from-purple-400 to-zinc-500 rounded-full origin-right" animate={isWaving ? { rotate: [0, -60, 30, -40, 0] } : { rotate: -15 }} transition={{ duration: 0.8 }}>
                    <div className="w-0.5 h-1 bg-zinc-400 rounded-sm ml-2.5 -mt-0.5" />
                  </motion.div>
                </div>
                <div className="absolute -right-3 top-1.5">
                  <motion.div className="w-2.5 h-0.5 bg-gradient-to-r from-zinc-500 to-red-400 rounded-full origin-left" animate={isWaving ? { rotate: [0, 60, -30, 40, 0] } : { rotate: 15 }} transition={{ duration: 0.8, delay: 0.1 }}>
                    <div className="w-0.5 h-1 bg-zinc-400 rounded-sm ml-2.5 -mt-0.5" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Orugas */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 flex gap-0.5">
                <div className="w-2 h-0.5 bg-zinc-700 rounded-full" />
                <div className="w-2 h-0.5 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 z-[99999] w-[92vw] sm:w-[360px] h-[460px] max-w-[360px] rounded-2xl shadow-2xl bg-gradient-to-br from-zinc-900 to-black flex flex-col overflow-hidden border border-purple-500/30"
          >
            <div className="bg-gradient-to-r from-purple-600 to-red-500 py-3 px-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-base">🤖</span>
                <div><h3 className="font-bold text-white text-xs">Q-Bot</h3><span className="text-[9px] text-white/50">● En línea</span></div>
              </div>
              <button onClick={() => { setIsOpen(false); setShowBubble(true); }} className="text-white hover:bg-white/20 rounded-lg w-6 h-6 flex items-center justify-center text-xs">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-2 px-3 rounded-2xl text-[11px] ${msg.role === "user" ? "bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-br-md" : "bg-zinc-800 text-zinc-100 rounded-bl-md"}`}>
                    <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-2.5 rounded-2xl rounded-bl-md flex gap-1">
                    <span className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-2.5 border-t border-zinc-800 bg-black/30">
              <div className="flex gap-1.5">
                <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Escribe..." className="flex-1 bg-zinc-800 text-white rounded-xl px-3 py-2 text-[11px] focus:outline-none focus:ring-2 focus:ring-purple-500/50" disabled={isLoading} />
                <button onClick={sendMessage} disabled={isLoading || !input.trim()} className="bg-gradient-to-r from-purple-600 to-red-500 text-white px-2.5 py-2 rounded-xl disabled:opacity-50 text-xs">📤</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}