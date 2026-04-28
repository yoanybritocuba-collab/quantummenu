import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PricingSubscription } from "@/components/pricing-subscription"
import { Services } from "@/components/services"
import { Footer } from "@/components/Footer"
import Chatbot from "@/components/Chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <PricingSubscription />
      <Services />
      <Footer />
      <Chatbot />
    </main>
  )
}