import { ScanBarcode } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

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
        'transition-left absolute top-0 flex h-dvh w-screen flex-col gap-4 bg-white p-4 duration-200',
        className,
      )}
      style={{ left: !isKeyboardOpen ? '100vw' : '0vw' }}
    >
      <h1 className="size-fit text-lg font-semibold text-black">Produtos</h1>
      <div className="grid h-10 w-full grid-cols-3 gap-4">
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
      <button
        className="mt-auto flex h-fit w-full items-center justify-center rounded-md bg-neutral-800 py-3 text-base font-semibold text-white"
        onClick={close}
      >
        Adicionar ao carrinho
      </button>
    </div>
  )
}
