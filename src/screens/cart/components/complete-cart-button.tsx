import { ChevronRight, Tag } from 'lucide-react'

interface CompleteCartButtonProps {
  total: string
}

export function CompleteCartButton({ total }: CompleteCartButtonProps) {
  return (
    <div className="h-fit w-full border-t border-neutral-100 bg-white px-4 pt-3">
      <button className="flex w-full flex-row justify-between rounded-md">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-500">Acréscimos</span>
            <span className="text-base font-bold text-neutral-800">0,00</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-sm text-neutral-500">Descontos</span>
              <span className="text-base font-bold text-red-500">0,00</span>
            </div>
            <Tag size={16} className="text-neutral-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-500">Total dos itens</span>
            <span className="text-base font-bold text-neutral-800">{total}</span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <span className="text-sm text-neutral-500">Valor total</span>
          <span className="text-2xl font-bold text-neutral-800">{total}</span>
          <ChevronRight size={24} className="text-neutral-800" />
        </div>
      </button>
    </div>
  )
}
