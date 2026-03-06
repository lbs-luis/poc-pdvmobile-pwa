import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Plus, Search } from 'lucide-react'
import { products } from '../../database'
import { useCartStore } from '../../stores/cart-store'

export default function ProductSearchScreen() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const addProduct = useCartStore((state) => state.addProduct)

  const filteredProducts = products.filter(
    (p) =>
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.id.includes(query),
  )

  const handleAddProduct = (product: typeof products[0]) => {
    addProduct(product, 1)
    navigate('/cart')
  }

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="flex h-14 w-full items-center border-b border-neutral-200 px-4">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="mx-auto text-base font-bold">Pesquisar produto</h1>
        <div className="w-6" />
      </header>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar produto..."
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 pr-10 outline-none focus:border-[#4f46e5]"
          />
          <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">{product.description}</p>
              <p className="text-xs text-neutral-500">Cod. {product.id} · 1x {product.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-neutral-800">{product.price.toFixed(2).replace('.', ',')}</span>
              <button
                onClick={() => handleAddProduct(product)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4f46e5] text-white active:scale-95"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-neutral-200 bg-neutral-100 p-4">
        <button className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm">
          Produtos
        </button>
        <button className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-500">
          Kits
        </button>
      </div>
    </div>
  )
}
