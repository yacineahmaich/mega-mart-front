import { createContext, useContext } from 'react'

export type CartItem = { id: string; quantity: number }

type CartCtx = {
  items: CartItem[]
  addToCart: (id: string) => void
  productInCart: (id: string) => boolean
}

const CartContext = createContext<CartCtx>({
  items: [],
  addToCart: () => null,
  productInCart: () => null,
})

export const useCart = () => useContext(CartContext)
export default CartContext
