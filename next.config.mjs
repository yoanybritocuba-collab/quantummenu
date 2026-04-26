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

  // AÑADIMOS LAS CABECERAS DE SEGURIDAD AQUÍ
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
        ],
      },
    ];
  },
};

export default nextConfig;