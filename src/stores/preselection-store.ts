import { create } from 'zustand'
import type { Product } from '../database'

export interface PreSelectedItem {
  product: Product
  quantity: number
}

interface PreselectionStore {
  items: PreSelectedItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  clearItems: () => void
  getTotalItems: () => number
}

export const usePreselectionStore = create<PreselectionStore>((set, get) => ({
  items: [],
  
  addItem: (product: Product, quantity: number) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity }
              : item
          )
        }
      }
      
      return {
        items: [...state.items, { product, quantity }]
      }
    })
  },
  
  removeItem: (productId: string) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }))
  },
  
  clearItems: () => {
    set({ items: [] })
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  }
}))