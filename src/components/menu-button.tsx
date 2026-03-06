import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../lib/cn'

interface MenuButtonProps extends ComponentProps<'button'> {
  icon: ReactNode
  label: string
}

export function MenuButton({
  icon,
  label,
  className,
  ...props
}: MenuButtonProps) {
  return (
    <button
      className={cn(
        'flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white p-4 transition duration-150 active:scale-95',
        className,
      )}
      {...props}
    >
      <div className="text-indigo-500">{icon}</div>
      <span className="text-xs font-medium text-neutral-800">{label}</span>
    </button>
  )
}
