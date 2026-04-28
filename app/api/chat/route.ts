import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Inicializar Groq con tu API key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

// Prompt del sistema
const getSystemPrompt = (language: string) => {
  if (language === 'es') {
    return `Eres "QuantumBot", un asistente virtual AMABLE y CERCANO de QuantumMenu.

INFORMACIÓN OFICIAL DE QUANTUMMENU:

🏷️ PRECIOS WEB:
- Web Simple: 300€ (5 páginas, responsive, contacto, SEO básico)
- Web Avanzada: 400€ (páginas ilimitadas, blog, SEO avanzado, analytics, dominio)
- Web Premium: 550€ (E-commerce, tienda online, pasarela de pagos, SSL, dominio GRATIS 1 año)

🏷️ PLANES QR:
- QR Básico: 300€ (10 adhesivos + menú digital + hosting 1 año)
- QR Estándar: 320€ (20 adhesivos + menú digital + hosting 1 año) MÁS POPULAR
- QR Pro: 350€ (30 adhesivos + panel premium + diseño personalizado) RECOMENDADO
- Plan QR Mensual: 30€/mes (10 adhesivos + panel admin + hosting)
- Plan QR+ Mensual: 35€/mes (15 adhesivos + panel completo + estadísticas) RECOMENDADO
- Plan Full Mensual: 40€/mes (Web + 20 adhesivos + hosting+dominio + soporte 24/7)

⏱️ TIEMPOS DE ENTREGA:
- Webs: 30 a 60 días (según complejidad)
- QR físicos a España: aproximadamente 1 MES
- QR fuera de España: consultar
- Se requiere SEÑAL (pago inicial) para garantizar el proyecto

📞 CONTACTO:
- WhatsApp: +34 624 497 851
- Email: yoanybritocuba@gmail.com
- Instagram: @yoany_69

INSTRUCCIONES:
1. Responde en ESPAÑOL
2. Mantén el CONTEXTO de la conversación
3. Sé breve pero completo
4. SI preguntan por un plan específico, detalla sus características
5. SI preguntan "qué incluye", enumera las características
6. Sé amable y usa emojis ocasionalmente`;
  }

  return `You are "QuantumBot", a friendly assistant of QuantumMenu. Answer in ENGLISH.

QUANTUMMENU INFO:
- Simple Web: €300 (5 pages, responsive, contact, basic SEO)
- Advanced Web: €400 (unlimited pages, blog, advanced SEO, analytics, domain)
- Premium Web: €550 (E-commerce, online store, payment gateway, SSL, FREE domain 1 year)
- QR Basic: €300 (10 stickers + digital menu + 1 year hosting)
- QR Standard: €320 (20 stickers + digital menu + 1 year hosting) MOST POPULAR
- QR Pro: €350 (30 stickers + premium panel + custom design) RECOMMENDED
- Delivery: Websites 30-60 days, Physical QR to Spain ~1 month

Contact: WhatsApp +34 624 497 851, Email: yoanybritocuba@gmail.com`;
};

export async function POST(req: NextRequest) {
  try {
    const { messages, language = "es" } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages required' }, { status: 400 });
    }

    const systemPrompt = getSystemPrompt(language);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.slice(-15), // Mantener contexto
      ],
      temperature: 0.7,
      max_tokens: 600,
    });

    const reply = completion.choices[0]?.message?.content || "No pude procesar tu consulta. ¿Puedes intentar de nuevo?";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      reply: "❌ Hubo un error. Contacta por WhatsApp: +34 624 497 851" 
    }, { status: 500 });
  }
}