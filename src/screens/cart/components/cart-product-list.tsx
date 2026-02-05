import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'
import { QuantityButton } from './quantity-button'

const CartProductListHeader = () => (
  <div className="grid h-10 w-full grid-cols-[2fr_1fr_7rem] items-center gap-4 px-4 py-2">
    <span className="size-fit text-sm font-semibold text-neutral-800 capitalize">
      Produto
    </span>
    <span className="w-full text-end text-sm font-semibold text-neutral-800 capitalize">
      Valor Un
    </span>
    <span className="w-full text-end text-sm font-semibold text-neutral-800 capitalize">
      Qaunidade
    </span>
  </div>
)

const CartProductListItem = () => {
  const semibold_text = 'text-sm font-medium text-neutral-800'
  const normal_text = 'text-xs font-normal text-neutral-500'
  return (
    <div className="grid w-full grid-cols-[2fr_1fr_7rem] gap-4 py-2">
      <div className="flex w-full flex-col gap-1.5">
        <span className={cn(semibold_text)}>Trufa tradicional 30g</span>
        <span className={cn(normal_text, 'flex gap-1')}>
          <p>Cod. 00909</p>
          <p>EAN 2004489</p>
        </span>
      </div>
      <div className="flex w-full flex-col gap-1.5 text-end">
        <span className={cn(semibold_text)}>9,99</span>
        <span className={cn(normal_text)}>Total 18,99</span>
      </div>
      <QuantityButton className="m-auto" />
    </div>
  )
}

export function CartProductList({ className }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex min-h-0 flex-1 flex-col', className)}>
      <CartProductListHeader />
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 pt-2 pb-35">
        {Array.from({ length: 20 }).map((_, i) => (
          <CartProductListItem key={i} />
        ))}
      </div>
    </div>
  )
}
