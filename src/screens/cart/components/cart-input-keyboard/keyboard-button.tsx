import type { ComponentProps, ReactElement } from 'react'
import { cn } from '../../../../lib/cn'

interface KeyboardButtonProps extends ComponentProps<'button'> {
  label?: string
  icon?: ReactElement
}

export function KeyboardButton({
  label,
  icon: KeyboardIcon,
  className,
  ...props
}: KeyboardButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex h-full min-h-[4.08rem] w-full min-w-[4.287rem] items-center justify-center rounded-md bg-blue-950 p-4 text-2xl font-semibold text-blue-50 duration-150 active:scale-95',
        className,
      )}
    >
      {label && label}
      {KeyboardIcon && KeyboardIcon}
    </button>
  )
}
