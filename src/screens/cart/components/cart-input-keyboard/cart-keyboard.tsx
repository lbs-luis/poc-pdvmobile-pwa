import { MoveLeft, X } from 'lucide-react'
import { KeyboardButton } from './keyboard-button'

interface CartKeyboardProps {
  onKeyPress: (key: string) => void
}

export function CartKeyboard({ onKeyPress }: CartKeyboardProps) {
  const handleClick = (key: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    onKeyPress(key)
  }

  return (
    <div className="m-auto mt-4 grid h-fit w-full grid-cols-4 grid-rows-4 gap-[0.451rem] px-2">
      <KeyboardButton label="7" onClick={handleClick('7')} />
      <KeyboardButton label="8" onClick={handleClick('8')} />
      <KeyboardButton label="9" onClick={handleClick('9')} />
      <KeyboardButton
        icon={<X className="w-[1.609rem]" />}
        onClick={handleClick('X')}
      />
      <KeyboardButton label="4" onClick={handleClick('4')} />
      <KeyboardButton label="5" onClick={handleClick('5')} />
      <KeyboardButton label="6" onClick={handleClick('6')} />
      <KeyboardButton
        icon={<MoveLeft className="w-[1.609rem]" />}
        onClick={handleClick('Backspace')}
      />
      <KeyboardButton label="1" onClick={handleClick('1')} />
      <KeyboardButton label="2" onClick={handleClick('2')} />
      <KeyboardButton label="3" onClick={handleClick('3')} />
      <KeyboardButton
        label="Enter"
        className="row-span-2 items-end"
        onClick={handleClick('Enter')}
      />
      <KeyboardButton label="KIT" className="bg-blue-800" />
      <KeyboardButton label="0" onClick={handleClick('0')} />
      <KeyboardButton label="," onClick={handleClick(',')} />
    </div>
  )
}
