import { ShoppingCart } from 'lucide-react'

export function CartItemCounter({ items }: { items: number }) {
  return (
    <div className="flex w-full items-center border-b border-neutral-300 px-4 py-3">
      <div className="flex items-center gap-2">
        <ShoppingCart size={20} className="text-neutral-800" />
        <span className="text-base font-bold text-neutral-800">
          Itens {items}
        </span>
      </div>
    </div>
  )
}
