import { ChevronLeft, Search } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const handleAddProduct = (product: (typeof products)[0]) => {
    addProduct(product, 1)
    navigate('/cart')
  }

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="flex h-fit w-full items-center border-b border-neutral-200 bg-white px-2 py-3">
        <button className="size-fit shrink-0" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <p className="mx-auto flex text-sm font-medium">Pesquisar produto</p>
        <div className="size-6 bg-transparent" />
      </header>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar produto..."
            className="w-full rounded-lg border border-neutral-300 px-4 py-2 pr-10 outline-none focus:border-[#4f46e5]"
          />
          <Search
            size={20}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleAddProduct(product)}
            className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">
                {product.description}
              </p>
              <p className="text-xs text-neutral-500">
                Cod. {product.id} · 1x{' '}
                {product.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-neutral-800">
                {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="h-fit w-full p-4">
        <div className="flex h-fit w-full gap-2 rounded-md border border-neutral-400 bg-white p-1">
          <button className="flex-1 rounded-sm bg-slate-300 px-4 py-3 text-sm font-medium text-blue-950">
            Produtos
          </button>
          <button className="rounded-m flex-1 px-4 py-3 text-sm font-medium text-neutral-500">
            Kits
          </button>
        </div>
      </div>
    </div>
  )
}
