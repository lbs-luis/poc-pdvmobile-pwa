import { ChevronRight, ShoppingCart } from 'lucide-react'
import type { ComponentProps } from 'react'
import { useCart } from '../../../hooks/useCart'
import { cn } from '../../../lib/cn'

interface FloatingCartButtonProps extends ComponentProps<'button'> {
  totalItems?: number
  totalPrice?: number
}

export function FloatingCartButton({
  className,
  totalItems,
  totalPrice,
}: FloatingCartButtonProps) {
  const { totalItems: storeTotalItems, totalPrice: storeTotalPrice } = useCart()

  const items = totalItems ?? storeTotalItems
  const price = totalPrice ?? storeTotalPrice

  const semibold_text = 'text-[0.938rem] font-semibold text-white'
  const normal_text = 'text-[0.938rem] font-normal text-white'

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between gap-6 rounded-md bg-slate-950 px-4 py-3',
        className,
      )}
    >
      <div className="relative">
        <ShoppingCart size={24} className="text-white" />
        <span className="text-bg-slate-950 absolute -top-3 left-3 box-border w-8 rounded-full border-4 border-slate-950 bg-white px-1 py-px text-xs font-medium">
          {items}
        </span>
      </div>
      <span className="flex gap-1">
        <p className={cn(normal_text)}>Valor total</p>
        <p className={cn(semibold_text)}>
          {price.toFixed(2).replace('.', ',')}
        </p>
      </span>
      <ChevronRight size={24} className="text-white" />
    </button>
  )
}
