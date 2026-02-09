import { useState } from 'react'

import { CartFooter } from './components/cart-layout/cart-footer'
import { CartHeader } from './components/cart-layout/cart-header'
import { CartProductList } from './components/cart-layout/cart-product-list'
import { FloatingAddButton } from './components/floating-add-button'
import { FloatingCartButton } from './components/floating-cart-button'
import { ProductKeyboard } from './components/product-keyboard'

export default function CartScreen() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

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
        <FloatingCartButton className="mx-auto" />
      </CartFooter>
      <ProductKeyboard
        isKeyboardOpen={isKeyboardOpen}
        close={handleToggleKeyboardOpen}
      />
    </>
  )
}
