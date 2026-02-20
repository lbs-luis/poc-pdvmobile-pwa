import type { ComponentProps } from 'react'
import { products } from '../../../../database'
import { cn } from '../../../../lib/cn'
import { ProductMeshButton } from './product-mesh-button'
interface ProductMeshProps extends ComponentProps<'div'> {
  close: () => void
}
export function ProductMesh({ className, close }: ProductMeshProps) {
  return (
    <div
      className={cn(
        'grid min-h-0 flex-1 grid-cols-3 grid-rows-[repeat(auto-fill,6.5rem)] gap-2 overflow-y-auto px-4',
        className,
      )}
    >
      {products.map((product) => (
        <ProductMeshButton key={product.id} product={product} close={close} />
      ))}
    </div>
  )
}
