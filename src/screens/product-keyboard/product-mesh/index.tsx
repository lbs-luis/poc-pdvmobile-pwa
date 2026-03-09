import type { ComponentProps } from 'react'
import { useState } from 'react'
import { ProductCategory, products } from '../../../database'
import { cn } from '../../../lib/cn'
import { ProductMeshButton } from './product-mesh-button'

interface ProductMeshProps extends ComponentProps<'div'> {
  close: () => void
}

const categories = [
  ProductCategory.TRUFAS,
  ProductCategory.BEBIDAS,
  ProductCategory.BARRAS,
]

export function ProductMesh({ className, close }: ProductMeshProps) {
  const [activeCategory, setActiveCategory] = useState<
    ProductCategory | undefined
  >(undefined)

  function handleSelectCategory(category: ProductCategory) {
    if (category === activeCategory) return setActiveCategory(undefined)
    setActiveCategory(category)
  }

  const filteredProducts = products.filter((p) => p.category === activeCategory)

  return (
    <>
      <div
        className={cn(
          'grid min-h-0 flex-1 grid-cols-3 grid-rows-[repeat(auto-fill,6.5rem)] gap-2 overflow-y-auto bg-[#f5f5f5] px-4',
          className,
        )}
      >
        {activeCategory
          ? filteredProducts.map((product) => (
              <ProductMeshButton
                key={product.id}
                product={product}
                close={close}
              />
            ))
          : products.map((product) => (
              <ProductMeshButton
                key={product.id}
                product={product}
                close={close}
              />
            ))}
      </div>
      <div className="scroll-invisible flex w-full gap-2 overflow-x-auto border-t border-neutral-200 bg-white p-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleSelectCategory(category)}
            className={cn(
              'flex shrink-0 items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition',
              activeCategory === category
                ? 'border border-slate-800 bg-white text-slate-800'
                : 'bg-slate-200 text-slate-500',
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  )
}
