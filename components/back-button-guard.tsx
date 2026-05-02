"use client"

import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function BackButtonGuard() {
  const { language } = useLanguage()

  useEffect(() => {
    let backCount = 0
    let timer: NodeJS.Timeout

    const texts: Record<string, string> = {
      es: "Presiona 3 veces para salir",
      en: "Press 3 times to exit",
      ru: "Нажми 3 раза для выхода",
      fr: "Appuyez 3 fois pour quitter",
      it: "Premi 3 volte per uscire"
    }

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault()
      backCount++
      
      if (backCount >= 3) {
        window.history.go(-1)
        return
      }

      const message = texts[language] || texts.es
      // Mostrar toast simple
      const toast = document.createElement("div")
      toast.textContent = `${message} (${backCount}/3)`
      toast.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: linear-gradient(135deg, #ef4444, #a855f7); color: white;
        padding: 10px 20px; border-radius: 20px; font-size: 13px; font-weight: 500;
        z-index: 99999; box-shadow: 0 10px 30px rgba(239,68,68,0.3);
        transition: all 0.3s ease;
      `
      document.body.appendChild(toast)
      
      setTimeout(() => {
        toast.style.opacity = "0"
        setTimeout(() => document.body.removeChild(toast), 300)
      }, 2000)

      // Reiniciar contador después de 2 segundos
      clearTimeout(timer)
      timer = setTimeout(() => { backCount = 0 }, 2000)

      // Mantener en la página
      window.history.pushState(null, "", window.location.href)
    }

    window.history.pushState(null, "", window.location.href)
    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
      clearTimeout(timer)
    }
  }, [language])

  return null
}