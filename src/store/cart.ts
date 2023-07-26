import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { formatNumber } from '../utils/helpers'

type CartItem = {
  id: number
  quantity: number
  addedAt: Date
}

type CartState = {
  items: CartItem[]
  addItem: (item: { id: number; quantity?: number }) => void
  removeItem: (id: number) => void
  getItem: (id: number) => CartItem | null
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  updateQty: (item: { id: number; quantity: number }) => void
  getItemsTotalPrice: (products: Product[]) => number
  clear: () => void
}

const useCartState = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: ({ id, quantity = 1 }) =>
        set(state => ({
          ...state,
          items: [...state.items, { id, quantity, addedAt: new Date() }],
        })),
      removeItem: id =>
        set(state => ({
          ...state,
          items: state.items.filter(i => i.id !== id),
        })),
      getItem: (id: number) => get().items.find(i => i.id === id) ?? null,
      increaseQty: id =>
        set(state => ({
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),
      decreaseQty: id =>
        set(state => ({
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        })),
      updateQty: ({ id, quantity }) =>
        set(state => ({
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      getItemsTotalPrice: (products: Product[]) => {
        return products?.reduce((total, product) => {
          const productPrice = product.discount
            ? product.discount.price
            : product.price

          const cartItem = get().items.find(i => i.id === product.id)

          return formatNumber(total + productPrice * cartItem?.quantity) || 0
        }, 0)
      },
      clear: () => set(state => ({ ...state, items: [] })),
    }),
    {
      name: 'cart',
      partialize: state => ({ items: state.items }),
    }
  )
)

export default useCartState
