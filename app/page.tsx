import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PricingSubscription } from "@/components/pricing-subscription"
import { Services } from "@/components/services"
import { WhyChooseMe } from "@/components/why-choose-me"
import { Contact } from "@/components/contact"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <PricingSubscription />
      <Services />
      <WhyChooseMe />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}