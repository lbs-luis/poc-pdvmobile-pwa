import { Plus } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

export function FloatingAddButton({ className }: ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'flex size-fit items-center justify-center rounded-full bg-neutral-800 p-3.5 text-white shadow-lg shadow-black',
        className,
      )}
    >
      <Plus size={24} className="shrink-0" />
    </button>
  )
}
