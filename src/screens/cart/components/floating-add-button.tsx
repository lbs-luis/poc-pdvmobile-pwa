import { Plus } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

export function FloatingAddButton({
  className,
  onClick,
}: ComponentProps<'button'>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex size-fit items-center justify-center rounded-full bg-neutral-800 p-3.5 text-white shadow-lg shadow-black transition-transform duration-75 ease-out active:scale-90',
        className,
      )}
    >
      <Plus size={24} className="pointer-events-none shrink-0" />
    </button>
  )
}
