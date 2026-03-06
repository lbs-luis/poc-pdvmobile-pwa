export const ProductColor = {
  BROWN: '#8B4513',
  RED: '#EF4444',
  YELLOW: '#F59E0B',
  GREEN: '#22C55E',
  BLUE: '#3B82F6',
} as const

export type ProductColor = (typeof ProductColor)[keyof typeof ProductColor]

export const ProductCategory = {
  BEBIDAS: 'Bebidas',
  TRUFAS: 'Trufas',
  BARRAS: 'Barras',
  SOBREMESAS: 'Sobremesas',
} as const

export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory]

export interface Product {
  id: string
  description: string
  price: number
  color: ProductColor
  category: ProductCategory
  weight?: string
}

export const products: Product[] = [
  { id: '001', description: 'Trufa tradicional 30g', price: 9.99, color: ProductColor.BROWN, category: ProductCategory.TRUFAS, weight: '30g' },
  { id: '002', description: 'Trufa branca 30g', price: 10.99, color: ProductColor.YELLOW, category: ProductCategory.TRUFAS, weight: '30g' },
  { id: '003', description: 'Trufa morango 30g', price: 11.99, color: ProductColor.RED, category: ProductCategory.TRUFAS, weight: '30g' },
  { id: '004', description: 'Bombom cremoso 25g', price: 8.99, color: ProductColor.BROWN, category: ProductCategory.TRUFAS, weight: '25g' },
  { id: '005', description: 'Bombom crocante 25g', price: 9.49, color: ProductColor.YELLOW, category: ProductCategory.TRUFAS, weight: '25g' },
  { id: '006', description: 'Barra chocolate ao leite 100g', price: 15.99, color: ProductColor.BROWN, category: ProductCategory.BARRAS, weight: '100g' },
  { id: '007', description: 'Barra chocolate meio amargo 100g', price: 16.99, color: ProductColor.BROWN, category: ProductCategory.BARRAS, weight: '100g' },
  { id: '008', description: 'Barra chocolate branco 100g', price: 17.99, color: ProductColor.YELLOW, category: ProductCategory.BARRAS, weight: '100g' },
  { id: '009', description: 'Chocolate quente 200ml', price: 12.99, color: ProductColor.BROWN, category: ProductCategory.BEBIDAS, weight: '200ml' },
  { id: '010', description: 'Mousse chocolate 150g', price: 14.99, color: ProductColor.BROWN, category: ProductCategory.SOBREMESAS, weight: '150g' },
  { id: '011', description: 'Brownie pedaço 80g', price: 13.99, color: ProductColor.BROWN, category: ProductCategory.SOBREMESAS, weight: '80g' },
  { id: '012', description: 'Cheesecake chocolate 120g', price: 18.99, color: ProductColor.YELLOW, category: ProductCategory.SOBREMESAS, weight: '120g' },
  { id: '013', description: 'Pavê chocolate 200g', price: 22.99, color: ProductColor.BROWN, category: ProductCategory.SOBREMESAS, weight: '200g' },
  { id: '014', description: 'Torta chocolate fatia 150g', price: 19.99, color: ProductColor.BROWN, category: ProductCategory.SOBREMESAS, weight: '150g' },
  { id: '015', description: 'Kit trufas variadas 6 unidades', price: 59.99, color: ProductColor.RED, category: ProductCategory.TRUFAS, weight: '6un' },
  { id: '016', description: 'Kit bombons assorted 12 unidades', price: 69.99, color: ProductColor.GREEN, category: ProductCategory.TRUFAS, weight: '12un' },
  { id: '017', description: 'Caixa bombons premium 500g', price: 89.99, color: ProductColor.BLUE, category: ProductCategory.TRUFAS, weight: '500g' },
  { id: '018', description: 'Tablete especial 70% cacau 50g', price: 24.99, color: ProductColor.BROWN, category: ProductCategory.BARRAS, weight: '50g' },
  { id: '019', description: 'Chocolate orgânico 100g', price: 29.99, color: ProductColor.GREEN, category: ProductCategory.BARRAS, weight: '100g' },
  { id: '020', description: 'Trufa licor 35g', price: 15.99, color: ProductColor.RED, category: ProductCategory.TRUFAS, weight: '35g' },
]
