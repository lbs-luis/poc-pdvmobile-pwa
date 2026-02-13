import { ShoppingCart } from 'lucide-react'

export function CartItemCounter({ items }: { items: number }) {
  return (
    <div className="flex w-full items-center border-b border-neutral-300 px-4 py-3">
      <div className="flex gap-1">
        <ShoppingCart size={20} className="neutral-800 shrink-0" />
        <span className="flex text-sm font-normal text-neutral-800">Itens</span>
        <span className="flex text-sm font-semibold text-neutral-800">
          {items}
        </span>
      </div>
    </div>
  )
}
