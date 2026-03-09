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
      type="button"
      className={cn(
        'flex min-h-13 w-full touch-manipulation items-center justify-center rounded-lg border border-[#e5e7eb] bg-white text-[18px] font-bold text-[#1a1a2e] shadow-[0_1px_3px_rgba(0,0,0,0.08)] select-none active:scale-95',
        className,
      )}
    >
      {label && label}
      {KeyboardIcon && KeyboardIcon}
    </button>
  )
}
