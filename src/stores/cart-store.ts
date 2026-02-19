import { create } from 'zustand'
import type { Product } from '../database'

export interface CartItem {
  product: Product
  quantity: number
  total: number
}

interface CartStore {
  items: CartItem[]
  addProduct: (product: Product, quantity?: number) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeProduct: (productId: string) => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addProduct: (product: Product, quantity: number = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity
        return {
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: newQuantity, total: newQuantity * item.product.price }
              : item
          )
        }
      }
      
      return {
        items: [{ product, quantity, total: quantity * product.price }, ...state.items]
      }
    })
  },
  
  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeProduct(productId)
      return
    }
    
    set((state) => ({
      items: state.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity, total: quantity * item.product.price }
          : item
      )
    }))
  },
  
  removeProduct: (productId: string) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }))
  }
}))