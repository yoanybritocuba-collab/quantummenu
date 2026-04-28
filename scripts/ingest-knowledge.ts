// scripts/ingest-knowledge.ts
import "dotenv/config";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { Document } from "@langchain/core/documents";

// Verificar que las claves existen
console.log("🔑 Verificando variables de entorno...");
console.log("DEEPSEEK_API_KEY:", process.env.DEEPSEEK_API_KEY ? "✅ Presente" : "❌ No encontrada");
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY ? "✅ Presente" : "❌ No encontrada");

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ ERROR: OPENAI_API_KEY no está configurada");
  process.exit(1);
}

// 📚 BASE DE CONOCIMIENTO COMPLETA DE QUANTUMMENU
const knowledgeBase = [
  // ==================== QR - PAGO ÚNICO ====================
  {
    title: "QR Básico",
    content: `Plan QR Básico de QuantumMenu. Precio: 300€ pago único. Incluye: 10 adhesivos QR físicos (chapa con grabado láser), QR funcional para menú digital, Carta digital interactiva, Soporte por WhatsApp, Hosting 1 año gratis, Actualizaciones gratuitas, Soporte técnico incluido.`
  },
  {
    title: "QR Estándar",
    content: `Plan QR Estándar de QuantumMenu. Precio: 320€ pago único. Incluye: 20 adhesivos QR físicos (chapa con grabado láser), QR funcional para menú digital, Carta digital interactiva, Soporte por WhatsApp, Hosting 1 año gratis. Este plan es el MÁS POPULAR.`
  },
  {
    title: "QR Pro",
    content: `Plan QR Pro de QuantumMenu. Precio: 350€ pago único. Incluye: 30 adhesivos QR físicos (chapa con grabado láser), QR funcional para menú digital, Carta digital interactiva, Panel de administración PREMIUM, Diseño personalizado del QR, Hosting 1 año gratis. Este plan es RECOMENDADO.`
  },
  // ==================== SUSCRIPCIONES MENSUALES ====================
  {
    title: "Plan QR Mensual",
    content: `Plan QR de Suscripción Mensual de QuantumMenu. Precio: 30€/mes. Sin permanencia, cancela cuando quieras. Incluye: 10 adhesivos QR físicos, QR funcional para menú digital, Carta digital interactiva, Panel de administración, Actualizaciones en tiempo real, Soporte por email, Hosting incluido.`
  },
  {
    title: "Plan QR+ Mensual",
    content: `Plan QR+ de Suscripción Mensual de QuantumMenu. Precio: 35€/mes. Sin permanencia, cancela cuando quieras. Incluye: 15 adhesivos QR físicos, QR funcional para menú digital, Carta digital interactiva, Panel de administración COMPLETO, Actualizaciones en tiempo real, Soporte PRIORITARIO, Estadísticas de escaneos, Hosting incluido. Este plan es RECOMENDADO.`
  },
  {
    title: "Plan Full Mensual",
    content: `Plan Full de Suscripción Mensual de QuantumMenu. Precio: 40€/mes. Sin permanencia, cancela cuando quieras. Incluye: Web completa responsive, QR funcional para menú digital, Carta digital interactiva, 20 adhesivos QR físicos, Panel admin unificado, Actualizaciones ILIMITADAS, Soporte 24/7, Hosting + Dominio incluido, Estadísticas avanzadas. Este plan es el MEJOR VALOR.`
  },
  // ==================== DESARROLLO WEB ====================
  {
    title: "Web Simple",
    content: `Plan Web Simple de QuantumMenu. Precio: 300€ pago único. Incluye: Hasta 5 páginas, Diseño responsive profesional, Formulario de contacto, SEO básico, Integración con redes sociales, Hosting 1 año gratis.`
  },
  {
    title: "Web Avanzada",
    content: `Plan Web Avanzada de QuantumMenu. Precio: 400€ pago único. Incluye: Páginas ILIMITADAS, Diseño responsive PREMIUM, Blog integrado, SEO AVANZADO, Panel de analytics, Dominio personalizado, Hosting 1 año gratis. Este plan es RECOMENDADO.`
  },
  {
    title: "Web Premium",
    content: `Plan Web Premium de QuantumMenu. Precio: 550€ pago único. Incluye: E-commerce completo, Tienda online integrada, Pasarela de pagos, Carrito de compras, SEO avanzado + Analytics, Dominio + SSL incluido, Soporte 24/7, Hosting 1 año gratis. Este plan es PRO.`
  },
  // ==================== INFORMACIÓN GENERAL ====================
  {
    title: "QR físicos",
    content: `Los códigos QR físicos de QuantumMenu son de CHAPA con grabado láser de alta calidad, resistentes al agua y al desgaste. Se envían por mensajería. El COSTO DE ENVÍO NO ESTÁ INCLUIDO. Tiempo de entrega: 3-5 días hábiles.`
  },
  {
    title: "Beneficios",
    content: `Todos los planes de QuantumMenu incluyen: Hosting SEGURO, Actualizaciones GRATUITAS, Soporte TÉCNICO incluido.`
  },
  {
    title: "Contacto",
    content: `Contacto de QuantumMenu: WHATSAPP: +34 624 497 851 (respuesta rápida), EMAIL: yoanybritocuba@gmail.com, INSTAGRAM: @yoany_69. Horario: Lunes a Viernes de 9:00 a 20:00.`
  },
  {
    title: "Contratación",
    content: `Para contratar cualquier plan de QuantumMenu: 1. Contacta por WHATSAPP al +34 624 497 851, 2. Indica qué plan te interesa, 3. Un asesor te ayudará, 4. Realizas el pago (transferencia o link), 5. Los QR se envían en 3-5 días, 6. Tu web/menú digital está activo en 24-48 horas.`
  },
  {
    title: "Pagos y cancelación",
    content: `Métodos de pago: Transferencia bancaria y pago por WhatsApp. Las suscripciones mensuales NO TIENEN PERMANENCIA. Puedes cancelar cuando quieras sin compromiso. El costo de envío de QR NO está incluido.`
  },
  {
    title: "Servicios principales",
    content: `QuantumMenu ofrece: DESARROLLO WEB (sitios personalizados, responsive, SEO), MENÚS QR DIGITALES (acceso instantáneo, actualizaciones real-time, sin app), PANEL ADMIN FÁCIL (control total, cambios en tiempo real).`
  }
];

async function main() {
  console.log("🚀 Iniciando creación de base de conocimiento...");
  
  // Crear documentos
  const docs = knowledgeBase.map(item => 
    new Document({
      pageContent: item.content,
      metadata: { source: item.title }
    })
  );
  
  console.log(`📄 Documentos creados: ${docs.length}`);
  
  // Dividir en chunks
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });
  
  const splitDocs = await splitter.splitDocuments(docs);
  console.log(`✂️ Documentos divididos en ${splitDocs.length} chunks`);
  
  // Crear embeddings
  const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: "text-embedding-3-small"
  });
  
  console.log("💾 Guardando en Chroma DB...");
  
  // Guardar en Chroma DB
  const vectorStore = await Chroma.fromDocuments(splitDocs, embeddings, {
    collectionName: "quantummenu_knowledge",
    url: "http://localhost:8000"
  });
  
  console.log("✅ Base de conocimiento creada exitosamente!");
  console.log("🎉 QuantumBot ahora sabe TODO sobre QuantumMenu");
}

main().catch(console.error);