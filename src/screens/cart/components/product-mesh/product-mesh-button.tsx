import { Plus } from 'lucide-react'
import type { Product } from '../../../../database'
import { useCartStore } from '../../../../stores/cart-store'

interface ProductMeshButtonProps {
  product: Product
}

export function ProductMeshButton({ product }: ProductMeshButtonProps) {
  const addProduct = useCartStore((state) => state.addProduct)

  return (
    <div className="flex h-26 w-full flex-col rounded-md bg-neutral-200 p-2">
      <span className="my-auto size-fit text-sm font-normal text-neutral-800">
        {product.description}
      </span>
      <div className="mt-auto flex w-full items-center justify-between">
        <span className="text-sm font-semibold text-neutral-800">
          {product.price.toFixed(2).replace('.', ',')}
        </span>
        <button 
          className="flex size-7 items-center justify-center rounded-full bg-white p-0 text-neutral-800"
          onClick={() => addProduct(product)}
        >
          <Plus size={14} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
