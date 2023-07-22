import { create } from 'zustand'

type RequireAuthModalState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const useRequireAuthModalState = create<RequireAuthModalState>()(set => ({
  isOpen: false,
  open: () => set(state => ({ ...state, isOpen: true })),
  close: () => set(state => ({ ...state, isOpen: false })),
}))

export default useRequireAuthModalState
