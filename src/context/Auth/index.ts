import { createContext, useContext } from 'react'

type AuthCtx = {
  user: User | null
  token: string | null
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  setUser: (user: object) => void
  setToken: (token: string) => void
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  token: null,
  isLoading: false,
  setIsLoading: () => null,
  setToken: () => null,
  setUser: () => null,
})

export const useAuth = () => useContext(AuthContext)
export default AuthContext
