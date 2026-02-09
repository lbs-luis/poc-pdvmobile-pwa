import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'

export function CartFooter({ children, className }: ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'gradient-fade-white flex w-full flex-col gap-4 px-4 pb-4',
        className,
      )}
    >
      {children}
    </footer>
  )
}
