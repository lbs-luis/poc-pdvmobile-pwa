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
        'fixed inset-0 z-50 flex h-dvh w-screen flex-col gap-2 bg-[#f5f5f5] transition-transform duration-300 ease-out',
      )}
      style={{ transform: isOpen ? 'translateY(0)' : 'translateY(100vh)' }}
    >
      <div className="flex h-fit w-full items-center border-b border-neutral-200 bg-white px-2 py-3">
        <button className="size-fit shrink-0" onClick={close}>
          <ChevronLeft size={24} />
        </button>
        <p className="mx-auto flex text-sm font-medium">Teclado Produtos</p>
        <div className="size-6 bg-transparent" />
      </div>

      <ProductMesh className="pb-0" close={close} />
    </div>
  )
}
