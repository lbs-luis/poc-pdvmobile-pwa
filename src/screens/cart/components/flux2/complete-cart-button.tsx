import { ChevronRight, Tag } from 'lucide-react'

interface CompleteCartButtonProps {
  total: number
}

export function CompleteCartButton({ total }: CompleteCartButtonProps) {
  return (
    <div className="h-fit w-full px-4">
      <button className="flex w-full flex-row justify-between rounded-md border border-slate-500 p-4">
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col">
            <span className="flex text-sm font-normal text-slate-950">
              Total dos itens
            </span>
            <span className="flex text-sm font-semibold text-slate-900">
              {total}
            </span>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-normal text-slate-950">
                Descontos
              </span>
              <span className="flex text-sm font-semibold text-slate-900">
                99,99
              </span>
            </div>
            <div className="flex aspect-square h-full items-center justify-center rounded-md bg-slate-800 p-1">
              <Tag size={20} className="shrink-0 text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex size-fit flex-col gap-4">
            <span className="flex size-fit text-base font-semibold text-slate-900">
              Valor total
            </span>
            <span className="flex size-fit text-4xl font-semibold text-slate-900">
              {total}
            </span>
          </div>
          <ChevronRight size={32} className="shrink-0 text-slate-900" />
        </div>
      </button>
    </div>
  )
}
