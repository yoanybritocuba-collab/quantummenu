import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cartas Digitales QR y Diseño Web Profesional | TuNegocio Digital",
  description:
    "Especialistas en cartas digitales con código QR para restaurantes y páginas web profesionales para negocios. Actualiza tu menú digital al instante. Presupuesto sin compromiso.",
  keywords: [
    "carta digital QR",
    "menú digital restaurante",
    "diseño web para negocios",
    "crear página web profesional",
    "menú digital con QR",
    "carta digital restaurante",
    "web profesional negocios",
    "desarrollo web freelance",
  ],
  authors: [{ name: "TuNegocio Digital" }],
  creator: "TuNegocio Digital",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tunegociodigital.com",
    title: "Cartas Digitales QR y Páginas Web Profesionales",
    description:
      "Transforma tu negocio con una carta digital con QR o una web profesional. Sin complicaciones técnicas. Gestión sencilla. Resultados desde el primer día.",
    siteName: "TuNegocio Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartas Digitales QR y Diseño Web Profesional",
    description:
      "Especialistas en cartas digitales con QR y webs profesionales para negocios.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://tunegociodigital.com" />
      </head>
      <body className="bg-dark-950 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
