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
      className="flex h-26 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-neutral-800 transition duration-150 ease-in-out active:scale-95 active:bg-neutral-100"
      onClick={handleClick}
    >
      <span className="size-fit text-sm font-normal">
        {product.description}
      </span>
    </div>
  )
}
