import { useState } from 'react'
import type { ComponentProps } from 'react'
import { products, ProductCategory } from '../../../database'
import { cn } from '../../../lib/cn'
import { ProductMeshButton } from './product-mesh-button'

interface ProductMeshProps extends ComponentProps<'div'> {
  close: () => void
}

const categories = [
  ProductCategory.TRUFAS,
  ProductCategory.BEBIDAS,
  ProductCategory.BARRAS,
  ProductCategory.SOBREMESAS,
]

export function ProductMesh({ className, close }: ProductMeshProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.TRUFAS)

  const filteredProducts = products.filter((p) => p.category === activeCategory)

  return (
    <>
      <div
        className={cn(
          'grid min-h-0 flex-1 grid-cols-3 grid-rows-[repeat(auto-fill,6.5rem)] gap-2 overflow-y-auto bg-[#f5f5f5] px-4',
          className,
        )}
      >
        {filteredProducts.map((product) => (
          <ProductMeshButton key={product.id} product={product} close={close} />
        ))}
      </div>
      <div className="scroll-invisible flex w-full gap-2 overflow-x-auto border-t border-neutral-200 bg-white px-4 py-3 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'flex shrink-0 items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition',
              activeCategory === category
                ? 'bg-white text-neutral-800 border border-neutral-800'
                : 'bg-transparent text-neutral-500',
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  )
}
