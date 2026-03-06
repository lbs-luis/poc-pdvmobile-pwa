import { Menu, User } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'

type CartHeaderProps = ComponentProps<'header'>

export function CartHeader({ className }: CartHeaderProps) {
  const secondary_text_style = 'text-xs font-normal text-neutral-500'

  return (
    <header
      className={cn(
        'grid min-h-10 w-full grid-cols-[1.5rem_1fr_1.5rem] items-center gap-4 border-b border-neutral-300 bg-white p-4',
        className,
      )}
    >
      <Menu size={24} />
      <div className="flex w-full flex-col gap-1">
        <span className="flex items-center gap-1">
          <p className="text-sm font-bold text-neutral-800">John Doe</p>
          <p className={cn(secondary_text_style)}>- Premium</p>
        </span>
        <span className={cn(secondary_text_style)}>
          Lista 128 (Fidelidade - Z1X1XXXXXXXXXXXXXX){' '}
        </span>
      </div>
      <div className="flex size-9 items-center justify-center rounded-full bg-[#e5c29f]">
        <User size={18} className="text-white" />
      </div>
    </header>
  )
}
