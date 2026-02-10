import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'
import { AmountProvider, useAmount } from '../../../../contexts/amount-context'
import { AddSelectionButton } from '../add-selection-button'
import { AmountInput } from '../amount-input'
import { FloatingScannerButton } from '../floating-scanner-button'
import { KitButton } from '../kit-button'
import { ProductMesh } from '../product-mesh'
import { SearchInput } from '../search-input'

interface ProductKeyboardProps extends ComponentProps<'div'> {
  isKeyboardOpen: boolean
  close: () => void
}

function ProductKeyboardContent({
  className,
  close,
  isKeyboardOpen,
}: ProductKeyboardProps) {
  const { setCurrentAmount } = useAmount()

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
      <div className="grid h-10 w-full grid-cols-[1fr_2fr_3fr] gap-4 px-4">
        <KitButton />
        <AmountInput onAmountChange={setCurrentAmount} />
        <SearchInput />
      </div>

      <div className="scroll-invisible flex h-10 w-full min-w-0 gap-4 overflow-x-auto px-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`filter-button-${i}`}
            className="flex w-fit shrink-0 items-center gap-1 rounded-full bg-neutral-200 px-4 py-2 text-neutral-500 active:scale-90"
          >
            <span>Trufas 30g</span>
          </div>
        ))}
      </div>
      <ProductMesh className="pb-20" />
      <div className="gradient-fade-white absolute bottom-0 left-0 flex w-full flex-col gap-4 px-4 pb-4">
        <FloatingScannerButton className="mx-auto" />
        <AddSelectionButton onClose={close} />
      </div>
    </div>
  )
}

export function ProductKeyboard(props: ProductKeyboardProps) {
  return (
    <AmountProvider>
      <ProductKeyboardContent {...props} />
    </AmountProvider>
  )
}
