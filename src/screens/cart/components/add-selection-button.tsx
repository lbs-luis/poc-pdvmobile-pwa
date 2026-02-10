import type { ComponentProps } from 'react'
import { useCartStore } from '../../../stores/cart-store'
import { cn } from '../../../lib/cn'
import { usePreselectionStore } from '../../../stores/preselection-store'

interface AddSelectionButtonProps extends ComponentProps<'button'> {
  onClose?: () => void
}

export function AddSelectionButton({ className, onClose, ...props }: AddSelectionButtonProps) {
  const items = usePreselectionStore((state) => state.items)
  const clearItems = usePreselectionStore((state) => state.clearItems)
  const addProduct = useCartStore((state) => state.addProduct)
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  const handleClick = () => {
    if (totalItems === 0 && onClose) {
      onClose()
      return
    }
    
    // Add all selected items to cart
    items.forEach(({ product, quantity }) => {
      for (let i = 0; i < quantity; i++) {
        addProduct(product)
      }
    })
    
    clearItems()
    onClose?.()
  }

  const getButtonText = () => {
    if (totalItems === 0) {
      return 'Voltar'
    }
    return `Adicionar ${totalItems} item${totalItems !== 1 ? 's' : ''}`
  }

  return (
    <button
      className={cn(
        'mt-auto flex h-fit w-full items-center justify-center rounded-md bg-slate-950 px-4 py-3',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="text-[0.938rem] font-normal text-white">
        {getButtonText()}
      </span>
    </button>
  )
}