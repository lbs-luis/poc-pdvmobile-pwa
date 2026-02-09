export interface Product {
  id: string
  description: string
  price: number
}

export const products: Product[] = [
  { id: '001', description: 'Trufa tradicional 30g', price: 9.99 },
  { id: '002', description: 'Trufa branca 30g', price: 10.99 },
  { id: '003', description: 'Trufa morango 30g', price: 11.99 },
  { id: '004', description: 'Bombom cremoso 25g', price: 8.99 },
  { id: '005', description: 'Bombom crocante 25g', price: 9.49 },
  { id: '006', description: 'Barra chocolate ao leite 100g', price: 15.99 },
  { id: '007', description: 'Barra chocolate meio amargo 100g', price: 16.99 },
  { id: '008', description: 'Barra chocolate branco 100g', price: 17.99 },
  { id: '009', description: 'Chocolate quente 200ml', price: 12.99 },
  { id: '010', description: 'Mousse chocolate 150g', price: 14.99 },
  { id: '011', description: 'Brownie pedaço 80g', price: 13.99 },
  { id: '012', description: 'Cheesecake chocolate 120g', price: 18.99 },
  { id: '013', description: 'Pavê chocolate 200g', price: 22.99 },
  { id: '014', description: 'Torta chocolate fatia 150g', price: 19.99 },
  { id: '015', description: 'Kit trufas variadas 6 unidades', price: 59.99 },
  { id: '016', description: 'Kit bombons assorted 12 unidades', price: 69.99 },
  { id: '017', description: 'Caixa bombons premium 500g', price: 89.99 },
  { id: '018', description: 'Tablete especial 70% cacau 50g', price: 24.99 },
  { id: '019', description: 'Chocolate orgânico 100g', price: 29.99 },
  { id: '020', description: 'Trufa licor 35g', price: 15.99 }
]