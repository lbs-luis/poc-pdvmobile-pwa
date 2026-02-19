import { products, type Product } from '../database'

export function findProductById(id: string): Product | undefined {
  return products.find((p: Product) => p.id === id)
}
