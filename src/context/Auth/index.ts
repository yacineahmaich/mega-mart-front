import { createContext, useContext } from 'react'

type AuthCtx = {
  profile: Customer | null
  token: string | null
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  setProfile: (customer: Customer) => void
  setToken: (token: string) => void
}

const AuthContext = createContext<AuthCtx>({
  profile: null,
  token: null,
  isLoading: false,
  setIsLoading: () => null,
  setToken: () => null,
  setProfile: () => null,
})

export const useAuth = () => useContext(AuthContext)
export default AuthContext
