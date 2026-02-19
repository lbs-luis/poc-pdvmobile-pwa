import { MoveLeft, X } from 'lucide-react'
import { KeyboardButton } from './keyboard-button'

export function CartKeyboard() {
  return (
    <div className="m-auto grid h-fit w-full grid-cols-4 grid-rows-4 gap-[0.451rem] px-2">
      <KeyboardButton label="7" />
      <KeyboardButton label="8" />
      <KeyboardButton label="9" />
      <KeyboardButton icon={<X className="w-[1.609rem]" />} />
      <KeyboardButton label="4" />
      <KeyboardButton label="5" />
      <KeyboardButton label="6" />
      <KeyboardButton icon={<MoveLeft className="w-[1.609rem]" />} />
      <KeyboardButton label="1" />
      <KeyboardButton label="2" />
      <KeyboardButton label="3" />
      <KeyboardButton label="Enter" className="row-span-2 items-end" />
      <KeyboardButton label="KIT" className="bg-blue-800" />
      <KeyboardButton label="0" />
      <KeyboardButton label="," />
    </div>
  )
}
