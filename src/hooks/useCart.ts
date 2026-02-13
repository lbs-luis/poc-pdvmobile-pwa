import { useMemo } from 'react'
import type { CartItem } from '../stores/cart-store'
import { useCartStore } from '../stores/cart-store'

export interface UseCartReturn {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addProduct: (product: import('../database').Product) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeProduct: (productId: string) => void
}

export function useCart(): UseCartReturn {
  const items = useCartStore((state) => state.items)
  const addProduct = useCartStore((state) => state.addProduct)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeProduct = useCartStore((state) => state.removeProduct)

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  const totalPrice = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    )
  }, [items])

  return {
    items,
    totalItems,
    totalPrice,
    addProduct,
    updateQuantity,
    removeProduct,
  }
}
