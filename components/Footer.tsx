import { Zap, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-7 h-7 rounded-lg bg-electric-500/10 border border-electric-500/30 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-electric-400" />
              </div>
              <span className="font-semibold text-white text-sm">
                TuNegocio<span className="text-electric-400">Digital</span>
              </span>
            </Link>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              Especialistas en cartas digitales con QR y páginas web profesionales para negocios
              locales en España.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Servicios
            </p>
            <ul className="space-y-2">
              {[
                { label: "Carta Digital con QR", href: "#servicios" },
                { label: "Diseño Web Profesional", href: "#servicios" },
                { label: "Panel de Administración", href: "#demo" },
                { label: "SEO para Negocios", href: "#servicios" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/35 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Contacto
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-white/35 hover:text-white/70 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-neon-green/60" />
                  WhatsApp: +34 600 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@tunegociodigital.com"
                  className="text-xs text-white/35 hover:text-white/70 transition-colors"
                >
                  hola@tunegociodigital.com
                </a>
              </li>
              <li>
                <span className="text-xs text-white/25">España · Atención en español</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} TuNegocioDigital. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
