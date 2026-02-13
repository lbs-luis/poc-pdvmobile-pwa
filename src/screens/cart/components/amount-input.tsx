import { Calculator } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

type AmountInputProps = ComponentProps<'input'> & {
  value?: string | number
  onAmountChange?: (amount: number) => void
}

export function AmountInput({
  className,
  value,
  onAmountChange,
  ...props
}: AmountInputProps) {
  return (
    <div className="relative h-full">
      <div className="flex h-full">
        <div className="relative flex-1">
          <input
            type="number"
            value={value}
            className={cn(
              'peer h-full w-full appearance-none rounded-l-md border-t border-b border-l border-neutral-500 bg-transparent px-2.5 py-2.5 text-center text-sm text-neutral-800 [-moz-appearance:textfield] focus:border-neutral-600 focus:ring-0 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
              className,
            )}
            placeholder=" "
            onChange={(e) => {
              const amount = parseInt(e.target.value) || 0
              onAmountChange?.(amount)
              props.onChange?.(e)
            }}
            {...props}
          />
          <label
            className={cn(
              'pointer-events-none absolute start-1 top-2 z-10 origin-left -translate-y-4.5 scale-75 transform rounded-full bg-white px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4.5 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-neutral-600',
            )}
          >
            Qtde.
          </label>
        </div>
        <button
          type="button"
          className="rounded-r-md border-t border-r border-b border-neutral-500 bg-transparent px-3 text-neutral-500 transition-colors hover:text-neutral-700"
        >
          <Calculator size={20} />
        </button>
      </div>
    </div>
  )
}
