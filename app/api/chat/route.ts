import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const getSystemPrompt = (language: string) => {
  if (language === 'es') {
    return `Eres "QuantumBot", un asistente virtual AMABLE y CERCANO de QuantumMenu.

INFORMACIÓN OFICIAL:
- Web Simple: 300€ (5 páginas, responsive, contacto, SEO básico)
- Web Avanzada: 400€ (páginas ilimitadas, blog, SEO avanzado, analytics, dominio)
- Web Premium: 550€ (E-commerce, tienda online, pasarela de pagos, SSL, dominio GRATIS 1 año)
- QR Básico: 300€ (10 adhesivos + menú digital + hosting 1 año)
- QR Estándar: 320€ (20 adhesivos + menú digital + hosting 1 año)
- QR Pro: 350€ (30 adhesivos + panel premium + diseño personalizado)
- Plan QR Mensual: 30€/mes
- Plan QR+ Mensual: 35€/mes
- Plan Full Mensual: 40€/mes
- Tiempos: Webs 30-60 días, QR a España ~1 mes
- Contacto: WhatsApp +34 624 497 851

Responde en ESPAÑOL, mantén contexto, sé breve y útil.`;
  }
  return `You are "QuantumBot", a friendly assistant of QuantumMenu. Answer in ENGLISH. Contact: WhatsApp +34 624 497 851`;
};

export async function POST(req: NextRequest) {
  try {
    const { messages, language = "es" } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages required' }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: getSystemPrompt(language) },
        ...messages.slice(-10),
      ],
      temperature: 0.7,
      max_tokens: 600,
    });

    const reply = completion.choices[0]?.message?.content || "No pude procesar tu consulta.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ reply: "❌ Error. Contacta por WhatsApp +34 624 497 851" }, { status: 500 });
  }
}