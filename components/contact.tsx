"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send, Mail, Phone, CheckCircle } from "lucide-react"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", business: "", message: "" })
    }, 3000)
  }

  const whatsappNumber = "34624497851"
  const whatsappMessage = encodeURIComponent(t("contact.whatsappMessage"))
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const steps = [
    "contact.step1",
    "contact.step2",
    "contact.step3",
    "contact.step4",
  ]

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("contact.title1")} <span className="text-primary text-glow-cyan">{t("contact.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {/* WhatsApp card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:glow-cyan-sm group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MessageCircle className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-green-400 transition-colors">
                    {t("contact.whatsapp")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("contact.whatsappDesc")}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-green-400">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+34 624 497 851</span>
              </div>
            </a>

            {/* Email card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t("contact.email")}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t("contact.emailDesc")}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-primary">
                <Mail className="w-4 h-4" />
                <span className="font-medium">hello@devstudio.com</span>
              </div>
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">{t("contact.whatNext")}</h3>
              <ol className="space-y-3">
                {steps.map((stepKey, index) => (
                  <li key={stepKey} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{t(stepKey)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass rounded-2xl p-8 glow-cyan-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("contact.success.title")}</h3>
                <p className="text-muted-foreground">
                  {t("contact.success.message")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">{t("contact.form.name")}</FieldLabel>
                    <Input
                      id="name"
                      placeholder={t("contact.form.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">{t("contact.form.email")}</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="business">{t("contact.form.business")}</FieldLabel>
                    <Input
                      id="business"
                      placeholder={t("contact.form.businessPlaceholder")}
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="bg-input border-border focus:border-primary"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">{t("contact.form.message")}</FieldLabel>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-input border-border focus:border-primary resize-none"
                    />
                  </Field>
                </FieldGroup>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-cyan hover:glow-cyan-lg transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.form.send")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
