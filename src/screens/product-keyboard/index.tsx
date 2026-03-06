import { ChevronLeft } from 'lucide-react'
import { cn } from '../../lib/cn'
import { ProductMesh } from './product-mesh'

interface ProductKeyboardProps {
  isOpen: boolean
  close: () => void
}

export function ProductKeyboard({ isOpen, close }: ProductKeyboardProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex h-dvh w-screen flex-col gap-2 bg-white transition-transform duration-300 ease-out',
      )}
      style={{ transform: isOpen ? 'translateY(0)' : 'translateY(100vh)' }}
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
