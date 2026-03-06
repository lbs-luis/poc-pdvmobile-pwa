import { useCallback, useRef, useState } from 'react'
import { useCartStore } from '../../../../stores/cart-store'
import { findProductById } from '../../../../utils/productFinder'
import { CartKeyboard } from './cart-keyboard'

const MIN_HEIGHT = 90
const MAX_HEIGHT = 333

export function CartInputKeyboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [quantity, setQuantity] = useState('1')
  const [productCode, setProductCode] = useState('')
  const [focusedField, setFocusedField] = useState<
    'quantity' | 'product' | null
  >(null)

  const [isDragging, setIsDragging] = useState(false)
  const [currentHeight, setCurrentHeight] = useState(MIN_HEIGHT)

  const startYRef = useRef(0)
  const startHeightRef = useRef(MIN_HEIGHT)
  const containerRef = useRef<HTMLDivElement>(null)

  const addProduct = useCartStore((state) => state.addProduct)

  const expandKeyboard = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleQuantityTouch = useCallback(() => {
    setFocusedField('quantity')
    expandKeyboard()
  }, [expandKeyboard])

  const handleProductTouch = useCallback(() => {
    setFocusedField('product')
    expandKeyboard()
  }, [expandKeyboard])

  const handleDragStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    startYRef.current = e.touches[0].clientY
    startHeightRef.current = containerRef.current?.offsetHeight || MIN_HEIGHT
  }, [])

  const handleDragMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      const currentY = e.touches[0].clientY
      const diff = startYRef.current - currentY
      const newHeight = Math.max(
        MIN_HEIGHT,
        Math.min(MAX_HEIGHT, startHeightRef.current + diff),
      )
      setCurrentHeight(newHeight)
    },
    [isDragging],
  )

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = (MAX_HEIGHT + MIN_HEIGHT) / 2
    if (currentHeight > threshold) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [isDragging, currentHeight])

  const handleKeyPress = useCallback(
    (key: string) => {
      if (key === 'Enter') {
        if (focusedField === 'quantity') {
          setFocusedField('product')
          return
        }

        if (focusedField === 'product') {
          setProductCode((prevCode) => {
            const trimmed = prevCode.trim()
            if (!trimmed) return prevCode

            setQuantity((prevQty) => {
              const qty = parseInt(prevQty)

              if (!prevQty || qty === 0) {
                setFocusedField('quantity')
                return prevQty
              }

              const product = findProductById(trimmed)
              if (product) {
                addProduct(product, qty)
                setFocusedField('quantity')
                return '1'
              }

              return prevQty
            })

            return ''
          })
        }
        return
      }

      const isDigit = key >= '0' && key <= '9'

      if (isDigit) {
        if (focusedField === 'quantity') {
          setQuantity((prev) => {
            if (prev === '0') return key
            return prev + key
          })
        } else if (focusedField === 'product') {
          setProductCode((prev) => prev + key)
        }
        return
      }

      if (key === ',') {
        return
      }

      if (key === 'X') {
        if (focusedField === 'quantity') {
          setQuantity('')
        } else if (focusedField === 'product') {
          setProductCode('')
        }
        return
      }

      if (key === 'Backspace') {
        if (focusedField === 'quantity') {
          setQuantity((prev) => prev.slice(0, -1))
        } else if (focusedField === 'product') {
          setProductCode((prev) => prev.slice(0, -1))
        }
        return
      }
    },
    [focusedField, addProduct],
  )

  const displayHeight = isDragging
    ? currentHeight
    : isOpen
      ? MAX_HEIGHT
      : MIN_HEIGHT

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col overflow-hidden rounded-2xl bg-slate-200"
      style={{
        height: displayHeight,
        transition: isDragging ? 'none' : 'height 0.3s ease-out',
      }}
    >
      <div
        id="keyboard-drag-area"
        className="flex h-fit w-full cursor-grab items-center justify-center py-2 active:cursor-grabbing"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="h-1 w-10 rounded-full bg-[#c4c6cf]" />
      </div>

      <div className="grid w-full shrink-0 grid-cols-[1fr_2fr] gap-2 px-4">
        <div
          onTouchEnd={handleQuantityTouch}
          className={`flex h-14 cursor-pointer flex-col justify-center rounded-lg border bg-white px-3 py-1.5 ${
            focusedField === 'quantity'
              ? 'border-[#4f46e5]'
              : 'border-[#dde0e8]'
          }`}
        >
          <label className="text-[10px] text-[#8a8fa8]">Quantidade</label>
          <span className="min-h-[22.5px] text-[15px] font-bold text-[#1a1a2e]">
            {quantity}
          </span>
        </div>

        <div
          onTouchEnd={handleProductTouch}
          className={`flex h-14 cursor-pointer flex-col justify-center rounded-lg border bg-white px-3 py-1.5 ${
            focusedField === 'product' ? 'border-[#4f46e5]' : 'border-[#dde0e8]'
          }`}
        >
          <label className="text-[10px] text-[#8a8fa8]">
            Produto (Código, EAN, Kits,)
          </label>
          <span className="min-h-[22.5px] text-[15px] font-bold text-[#1a1a2e]">
            {productCode}
          </span>
        </div>
      </div>

      <CartKeyboard onKeyPress={handleKeyPress} />
    </div>
  )
}
