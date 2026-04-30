"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { ServicesSidebar } from "@/components/services-sidebar"
import { InfoSections } from "@/components/info-sections"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/Footer"
import Chatbot from "@/components/Chatbot"

export default function Home() {
  const [activePage, setActivePage] = useState<string>("home")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) setActivePage(hash)
    }
    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  const scrollToServices = () => {
    setActivePage("home")
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <AnimatePresence mode="wait">
        {(activePage === "home" || activePage === "") && (
          <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
            <Hero />
            <WhatWeDo setActivePage={setActivePage} scrollToServices={scrollToServices} />
            <ServicesSidebar />
            <Footer />
            <Chatbot />
          </motion.div>
        )}
        
        {activePage === "services" && (
          <motion.div key="services" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
            <ServicesSidebar />
            <Footer />
            <Chatbot />
          </motion.div>
        )}
        
        {activePage === "about" && (
          <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
            <InfoSections section="about" />
            <Footer />
            <Chatbot />
          </motion.div>
        )}
        
        {activePage === "guarantee" && (
          <motion.div key="guarantee" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
            <InfoSections section="guarantee" />
            <Footer />
            <Chatbot />
          </motion.div>
        )}
        
        {activePage === "contact" && (
          <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
            <ContactSection />
            <Footer />
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}