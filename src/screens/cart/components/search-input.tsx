import { Search } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../../lib/cn'

type SearchInputProps = ComponentProps<'input'> & {
  value?: string
}

export function SearchInput({ className, value, ...props }: SearchInputProps) {
  return (
    <div className="relative h-full">
      <Search
        size={15}
        className="absolute top-1/2 left-2.5 -translate-y-1/2 text-neutral-600"
      />
      <input
        type="text"
        value={value}
        className={cn(
          'peer h-full w-full appearance-none rounded-md border border-neutral-500 bg-transparent py-2.5 pr-2.5 pl-8 text-sm text-neutral-800 focus:border-neutral-600 focus:ring-0 focus:outline-none',
          className,
        )}
        placeholder=" "
        {...props}
      />
      <label
        className={cn(
          'pointer-events-none absolute start-1 top-2 left-7 z-10 -translate-y-4.5 scale-75 transform rounded-full bg-white px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:left-2 peer-focus:-translate-y-4.5 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-neutral-600',
        )}
      >
        Pesquisar
      </label>
    </div>
  )
}
