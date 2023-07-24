import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FavoriteItem = {
  id: number
  at: Date
}

type FavoriteState = {
  items: FavoriteItem[]
  saveItem: (id: number) => void
  unsaveItem: (id: number) => void
  getItem: (id: number) => FavoriteItem | null
}

const useFavoriteState = create<FavoriteState>()(
  persist(
    (set, get) => ({
      items: [],
      saveItem: id =>
        set(state => ({
          ...state,
          items: [...state.items, { id, at: new Date() }],
        })),
      unsaveItem: id =>
        set(state => ({
          ...state,
          items: state.items.filter(i => i.id !== id),
        })),
      getItem: id => get().items.find(i => i.id === id),
    }),
    {
      name: 'favorite',
    }
  )
)

export default useFavoriteState
