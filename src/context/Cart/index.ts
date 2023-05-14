import { createContext, useContext } from 'react'

export type CartItem = { quantity: number; addedAt: string }

type CartCtx = {
  items: object
  addToCart: (id: string, quantity?: number) => void
  removeFromCart: (id: string) => void
  changeQuantity: (id: string, quantity: number) => void
}

const CartContext = createContext<CartCtx>({
  items: {},
  addToCart: () => null,
  removeFromCart: () => null,
  changeQuantity: () => null,
})

export const useCart = () => useContext(CartContext)
export default CartContext