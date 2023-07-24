import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SavedItem = {
  id: number
  at: Date
}

type SavedState = {
  items: SavedItem[]
  saveItem: (id: number) => void
  unsaveItem: (id: number) => void
  getItem: (id: number) => SavedItem | null
}

const useSavedState = create<SavedState>()(
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
      name: 'saved',
    }
  )
)

export default useSavedState
