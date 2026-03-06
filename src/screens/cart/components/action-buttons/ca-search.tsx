import { Search } from 'lucide-react'

interface CaSearchProps {
  onClick?: () => void
}

export function CaSearch({ onClick }: CaSearchProps) {
  return (
    <button
      onClick={onClick}
      className="flex size-14 items-center justify-center rounded-full border border-slate-400 bg-slate-200 transition duration-100 active:scale-95"
    >
      <Search className="h-7 w-7 shrink-0 text-slate-900" strokeWidth={2} />
    </button>
  )
}
