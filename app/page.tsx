import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PricingSubscription } from "@/components/pricing-subscription"
import { Services } from "@/components/services"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <PricingSubscription />
      <Services />
      <Footer />
    </main>
  )
}