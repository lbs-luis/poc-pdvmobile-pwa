import { useState } from 'react'

import { CartFooter } from './components/cart-layout/cart-footer'
import { CartHeader } from './components/cart-layout/cart-header'
import { CartProductList } from './components/cart-layout/cart-product-list'
import { FloatingAddButton } from './components/floating-add-button'
import { FloatingCartButton } from './components/floating-cart-button'
import { ProductKeyboard } from './components/product-keyboard'
import { useCartStore } from '../../stores/cart-store'

export default function CartScreen() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const getTotalItems = useCartStore((state: any) => state.getTotalItems)
  const getTotalPrice = useCartStore((state: any) => state.getTotalPrice)

  function handleToggleKeyboardOpen() {
    setIsKeyboardOpen(!isKeyboardOpen)
  }

  return (
    <>
      <CartHeader />
      <CartProductList className="mt-2" />
      <CartFooter className="fixed right-0 bottom-0 left-0">
        <FloatingAddButton
          className="mx-auto"
          onClick={handleToggleKeyboardOpen}
        />
        <FloatingCartButton 
          className="mx-auto"
          totalItems={getTotalItems()}
          totalPrice={getTotalPrice()}
        />
      </CartFooter>
      <ProductKeyboard
        isKeyboardOpen={isKeyboardOpen}
        close={handleToggleKeyboardOpen}
      />
    </>
  )
}
