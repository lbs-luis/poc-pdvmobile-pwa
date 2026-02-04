import type { ManifestOptions } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
  lang: 'pt-BR',
  name: 'PDV Mobile PWA',
  short_name: 'PDV Mobile PWA',
  description:
    'Poc do pdv mobile usando PWA para instalar nativamente no dispositivo',
  icons: [
    {
      src: '/favicon.png',
      sizes: '48x48',
      type: 'image/png',
    },
    {
      src: '/pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  screenshots: [
    {
      src: '/pwa-screenshot.png',
      sizes: '969x338',
      label: 'Figma flux screenshot',
      platform: 'wide',
    },
    {
      src: '/pwa-512x512.png',
      sizes: '512x512',
      label: 'PDV Mobile logo',
    },
  ],
  start_url: '/',
  theme_color: '#cee085',
  background_color: '#cee085',
  display_override: ['fullscreen', 'minimal-ui'],
  display: 'standalone',
}

export default manifest
