import { ChevronRight, Tag } from 'lucide-react'

interface CartTotalizerProps {
  total: string
}

export function CartTotalizer({ total }: CartTotalizerProps) {
  return (
    <div className="h-fit w-full px-4">
      <div className="grid w-full grid-cols-[1fr_1fr_60px] items-center gap-4 rounded-md border border-slate-400 py-3.5 pr-2 pl-4">
        <div className="flex size-full flex-col">
          <div className="flex flex-col">
            <span className="flex text-sm font-semibold text-slate-900">
              {total}
            </span>
            <span className="flex text-sm font-normal text-slate-950">
              Acréscimos
            </span>
          </div>
          <div className="mt-auto flex flex-row items-center gap-3.5">
            <div className="flex flex-col">
              <span className="flex text-sm font-semibold text-red-600">
                99,99
              </span>
              <span className="text-sm font-normal text-slate-950">
                Descontos
              </span>
            </div>
            <Tag size={20} className="shrink-0 text-slate-900" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="ml-auto flex size-fit flex-col">
            <span className="ml-auto flex size-fit text-sm font-semibold text-slate-900">
              99,99
            </span>
            <span className="text-sm font-normal text-slate-950">
              Total dos itens
            </span>
          </div>
          <div className="ml-auto flex size-fit flex-col">
            <span className="flex size-fit text-2xl font-semibold text-slate-900">
              {total}
            </span>
            <span className="ml-auto size-fit text-sm font-normal text-slate-950">
              Valor total
            </span>
          </div>
        </div>
        <ChevronRight size={32} className="ml-auto shrink-0 text-slate-900" />
      </div>
    </div>
  )
}
