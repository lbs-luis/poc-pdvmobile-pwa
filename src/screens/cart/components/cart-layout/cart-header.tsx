import { LogOut, Menu } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'

type CartHeaderProps = ComponentProps<'header'>

export function CartHeader({ className }: CartHeaderProps) {
  const secondary_text_style = 'text-xs font-normal text-neutral-500'

  return (
    <header
      className={cn(
        'grid min-h-10 w-full grid-cols-[1.5rem_1fr_1.5rem] items-center gap-4 bg-white p-4 shadow-md',
        className,
      )}
    >
      <Menu size={24} />
      <div className="flex w-full flex-col gap-1">
        <span className="flex items-center gap-1">
          <p className="text-sm font-normal text-neutral-800">John Doe</p>
          <p className={cn(secondary_text_style)}>- Premium</p>
        </span>
        <span className={cn(secondary_text_style)}>
          Lista 128 (Fidelidade - Z1X1XXXXXXXXXXXXXX){' '}
        </span>
      </div>
      <LogOut size={24} />
    </header>
  )
}
