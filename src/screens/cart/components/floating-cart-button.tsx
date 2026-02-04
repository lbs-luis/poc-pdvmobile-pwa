import { ChevronRight } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

export function FloatingCartButton({ className }: ComponentProps<'button'>) {
  const semibold_text = 'text-sm font-semibold text-white'
  const normal_text = 'text-sm font-normal text-white'

  return (
    <button
      className={cn(
        'flex w-full items-center gap-6 rounded-md bg-neutral-800 px-4 py-3',
        className,
      )}
    >
      <div className="flex w-full items-center justify-between">
        <span className="flex gap-1">
          <p className={cn(semibold_text)}>999</p>
          <p className={cn(normal_text)}>Itens</p>
        </span>
        <span className="flex gap-1">
          <p className={cn(semibold_text)}>Total</p>
          <p className={cn(normal_text)}>99.999,99</p>
        </span>
      </div>
      <ChevronRight size={24} className="text-white" />
    </button>
  )
}
