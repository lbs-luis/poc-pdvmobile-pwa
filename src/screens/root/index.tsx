import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface NavigatorStandalone extends Navigator {
  standalone?: boolean
}

export default function RootPath() {
  const navigate = useNavigate()
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [isCheckingInstall, setIsCheckingInstall] = useState(true)

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as NavigatorStandalone).standalone ||
      document.referrer.includes('android-app://')

    if (isStandalone) {
      navigate('/home')
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
      setIsCheckingInstall(false)
    }

    window.addEventListener('beforeinstallprompt', handler)

    const timeout = setTimeout(() => {
      if (!installPrompt) {
        navigate('/home')
      }
    }, 1500)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      clearTimeout(timeout)
    }
  }, [navigate, installPrompt])

  const handleInstall = async () => {
    if (!installPrompt) return

    await installPrompt.prompt()
    const { outcome } = await installPrompt.userChoice

    if (outcome === 'accepted') {
      navigate('/home')
    }
  }

  if (isCheckingInstall && !installPrompt) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white">Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleInstall}
          className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-black"
        >
          Install App
        </button>
        <button
          onClick={() => navigate('/home')}
          className="text-sm text-gray-400 underline"
        >
          Continue in browser
        </button>
      </div>
    </div>
  )
}
