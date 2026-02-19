export interface ParsedInput {
  quantity: string
  productCode: string
}

export function parseKeyboardInput(input: string): ParsedInput {
  const xIndex = input.toUpperCase().indexOf('X')
  
  if (xIndex !== -1) {
    const quantity = input.substring(0, xIndex).trim()
    const productCode = input.substring(xIndex + 1).trim()
    return { quantity, productCode }
  }
  
  return {
    quantity: '',
    productCode: input
  }
}

export function formatQuantity(value: string): string {
  const cleaned = value.replace(/[^\d,]/g, '')
  return cleaned
}

export function isProductCode(value: string): boolean {
  return /^\d{3}$/.test(value.trim())
}
