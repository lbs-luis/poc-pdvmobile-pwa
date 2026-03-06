import type { Product } from '../../../database'
import { useCartStore } from '../../../stores/cart-store'

interface ProductMeshButtonProps {
  product: Product
  close: () => void
}

export function ProductMeshButton({ product, close }: ProductMeshButtonProps) {
  const addProduct = useCartStore((state) => state.addProduct)

  const handleClick = () => {
    addProduct(product, 1)
    close()
  }

  return (
    <div
      className="flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-xl p-2 transition duration-150 ease-in-out active:scale-95"
      style={{ backgroundColor: product.color }}
      onClick={handleClick}
    >
      <span className="text-sm font-medium text-neutral-800">{product.description}</span>
      {product.weight && <span className="text-xs text-neutral-600">{product.weight}</span>}
    </div>
  )
}
