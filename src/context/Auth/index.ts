import { createContext, useContext } from 'react'

type AuthCtx = {
  user: User | null
  token: string | null
  setUser: (user: object) => void
  setToken: (token: string) => void
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  token: null,
  setToken: () => null,
  setUser: () => null,
})

export const useAuth = () => useContext(AuthContext)
export default AuthContext
