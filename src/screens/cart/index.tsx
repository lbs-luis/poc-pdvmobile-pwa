import { CartFooter } from './components/cart-footer'
import { CartHeader } from './components/cart-header'
import { CartProductList } from './components/cart-product-list'
import { FloatingAddButton } from './components/floating-add-button'
import { FloatingCartButton } from './components/floating-cart-button'

export default function CartScreen() {
  return (
    <>
      <CartHeader />
      <CartProductList className="mt-2" />
      <CartFooter className="fixed right-0 bottom-0 left-0">
        <FloatingAddButton className="mx-auto" />
        <FloatingCartButton className="mx-auto" />
      </CartFooter>
    </>
  )
}
