import { useState, useEffect, FC } from 'react'
import CartContext from '.'
import { formatNumber } from '../../utils/helpers'

type Props = {
  children: React.ReactNode
}

const CartProvider: FC<Props> = ({ children }) => {
  const [items, setItems] = useState<object>(
    JSON.parse(localStorage.getItem('cart') ?? '{}')
  )

  // add item to cart
  const addToCart = (id: number, quantity?: number) => {
    const cartItem = items[id]
    // increase quantity by 1 if product already exists
    if (cartItem) {
      setItems(items => ({
        ...items,
        [id]: { ...cartItem, quantity: cartItem.quantity + 1 },
      }))
    } else {
      // add product to cart
      setItems(items => ({
        ...items,
        [id]: { quantity: quantity ?? 1, addedAt: new Date().toISOString() },
      }))
    }
  }

  // increate quantity
  const changeQuantity = (id: number, quantity: number) => {
    setItems(items =>
      items[id]
        ? { ...items, [id]: { ...items[id], quantity: quantity } }
        : items
    )
  }

  // increate quantity
  const increaseQty = (id: number) => {
    const cartItem = items[id]
    if (!cartItem) return

    setItems(items => ({
      ...items,
      [id]: { ...cartItem, quantity: cartItem.quantity + 1 },
    }))
  }

  // decrease quantity
  const decreaseQty = (id: number) => {
    const cartItem = items[id]
    if (!cartItem) return

    setItems(items => ({
      ...items,
      [id]: { ...cartItem, quantity: cartItem.quantity - 1 },
    }))
  }

  // remove from cart
  const removeFromCart = (id: number) => {
    setItems(items =>
      Object.fromEntries(Object.entries(items).filter(([key]) => +key !== id))
    )
  }

  // calc total
  const calcProductsTotalPrice = (products: Product[]) => {
    return products?.reduce((total, product) => {
      const finalPrice = product.discount
        ? product.discount.price
        : product.price

      const cartItem = items[product.id]

      return formatNumber(total + finalPrice * cartItem?.quantity) || 0
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
        increaseQty,
        decreaseQty,
        calcProductsTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
