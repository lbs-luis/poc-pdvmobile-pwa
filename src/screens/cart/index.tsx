import { useState } from 'react'

import { useCart } from '../../hooks/useCart'
import { CartFooter } from './components/cart-layout/cart-footer'
import { CartHeader } from './components/cart-layout/cart-header'
import { CartProductList } from './components/cart-layout/cart-product-list'
import { CACamera } from './components/flux2/cart-action-buttons/ca-camera'
import { CAKeyboard } from './components/flux2/cart-action-buttons/ca-keyboard'
import { CASearch } from './components/flux2/cart-action-buttons/ca-search'
import { CartInputKeyboard } from './components/flux2/cart-input-keyboard'
import { CartItemCounter } from './components/flux2/cart-item-counter'
import { CompleteCartButton } from './components/flux2/complete-cart-button'
import { ProductKeyboard } from './components/product-keyboard'

export default function CartScreen() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const { totalItems, totalPrice } = useCart()

  function handleToggleKeyboardOpen() {
    setIsKeyboardOpen(!isKeyboardOpen)
  }

  const displayPrice = totalPrice.toFixed(2).replace('.', ',')

  return (
    <>
      <CartHeader />
      <CartItemCounter items={totalItems} />
      <CartProductList className="mt-2" />
      <div className="flex w-full px-4">
        <CartInputKeyboard />
      </div>
      <CartFooter className="mt-4">
        <div className="flex h-fit w-full flex-row justify-between px-10">
          <CAKeyboard onAction={handleToggleKeyboardOpen} />
          <CACamera />
          <CASearch />
        </div>
        <CompleteCartButton total={displayPrice} />
      </CartFooter>
      <ProductKeyboard
        isKeyboardOpen={isKeyboardOpen}
        close={handleToggleKeyboardOpen}
      />
    </>
  )
}
