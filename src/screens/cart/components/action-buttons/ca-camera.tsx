import { Camera } from 'lucide-react'

export function CaCamera() {
  return (
    <button className="flex size-14 items-center justify-center rounded-full border border-slate-400 bg-slate-200 transition duration-100 active:scale-95">
      <Camera className="h-7 w-8 shrink-0 text-slate-900" strokeWidth={2} />
    </button>
  )
}
