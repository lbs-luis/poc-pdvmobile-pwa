import { ChevronRight, Trash } from 'lucide-react'
import { useState, type ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

export function QuantityButton({ className }: ComponentProps<'button'>) {
  const [amount, setAmount] = useState(1)

  function handleSubtract() {
    if (amount > 0) setAmount(amount - 1)
  }

  return (
    <button
      className={cn(
        'grid h-fit w-28 grid-cols-3 items-center rounded-full bg-neutral-100 p-2',
        className,
      )}
    >
      <Trash size={16} className="mx-auto" onClick={handleSubtract} />
      <span className="mx-auto size-fit">{amount}</span>
      <ChevronRight
        size={16}
        className="mx-auto"
        onClick={() => setAmount(amount + 1)}
      />
    </button>
  )
}
