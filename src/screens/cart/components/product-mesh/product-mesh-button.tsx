import type { Product } from '../../../../database'
import { useAmount } from '../../../../contexts/amount-context'
import { usePreselectionStore } from '../../../../stores/preselection-store'

interface ProductMeshButtonProps {
  product: Product
}

export function ProductMeshButton({ product }: ProductMeshButtonProps) {
  const { currentAmount } = useAmount()
  const { addItem, removeItem, items } = usePreselectionStore()

  const isSelected = items.some(item => item.product.id === product.id)
  const selectedItem = items.find(item => item.product.id === product.id)

  const handleClick = () => {
    if (isSelected) {
      removeItem(product.id)
    } else {
      addItem(product, currentAmount)
    }
  }

  return (
    <div
      className={`flex h-26 w-full flex-col items-center justify-center rounded-md p-4 transition duration-150 ease-in-out active:scale-95 ${
        isSelected 
          ? 'bg-neutral-600 text-white' 
          : 'bg-neutral-200 text-neutral-800 active:bg-neutral-100'
      }`}
      onClick={handleClick}
    >
      <span className="size-fit text-sm font-normal">
        {product.description}
      </span>
      {isSelected && selectedItem && (
        <span className="text-xs font-semibold">
          {selectedItem.quantity}x
        </span>
      )}
    </div>
  )
}
