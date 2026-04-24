import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { PricingSubscription } from "@/components/pricing-subscription"
import { WhyChooseMe } from "@/components/why-choose-me"
import { Contact } from "@/components/contact"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/Footer"  // ← F mayúscula

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <PricingSubscription />
      <WhyChooseMe />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}