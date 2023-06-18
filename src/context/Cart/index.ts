import { createContext, useContext } from 'react'

export type CartItem = { quantity: number; addedAt: string }

type CartCtx = {
  items: object
  addToCart: (id: number, quantity?: number) => void
  removeFromCart: (id: number) => void
  changeQuantity: (id: number, quantity: number) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  calcProductsTotalPrice: (products: Product[]) => number
  clear: () => void
}

const CartContext = createContext<CartCtx>({
  items: {},
  addToCart: () => null,
  removeFromCart: () => null,
  changeQuantity: () => null,
  calcProductsTotalPrice: () => null,
  increaseQty: () => null,
  decreaseQty: () => null,
  clear: () => null,
})

export const useCart = () => useContext(CartContext)
export default CartContext
