import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { ProductKeyboard } from '../product-keyboard'
import { CaCamera } from './components/action-buttons/ca-camera'
import { CaKeyboard } from './components/action-buttons/ca-keyboard'
import { CaSearch } from './components/action-buttons/ca-search'
import { CartInputKeyboard } from './components/cart-input-keyboard'
import { CartItemCounter } from './components/cart-item-counter'
import { CartFooter } from './components/cart-layout/cart-footer'
import { CartHeader } from './components/cart-layout/cart-header'
import { CartProductList } from './components/cart-layout/cart-product-list'
import { CartTotalizer } from './components/complete-cart-button'

export default function CartScreen() {
  const navigate = useNavigate()
  const [isProductKeyboardOpen, setIsProductKeyboardOpen] = useState(false)
  const { totalItems, totalPrice } = useCart()

  const handleOpenProductKeyboard = () => {
    setIsProductKeyboardOpen(true)
  }

  const handleCloseProductKeyboard = () => {
    setIsProductKeyboardOpen(false)
  }

  const handleSearchClick = () => {
    navigate('/product-search')
  }

  const displayPrice = totalPrice.toFixed(2).replace('.', ',')

  return (
    <>
      <CartHeader />
      <CartItemCounter items={totalItems} />
      <CartProductList />
      <div className="flex h-fit w-full px-4">
        <CartInputKeyboard />
      </div>
      <CartFooter>
        <div className="flex h-fit w-full flex-row justify-center gap-8 px-4">
          <CaKeyboard onAction={handleOpenProductKeyboard} />
          <CaCamera />
          <CaSearch onClick={handleSearchClick} />
        </div>
        <CartTotalizer total={displayPrice} />
      </CartFooter>
      <ProductKeyboard
        isOpen={isProductKeyboardOpen}
        close={handleCloseProductKeyboard}
      />
    </>
  )
}
