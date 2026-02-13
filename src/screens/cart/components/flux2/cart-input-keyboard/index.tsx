export function CartInputKeyboard() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-md bg-slate-200 p-2 shadow-md/50 shadow">
      <div className="mx-auto h-1.5 w-26 rounded-full bg-slate-400" />
      <div className="grid w-full grid-cols-[1fr_2fr] gap-2 px-2 pb-2">
        <div className="flex h-fit w-full flex-col rounded-md border border-neutral-500 bg-slate-50 px-2 py-1.5">
          <label
            htmlFor="keyboard-input-number"
            className="flex text-xs font-normal text-neutral-500"
          >
            Quantidade
          </label>
          <input
            id="keyboard-input-number"
            type="text"
            className="size-full appearance-none text-sm font-normal text-slate-950"
          />
        </div>
        <div className="flex h-fit w-full flex-col rounded-md border border-neutral-500 bg-slate-50 px-2 py-1.5">
          <label
            htmlFor="keyboard-input-number"
            className="flex text-xs font-normal text-neutral-500"
          >
            Produto (Código,EAN, Kits,)
          </label>
          <input
            id="keyboard-input-number"
            type="text"
            className="size-full appearance-none text-sm font-normal text-slate-950"
          />
        </div>
      </div>
    </div>
  )
}
