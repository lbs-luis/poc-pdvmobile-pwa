import { ChevronRight, Trash } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'
import { useCart } from '../../../hooks/useCart'
import type { CartItem } from '../../../stores/cart-store'

interface QuantityButtonProps extends ComponentProps<'button'> {
  item: CartItem
}

export function QuantityButton({ className, item }: QuantityButtonProps) {
  const { updateQuantity } = useCart()

  function handleSubtract() {
    updateQuantity(item.product.id, item.quantity - 1)
  }

  function handleAdd() {
    updateQuantity(item.product.id, item.quantity + 1)
  }

  return (
    <button
      className={cn(
        'grid h-fit w-28 grid-cols-3 items-center rounded-full bg-neutral-100 p-2',
        className,
      )}
    >
      <Trash size={16} className="mx-auto" onClick={handleSubtract} />
      <span className="mx-auto size-fit">{item.quantity}</span>
      <ChevronRight
        size={16}
        className="mx-auto"
        onClick={handleAdd}
      />
    </button>
  )
}
