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

  // AÑADIMOS LAS CABECERAS DE SEGURIDAD AQUÍ
  async headers() {
    return [
      {
        // Aplica las cabeceras a todas las rutas de tu web
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Impide que tu web sea "secuestrada" dentro de un iframe malicioso [citation:7][citation:10]
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Evita que el navegador adivine el tipo de archivo [citation:7][citation:10]
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin', // Controla la información que se envía a otras webs [citation:10]
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Activa la protección contra Cross-Site Scripting (XSS) en navegadores antiguos [citation:10]
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Bloquea el acceso a la cámara, micrófono y geolocalización [citation:10]
          },
        ],
      },
    ];
  },
};

export default nextConfig;