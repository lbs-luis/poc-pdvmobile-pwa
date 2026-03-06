import type { ComponentProps } from 'react'
import { cn } from '../../../../lib/cn'

export function CartFooter({ children, className }: ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'gradient-fade-white mt-4 flex w-full flex-col gap-4 pb-4',
        className,
      )}
    >
      {children}
    </footer>
  )
}
