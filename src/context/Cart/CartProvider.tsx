import { useState, useEffect, FC } from 'react'
import CartContext from '.'

type Props = {
  children: React.ReactNode
}

const CartProvider: FC<Props> = ({ children }) => {
  const [items, setItems] = useState<object>(
    JSON.parse(localStorage.getItem('cart') ?? '{}')
  )

  // add item to cart
  const addToCart = (id: number, quantity?: number) => {
    if (items[id]) return
    setItems(items => ({
      ...items,
      [id]: { quantity: quantity ?? 1, addedAt: new Date().toISOString() },
    }))
  }

  // increate quantity
  const changeQuantity = (id: number, quantity: number) => {
    setItems(items =>
      items[id]
        ? { ...items, [id]: { ...items[id], quantity: quantity } }
        : items
    )
  }

  // remove from cart
  const removeFromCart = (id: number) => {
    setItems(items =>
      Object.fromEntries(Object.entries(items).filter(([key]) => +key !== id))
    )
  }

  // calc total
  const calcProductsTotalPrice = (products: Product[]) => {
    return products.reduce((total, product) => {
      const finalPrice = product.discount
        ? product.discount.price
        : product.price

      const cartItem = items[product.id]

      return total + finalPrice * cartItem?.quantity
    }, 0)
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
        removeFromCart,
        changeQuantity,
        calcProductsTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
