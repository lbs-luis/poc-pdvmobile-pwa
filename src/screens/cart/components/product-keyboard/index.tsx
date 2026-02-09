import { ScanBarcode, Search } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'
import { ProductMesh } from '../product-mesh'

interface ProductKeyboardProps extends ComponentProps<'div'> {
  isKeyboardOpen: boolean
  close: () => void
}
export function ProductKeyboard({
  className,
  close,
  isKeyboardOpen,
}: ProductKeyboardProps) {
  return (
    <div
      className={cn(
        'transition-left absolute top-0 flex h-dvh w-screen flex-col gap-4 bg-white pt-4 duration-200',
        className,
      )}
      style={{ left: !isKeyboardOpen ? '100vw' : '0vw' }}
    >
      <h1 className="size-fit px-4 text-lg font-semibold text-black">
        Produtos
      </h1>
      <div className="grid h-10 w-full grid-cols-3 gap-4 px-4">
        <div className="flex h-full items-center justify-center rounded-md bg-neutral-100 text-sm font-medium text-neutral-500">
          Kit
        </div>
        <div className="flex h-full items-center justify-evenly rounded-md bg-neutral-100 text-sm font-medium text-neutral-500">
          <ScanBarcode size={24} />
          Escanear
        </div>
        <div className="relative flex h-full items-center justify-center rounded-md border border-neutral-500 text-sm font-semibold text-black">
          <span className="absolute -top-3 left-2 flex size-fit rounded-full bg-white px-1 text-sm font-medium text-neutral-500">
            Qtde.
          </span>
          <span>1 x</span>
        </div>
      </div>

      <div className="scroll-invisible flex h-10 w-full min-w-0 gap-4 overflow-x-auto px-4">
        <div className="flex items-center gap-1 rounded-full bg-neutral-200 px-4 py-2">
          <Search size={16} className="text-neutral-600" strokeWidth={2} />
          <input
            placeholder="Pesquisar"
            className="text-neutral/600 h-full w-20 text-center text-sm font-medium outline-none"
          />
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`filter-button-${i}`}
            className="flex w-fit shrink-0 items-center gap-1 rounded-full bg-neutral-200 px-4 py-2 text-neutral-500"
          >
            <span>Trufas 30g</span>
          </div>
        ))}
      </div>
      <ProductMesh className="pb-20" />
      <div className="gradient-fade-white absolute bottom-0 left-0 flex w-full flex-col gap-4 px-4 pb-4">
        <button
          className="mt-auto flex h-fit w-full items-center justify-center rounded-md bg-neutral-800 py-3 text-base font-semibold text-white"
          onClick={close}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
