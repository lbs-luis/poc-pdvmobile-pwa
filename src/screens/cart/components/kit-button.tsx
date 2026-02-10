import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

type KitButtonProps = ComponentProps<'div'>

export function KitButton({ className, ...props }: KitButtonProps) {
  return (
    <div
      className={cn(
        'flex h-full items-center justify-center rounded-md border border-neutral-200 bg-transparent text-sm font-medium text-neutral-500',
        className,
      )}
      {...props}
    >
      Kit
    </div>
  )
}
