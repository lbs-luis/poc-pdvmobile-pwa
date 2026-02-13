import { Camera } from 'lucide-react'

export function CACamera() {
  return (
    <button className="flex size-14 items-center justify-center rounded-full bg-blue-600 transition duration-100 active:scale-95">
      <Camera className="h-6 w-6.75 shrink-0 text-white" strokeWidth={2} />
    </button>
  )
}
