import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

export function CartFooter({ children, className }: ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'flex w-full flex-col gap-4 bg-linear-to-t from-white from-15% via-transparent via-70% to-transparent px-4 pb-4',
        className,
      )}
    >
      {children}
    </footer>
  )
}
