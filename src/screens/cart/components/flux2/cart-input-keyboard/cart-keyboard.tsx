import { MoveLeft, X } from 'lucide-react'
import { KeyboardButton } from './keyboard-button'

interface CartKeyboardProps {
  onKeyPress: (key: string) => void
}

export function CartKeyboard({ onKeyPress }: CartKeyboardProps) {
  return (
    <div className="m-auto mt-4 grid h-fit w-full grid-cols-4 grid-rows-4 gap-[0.451rem] px-2">
      <KeyboardButton label="7" onClick={() => onKeyPress('7')} />
      <KeyboardButton label="8" onClick={() => onKeyPress('8')} />
      <KeyboardButton label="9" onClick={() => onKeyPress('9')} />
      <KeyboardButton
        icon={<X className="w-[1.609rem]" />}
        onClick={() => onKeyPress('X')}
      />
      <KeyboardButton label="4" onClick={() => onKeyPress('4')} />
      <KeyboardButton label="5" onClick={() => onKeyPress('5')} />
      <KeyboardButton label="6" onClick={() => onKeyPress('6')} />
      <KeyboardButton
        icon={<MoveLeft className="w-[1.609rem]" />}
        onClick={() => onKeyPress('Backspace')}
      />
      <KeyboardButton label="1" onClick={() => onKeyPress('1')} />
      <KeyboardButton label="2" onClick={() => onKeyPress('2')} />
      <KeyboardButton label="3" onClick={() => onKeyPress('3')} />
      <KeyboardButton
        label="Enter"
        className="row-span-2 items-end"
        onClick={() => onKeyPress('Enter')}
      />
      <KeyboardButton label="KIT" className="bg-blue-800" />
      <KeyboardButton label="0" onClick={() => onKeyPress('0')} />
      <KeyboardButton label="," onClick={() => onKeyPress(',')} />
    </div>
  )
}
