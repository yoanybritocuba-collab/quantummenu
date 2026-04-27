// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mantenemos las configuraciones que ya tenías
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // DESACTIVAR INDICADOR DE DESARROLLO (logo de Vercel)
  devIndicators: {
    autoPrerender: false,
    buildActivity: false,
  },

  // Cabeceras de seguridad y CONTROL DE CACHÉ
  async headers() {
    return [
      {
        // Aplica las cabeceras a todas las rutas de tu web
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // 🔥 NUEVA CABECERA PARA EVITAR CACHÉ DE TRADUCCIONES 🔥
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate, max-age=0',
          },
        ],
      },
      // Cabeceras específicas para archivos JS/CSS (permite caché pero con validación)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;