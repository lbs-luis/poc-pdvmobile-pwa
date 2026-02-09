import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'
import type { CartItem } from '../../../../stores/cart-store'
import { useCart } from '../../../../hooks/useCart'
import { QuantityButton } from '../quantity-button'

const CartProductListHeader = () => (
  <div className="grid h-10 w-full grid-cols-[2fr_1fr_7rem] items-center gap-4 px-4 py-2">
    <span className="size-fit text-sm font-semibold text-neutral-800 capitalize">
      Produto
    </span>
    <span className="w-full text-end text-sm font-semibold text-neutral-800 capitalize">
      Valor Un
    </span>
    <span className="w-full text-end text-sm font-semibold text-neutral-800 capitalize">
      Quantidade
    </span>
  </div>
)

const CartProductListItem = ({ item }: { item: CartItem }) => {
  const semibold_text = 'text-sm font-medium text-neutral-800'
  const normal_text = 'text-xs font-normal text-neutral-500'
  const total = item.product.price * item.quantity

  return (
    <div className="grid w-full grid-cols-[2fr_1fr_7rem] gap-4 py-2">
      <div className="flex w-full flex-col gap-1.5">
        <span className={cn(semibold_text)}>{item.product.description}</span>
        <span className={cn(normal_text, 'flex gap-1')}>
          <p>#{item.product.id}</p>
        </span>
      </div>
      <div className="flex w-full flex-col gap-1.5 text-end">
        <span className={cn(semibold_text)}>
          {item.product.price.toFixed(2).replace('.', ',')}
        </span>
        <span className={cn(normal_text)}>
          Total {total.toFixed(2).replace('.', ',')}
        </span>
      </div>
      <QuantityButton className="m-auto" item={item} />
    </div>
  )
}

export function CartProductList({ className }: ComponentProps<'div'>) {
  const { items } = useCart()

  return (
    <div className={cn('flex min-h-0 flex-1 flex-col', className)}>
      <CartProductListHeader />
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 pt-2 pb-35">
        {items.map((item) => (
          <CartProductListItem key={item.product.id} item={item} />
        ))}
      </div>
    </div>
  )
}
