import { useState, useEffect, FC } from 'react'
import CartContext, { CartItem } from '.'

type Props = {
  children: React.ReactNode
}

const CartProvider: FC<Props> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem('cart')) ?? []
  )

  // check if item aleady in the cart
  const productInCart = (id: string) => {
    const inCart = items.find(item => item.id === id)
    return inCart === undefined ? false : true
  }

  // add item to cart
  const addToCart = (id: string) => {
    if (productInCart(id)) return
    setItems(items => [...items, { id, quantity: 1 }])
  }

  // Sync Cart With LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        productInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
