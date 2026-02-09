import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'
import { ProductMeshButton } from './product-mesh-button'
import { products } from '../../../../database'

export function ProductMesh({ className }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'grid min-h-0 flex-1 grid-cols-2 grid-rows-[repeat(auto-fill,6.5rem)] gap-2 overflow-y-auto px-4',
        className,
      )}
    >
      {products.map((product) => (
        <ProductMeshButton key={product.id} product={product} />
      ))}
    </div>
  )
}
