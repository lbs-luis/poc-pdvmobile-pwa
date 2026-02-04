import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function RootPath() {
  const navigate = useNavigate()
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      navigate('/home')
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [navigate])

  const handleInstall = async () => {
    if (!installPrompt) return
    await installPrompt.prompt()
    const { outcome } = await installPrompt.userChoice
    if (outcome === 'accepted') {
      navigate('/home')
    }
  }

  if (!installPrompt) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white">Checking...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <button
        onClick={handleInstall}
        className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-black"
      >
        Install App
      </button>
    </div>
  )
}
