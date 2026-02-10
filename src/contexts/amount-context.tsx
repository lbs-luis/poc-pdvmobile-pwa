import { createContext, useContext, useState, type ReactNode } from 'react'

interface AmountContextType {
  currentAmount: number
  setCurrentAmount: (amount: number) => void
}

const AmountContext = createContext<AmountContextType | undefined>(undefined)

export function AmountProvider({ children }: { children: ReactNode }) {
  const [currentAmount, setCurrentAmount] = useState(1)

  return (
    <AmountContext.Provider value={{ currentAmount, setCurrentAmount }}>
      {children}
    </AmountContext.Provider>
  )
}

export function useAmount() {
  const context = useContext(AmountContext)
  if (context === undefined) {
    throw new Error('useAmount must be used within an AmountProvider')
  }
  return context
}