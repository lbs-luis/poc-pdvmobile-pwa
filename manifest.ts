import type { ManifestOptions } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
  lang: 'pt-BR',
  name: 'PDV Mobile PWA',
  short_name: 'PDV Mobile PWA',
  description:
    'Poc do pdv mobile usando PWA para instalar nativamente no dispositivo',
  icons: [
    {
      src: '/pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
  ],
  screenshots: [
    {
      src: '/pwa-512x512.png',
      sizes: '512x512',
      label: 'PDV Mobile screenshot',
      platform: 'wide',
    },
    {
      src: '/pwa-512x512.png',
      sizes: '512x512',
      label: 'PDV Mobile screenshot',
    },
  ],
  start_url: '/',
  theme_color: '#4F46E5',
  background_color: '#4F46E5',
  display_override: ['fullscreen', 'minimal-ui'],
  display: 'standalone',
}

export default manifest
