import { ChevronLeft } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'
import { ProductMesh } from '../product-mesh'

interface ProductKeyboardProps extends ComponentProps<'div'> {
  isKeyboardOpen: boolean
  close: () => void
}

function ProductKeyboardContent({
  className,
  close,
  isKeyboardOpen,
}: ProductKeyboardProps) {
  return (
    <div
      className={cn(
        'transition-left absolute top-0 flex h-dvh w-screen flex-col gap-2 bg-white duration-200',
        className,
      )}
      style={{ left: !isKeyboardOpen ? '100vw' : '0vw' }}
    >
      <div className="flex h-fit w-full items-center px-2 py-3 shadow-lg shadow-black/10">
        <button className="size-fit shrink-0" onClick={close}>
          <ChevronLeft size={24} />
        </button>
        <p className="mx-auto flex">Teclado Produtos</p>
        <div className="size-6 bg-transparent" />
      </div>

      <ProductMesh className="pb-28" close={close} />
      <div className="scroll-invisible absolute bottom-0 left-0 flex h-fit w-full min-w-0 gap-4 overflow-x-auto bg-white px-4 py-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`filter-button-${i}`}
            className={cn(
              'flex w-fit shrink-0 items-center gap-1 rounded-full px-4 py-2 active:scale-90',
              i === 0 ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-800',
            )}
          >
            <span>Trufas 30g</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProductKeyboard(props: ProductKeyboardProps) {
  return <ProductKeyboardContent {...props} />
}
