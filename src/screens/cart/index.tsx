import { useState } from 'react'

import { useCart } from '../../hooks/useCart'
import { ProductKeyboard } from '../product-keyboard'
import { CartFooter } from './components/cart-layout/cart-footer'
import { CartHeader } from './components/cart-layout/cart-header'
import { CartProductList } from './components/cart-layout/cart-product-list'
import { CaCamera } from './components/action-buttons/ca-camera'
import { CaKeyboard } from './components/action-buttons/ca-keyboard'
import { CaSearch } from './components/action-buttons/ca-search'
import { CartInputKeyboard } from './components/cart-input-keyboard'
import { CartItemCounter } from './components/cart-item-counter'
import { CompleteCartButton } from './components/complete-cart-button'

export default function CartScreen() {
  const [isProductKeyboardOpen, setIsProductKeyboardOpen] = useState(false)
  const { totalItems, totalPrice } = useCart()

  const handleOpenProductKeyboard = () => {
    setIsProductKeyboardOpen(true)
  }

  const handleCloseProductKeyboard = () => {
    setIsProductKeyboardOpen(false)
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
          <CaKeyboard onAction={handleOpenProductKeyboard} />
          <CaCamera />
          <CaSearch />
        </div>
        <CompleteCartButton total={displayPrice} />
      </CartFooter>
      <ProductKeyboard
        isOpen={isProductKeyboardOpen}
        close={handleCloseProductKeyboard}
      />
    </>
  )
}
