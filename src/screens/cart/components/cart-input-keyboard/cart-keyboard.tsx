import { MoveLeft, X } from 'lucide-react'
import { KeyboardButton } from './keyboard-button'

interface CartKeyboardProps {
  onKeyPress: (key: string) => void
}

export function CartKeyboard({ onKeyPress }: CartKeyboardProps) {
  const handleTouch = (key: string) => (e: React.TouchEvent) => {
    e.preventDefault()
    onKeyPress(key)
  }

  return (
    <div className="mt-4 grid h-fit w-full grid-cols-4 gap-1.5 px-4">
      <KeyboardButton label="7" onTouchEnd={handleTouch('7')} />
      <KeyboardButton label="8" onTouchEnd={handleTouch('8')} />
      <KeyboardButton label="9" onTouchEnd={handleTouch('9')} />
      <KeyboardButton
        icon={<X className="w-[1.609rem]" />}
        onTouchEnd={handleTouch('X')}
      />
      <KeyboardButton label="4" onTouchEnd={handleTouch('4')} />
      <KeyboardButton label="5" onTouchEnd={handleTouch('5')} />
      <KeyboardButton label="6" onTouchEnd={handleTouch('6')} />
      <KeyboardButton
        icon={<MoveLeft className="w-[1.609rem]" />}
        onTouchEnd={handleTouch('Backspace')}
      />
      <KeyboardButton label="1" onTouchEnd={handleTouch('1')} />
      <KeyboardButton label="2" onTouchEnd={handleTouch('2')} />
      <KeyboardButton label="3" onTouchEnd={handleTouch('3')} />
      <KeyboardButton
        label="Enter"
        className="row-span-2"
        onTouchEnd={handleTouch('Enter')}
      />
      <KeyboardButton label="KIT" />
      <KeyboardButton label="0" onTouchEnd={handleTouch('0')} />
      <KeyboardButton label="," onTouchEnd={handleTouch(',')} />
    </div>
  )
}
