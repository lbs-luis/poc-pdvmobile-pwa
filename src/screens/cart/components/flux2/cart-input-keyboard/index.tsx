import { useCallback, useRef, useState } from 'react'
import { useCartStore } from '../../../../../stores/cart-store'
import { findProductById } from '../../../../../utils/productFinder'
import { CartKeyboard } from './cart-keyboard'

const MIN_HEIGHT = 90
const MAX_HEIGHT = 394

export function CartInputKeyboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [quantity, setQuantity] = useState('')
  const [productCode, setProductCode] = useState('')
  const [pendingQty, setPendingQty] = useState('')

  const [isDragging, setIsDragging] = useState(false)
  const [currentHeight, setCurrentHeight] = useState(MIN_HEIGHT)

  const startYRef = useRef(0)
  const startHeightRef = useRef(MIN_HEIGHT)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastKeyTimeRef = useRef(0)

  const addProduct = useCartStore((state) => state.addProduct)

  const handleDragStart = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      setIsDragging(true)
      startYRef.current = 'touches' in e ? e.touches[0].clientY : e.clientY
      startHeightRef.current = containerRef.current?.offsetHeight || MIN_HEIGHT
    },
    [],
  )

  const handleDragMove = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (!isDragging) return

      const currentY = 'touches' in e ? e.touches[0].clientY : e.clientY
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
      const now = Date.now()
      if (now - lastKeyTimeRef.current < 50) {
        return
      }
      lastKeyTimeRef.current = now

      if (key === 'Enter') {
        if (productCode.trim()) {
          const product = findProductById(productCode.trim())
          if (product) {
            const qty = quantity ? parseFloat(quantity.replace(',', '.')) : 1
            addProduct(product, qty)
            setQuantity('')
            setProductCode('')
            setPendingQty('')
          }
        }
        return
      }

      if (
        key === '0' ||
        key === '1' ||
        key === '2' ||
        key === '3' ||
        key === '4' ||
        key === '5' ||
        key === '6' ||
        key === '7' ||
        key === '8' ||
        key === '9'
      ) {
        setProductCode((prev) => prev + key)
        setPendingQty((prev) => prev + key)
        return
      }

      if (key === ',') {
        setQuantity((prev) => prev + key)
        return
      }

      if (key === 'X') {
        if (pendingQty) {
          setQuantity(pendingQty)
          setProductCode('')
          setPendingQty('')
        }
        return
      }

      if (key === 'Backspace') {
        if (productCode.length > 0) {
          setProductCode((prev) => prev.slice(0, -1))
          setPendingQty((prev) => prev.slice(0, -1))
        }
        return
      }
    },
    [quantity, productCode, pendingQty, addProduct],
  )

  const displayHeight = isDragging
    ? currentHeight
    : isOpen
      ? MAX_HEIGHT
      : MIN_HEIGHT

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col overflow-hidden rounded-md bg-slate-200 p-2 pt-0 shadow-md/50 shadow"
      style={{
        height: displayHeight,
        paddingBottom: !isOpen && !isDragging ? '1rem' : undefined,
        transition: isDragging ? 'none' : 'height 0.3s ease-out',
      }}
    >
      <div
        id="keyboard-drag-area"
        className="flex h-fit w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="pointer-events-none mx-auto mt-2 h-1.5 w-26 rounded-full bg-slate-400" />
      </div>
      <div className="mt-4 grid w-full shrink-0 grid-cols-[1fr_2fr] gap-2 px-2">
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
            readOnly
            value={quantity}
            className="pointer-events-none size-full appearance-none text-sm font-normal text-slate-950"
          />
        </div>
        <div className="flex h-fit w-full flex-col rounded-md border border-neutral-500 bg-slate-50 px-2 py-1.5">
          <label
            htmlFor="keyboard-input-product"
            className="flex text-xs font-normal text-neutral-500"
          >
            Produto (Código,EAN, Kits,)
          </label>
          <input
            id="keyboard-input-product"
            type="text"
            readOnly
            value={productCode}
            className="pointer-events-none size-full appearance-none text-sm font-normal text-slate-950"
          />
        </div>
      </div>
      <CartKeyboard onKeyPress={handleKeyPress} />
    </div>
  )
}
