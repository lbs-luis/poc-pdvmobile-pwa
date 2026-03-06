import type { ComponentProps } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { cn } from '../../../../lib/cn'
import type { CartItem } from '../../../../stores/cart-store'

const CartProductListItem = ({ item }: { item: CartItem }) => {
  return (
    <div className="flex flex-row items-center justify-between py-3">
      <div className="flex h-fit w-full flex-col gap-1">
        <span className="text-sm font-medium text-neutral-800">
          {item.product.description}
        </span>
        <div className="flex flex-row items-center gap-3">
          <span className="text-xs text-neutral-500">
            Cod. {item.product.id}
          </span>
          <span className="text-xs text-neutral-800">
            {item.quantity}x {item.product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
      <span className="text-sm font-bold text-neutral-800">
        {item.total.toFixed(2).replace('.', ',')}
      </span>
    </div>
  )
}

export function CartProductList({ className }: ComponentProps<'div'>) {
  const { items } = useCart()

  return (
    <div className={cn('flex min-h-0 flex-1 flex-col', className)}>
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-4">
        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-neutral-400">Nenhum item no carrinho</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.product.id}>
              <CartProductListItem item={item} />
              <div className="border-b border-neutral-100" />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
