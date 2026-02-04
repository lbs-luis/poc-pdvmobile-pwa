import type { ManifestOptions } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
  lang: 'pt-BR',
  name: 'PDV Mobile PWA',
  short_name: 'PDV Mobile PWA',
  description: 'Aplicação PWA representando o PDV Mobile',
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
      src: '/screenshot-742x422',
      sizes: '742x422',
      label: 'Figma flux screenshot',
      platform: 'wide',
    },
    {
      src: '/screenshot-512x512.png',
      sizes: '512x512',
      label: 'Figma flux screenshot',
    },
  ],
  start_url: '/',
  theme_color: '#cee085',
  background_color: '#cee085',
  display_override: ['fullscreen', 'minimal-ui'],
  display: 'standalone',
}

export default manifest
