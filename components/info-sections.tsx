"use client"

import { motion } from "framer-motion"
import { Users, Zap, Shield, Heart, Target, Award, Clock, ThumbsUp, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface InfoSectionsProps {
  section: "about" | "process" | "guarantee"
}

const getTexts = (language: string) => {
  const texts: Record<string, any> = {
    es: {
      aboutBadge: "SOBRE NOSOTROS",
      aboutTitle1: "Impulsamos tu ",
      aboutTitle2: "negocio digital",
      aboutDesc: "Somos un equipo apasionado por la tecnología y el diseño. Transformamos ideas en soluciones digitales que impulsan negocios.",
      passion: "Pasión",
      passionText: "Cada proyecto lo vivimos como propio. Nos apasiona ver crecer tu negocio con nuestras soluciones digitales.",
      focus: "Enfoque",
      focusText: "Nos centramos en tus objetivos. Cada solución está diseñada a medida para tu negocio y tus clientes.",
      experience: "Experiencia",
      experienceText: "Años de experiencia creando webs, menús QR y soluciones digitales para todo tipo de negocios.",
      processBadge: "CÓMO TRABAJAMOS",
      processTitle1: "Así de ",
      processTitle2: "fácil es",
      processDesc: "4 pasos simples para transformar tu negocio",
      step1Title: "1. Contacto",
      step1Text: "Cuéntanos tu idea por WhatsApp o email. Te respondemos en menos de 2 horas.",
      step2Title: "2. Propuesta",
      step2Text: "Te enviamos un presupuesto detallado con lo que necesitas. Sin compromiso.",
      step3Title: "3. Desarrollo",
      step3Text: "Creamos tu solución en tiempo récord. Te mantenemos al día de cada avance.",
      step4Title: "4. Entrega",
      step4Text: "Recibes tu proyecto terminado. Te enseñamos a usarlo y quedamos a tu disposición.",
      guaranteeBadge: "GARANTÍA",
      guaranteeTitle1: "Tu ",
      guaranteeTitle2: "tranquilidad",
      guaranteeTitle3: " es nuestra prioridad",
      hostingTitle: "Hosting 1 año gratis",
      hostingText: "Todos nuestros planes incluyen hosting seguro de alta velocidad durante el primer año.",
      supportTitle: "Soporte continuo",
      supportText: "Te acompañamos después de la entrega. Resolvemos tus dudas y te ayudamos con cualquier cambio.",
      satisfactionTitle: "Satisfacción garantizada",
      satisfactionText: "Trabajamos hasta que estés 100% satisfecho. Tu éxito es nuestro mejor portfolio.",
    },
    en: {
      aboutBadge: "ABOUT US",
      aboutTitle1: "We boost your ",
      aboutTitle2: "digital business",
      aboutDesc: "We are a team passionate about technology and design. We transform ideas into digital solutions that drive businesses.",
      passion: "Passion",
      passionText: "We live each project as our own. We are passionate about seeing your business grow with our digital solutions.",
      focus: "Focus",
      focusText: "We focus on your goals. Each solution is tailored to your business and your clients.",
      experience: "Experience",
      experienceText: "Years of experience creating websites, QR menus and digital solutions for all types of businesses.",
      processBadge: "HOW WE WORK",
      processTitle1: "It's that ",
      processTitle2: "easy",
      processDesc: "4 simple steps to transform your business",
      step1Title: "1. Contact",
      step1Text: "Tell us your idea via WhatsApp or email. We respond in less than 2 hours.",
      step2Title: "2. Proposal",
      step2Text: "We send you a detailed quote with what you need. No commitment.",
      step3Title: "3. Development",
      step3Text: "We create your solution in record time. We keep you updated on every progress.",
      step4Title: "4. Delivery",
      step4Text: "You receive your finished project. We teach you how to use it and remain at your disposal.",
      guaranteeBadge: "GUARANTEE",
      guaranteeTitle1: "Your ",
      guaranteeTitle2: "peace of mind",
      guaranteeTitle3: " is our priority",
      hostingTitle: "1 Year Free Hosting",
      hostingText: "All our plans include high-speed secure hosting for the first year.",
      supportTitle: "Continuous Support",
      supportText: "We accompany you after delivery. We solve your doubts and help you with any changes.",
      satisfactionTitle: "Satisfaction Guaranteed",
      satisfactionText: "We work until you are 100% satisfied. Your success is our best portfolio.",
    },
    ru: {
      aboutBadge: "О НАС",
      aboutTitle1: "Мы развиваем ваш ",
      aboutTitle2: "цифровой бизнес",
      aboutDesc: "Мы команда, увлечённая технологиями и дизайном. Превращаем идеи в цифровые решения для бизнеса.",
      passion: "Страсть",
      passionText: "Каждый проект мы проживаем как свой. Нам нравится видеть рост вашего бизнеса.",
      focus: "Фокус",
      focusText: "Мы сосредоточены на ваших целях. Каждое решение создано для вашего бизнеса.",
      experience: "Опыт",
      experienceText: "Годы опыта создания сайтов, QR-меню и цифровых решений для любого бизнеса.",
      processBadge: "КАК МЫ РАБОТАЕМ",
      processTitle1: "Это так ",
      processTitle2: "просто",
      processDesc: "4 простых шага для трансформации бизнеса",
      step1Title: "1. Контакт",
      step1Text: "Расскажите о вашей идее в WhatsApp или по почте. Ответим за 2 часа.",
      step2Title: "2. Предложение",
      step2Text: "Отправим детальную смету. Без обязательств.",
      step3Title: "3. Разработка",
      step3Text: "Создаём решение в рекордные сроки. Держим в курсе.",
      step4Title: "4. Доставка",
      step4Text: "Вы получаете готовый проект. Научим пользоваться и остаёмся на связи.",
      guaranteeBadge: "ГАРАНТИЯ",
      guaranteeTitle1: "Ваше ",
      guaranteeTitle2: "спокойствие",
      guaranteeTitle3: " — наш приоритет",
      hostingTitle: "Хостинг 1 год бесплатно",
      hostingText: "Все планы включают безопасный высокоскоростной хостинг на первый год.",
      supportTitle: "Постоянная поддержка",
      supportText: "Сопровождаем после сдачи. Решаем вопросы и помогаем с изменениями.",
      satisfactionTitle: "Гарантия удовлетворения",
      satisfactionText: "Работаем до 100% удовлетворения. Ваш успех — лучшее портфолио.",
    },
    fr: {
      aboutBadge: "À PROPOS",
      aboutTitle1: "Nous boostons votre ",
      aboutTitle2: "entreprise digitale",
      aboutDesc: "Une équipe passionnée de technologie et design. Nous transformons vos idées en solutions digitales.",
      passion: "Passion",
      passionText: "Chaque projet est vécu comme le nôtre. Nous aimons voir votre entreprise grandir.",
      focus: "Focus",
      focusText: "Centrés sur vos objectifs. Chaque solution est adaptée à votre entreprise.",
      experience: "Expérience",
      experienceText: "Des années d'expérience en création de sites, menus QR et solutions digitales.",
      processBadge: "COMMENT NOUS TRAVAILLONS",
      processTitle1: "C'est aussi ",
      processTitle2: "simple",
      processDesc: "4 étapes simples pour transformer votre entreprise",
      step1Title: "1. Contact",
      step1Text: "Parlez-nous de votre idée par WhatsApp ou email. Réponse en moins de 2h.",
      step2Title: "2. Proposition",
      step2Text: "Devis détaillé sans engagement.",
      step3Title: "3. Développement",
      step3Text: "Solution créée en temps record. Vous restez informé.",
      step4Title: "4. Livraison",
      step4Text: "Projet terminé livré. On vous apprend à l'utiliser.",
      guaranteeBadge: "GARANTIE",
      guaranteeTitle1: "Votre ",
      guaranteeTitle2: "tranquillité",
      guaranteeTitle3: " est notre priorité",
      hostingTitle: "Hébergement 1 an offert",
      hostingText: "Tous nos plans incluent un hébergement sécurisé haute vitesse la première année.",
      supportTitle: "Support continu",
      supportText: "Nous vous accompagnons après la livraison. Nous résolvons vos doutes.",
      satisfactionTitle: "Satisfaction garantie",
      satisfactionText: "Nous travaillons jusqu'à 100% de satisfaction. Votre succès est notre portfolio.",
    },
    it: {
      aboutBadge: "CHI SIAMO",
      aboutTitle1: "Potenziando il tuo ",
      aboutTitle2: "business digitale",
      aboutDesc: "Un team appassionato di tecnologia e design. Trasformiamo idee in soluzioni digitali.",
      passion: "Passione",
      passionText: "Ogni progetto è vissuto come nostro. Ci appassiona vedere crescere il tuo business.",
      focus: "Focus",
      focusText: "Centrati sui tuoi obiettivi. Ogni soluzione è su misura per te.",
      experience: "Esperienza",
      experienceText: "Anni di esperienza nella creazione di siti, menu QR e soluzioni digitali.",
      processBadge: "COME LAVORIAMO",
      processTitle1: "È così ",
      processTitle2: "semplice",
      processDesc: "4 semplici passi per trasformare il tuo business",
      step1Title: "1. Contatto",
      step1Text: "Raccontaci la tua idea via WhatsApp o email. Rispondiamo in meno di 2 ore.",
      step2Title: "2. Proposta",
      step2Text: "Ti inviamo un preventivo dettagliato. Senza impegno.",
      step3Title: "3. Sviluppo",
      step3Text: "Creiamo la tua soluzione a tempo record. Ti teniamo aggiornato.",
      step4Title: "4. Consegna",
      step4Text: "Ricevi il progetto finito. Ti insegniamo ad usarlo e restiamo a disposizione.",
      guaranteeBadge: "GARANZIA",
      guaranteeTitle1: "La tua ",
      guaranteeTitle2: "tranquillità",
      guaranteeTitle3: " è la nostra priorità",
      hostingTitle: "Hosting 1 anno gratis",
      hostingText: "Tutti i piani includono hosting sicuro ad alta velocità per il primo anno.",
      supportTitle: "Supporto continuo",
      supportText: "Ti accompagniamo dopo la consegna. Risolviamo dubbi e aiutiamo con modifiche.",
      satisfactionTitle: "Soddisfazione garantita",
      satisfactionText: "Lavoriamo fino al 100% di soddisfazione. Il tuo successo è il nostro portfolio.",
    },
  }
  return texts[language] || texts.es
}

export function InfoSections({ section }: InfoSectionsProps) {
  const { language } = useLanguage()
  const txt = getTexts(language)

  if (section === "about") {
    return (
      <section className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <Users className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400 font-medium">{txt.aboutBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">{txt.aboutTitle1}</span>
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{txt.aboutTitle2}</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">{txt.aboutDesc}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Heart className="w-6 h-6" />, title: txt.passion, text: txt.passionText },
              { icon: <Target className="w-6 h-6" />, title: txt.focus, text: txt.focusText },
              { icon: <Award className="w-6 h-6" />, title: txt.experience, text: txt.experienceText },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/0 to-purple-500/0 group-hover:from-red-500/20 group-hover:to-purple-500/20 rounded-2xl blur-xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative h-full bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-8 border border-zinc-800 group-hover:border-red-500/30 transition-all text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-purple-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <span className="text-red-400">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section === "process") {
    const steps = [
      { icon: <Zap className="w-6 h-6" />, title: txt.step1Title, text: txt.step1Text },
      { icon: <Sparkles className="w-6 h-6" />, title: txt.step2Title, text: txt.step2Text },
      { icon: <Clock className="w-6 h-6" />, title: txt.step3Title, text: txt.step3Text },
      { icon: <ThumbsUp className="w-6 h-6" />, title: txt.step4Title, text: txt.step4Text },
    ]
    return (
      <section className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">{txt.processBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">{txt.processTitle1}</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">{txt.processTitle2}</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{txt.processDesc}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="group relative">
                <div className="relative h-full bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-6 border border-zinc-800 group-hover:border-purple-500/30 transition-all text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-purple-400">{step.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section === "guarantee") {
    return (
      <section className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400 font-medium">{txt.guaranteeBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">{txt.guaranteeTitle1}</span>
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">{txt.guaranteeTitle2}</span>
              <span className="text-white">{txt.guaranteeTitle3}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="w-6 h-6" />, title: txt.hostingTitle, text: txt.hostingText },
              { icon: <Clock className="w-6 h-6" />, title: txt.supportTitle, text: txt.supportText },
              { icon: <Award className="w-6 h-6" />, title: txt.satisfactionTitle, text: txt.satisfactionText },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 rounded-2xl blur-xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative h-full bg-gradient-to-br from-zinc-900/80 to-black rounded-2xl p-8 border border-zinc-800 group-hover:border-amber-500/30 transition-all text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <span className="text-amber-400">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}