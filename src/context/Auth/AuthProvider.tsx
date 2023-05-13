import { useState, useEffect, FC } from 'react'
import AuthContext from '.'

type Props = {
  children: React.ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [profile, setProfile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

  useEffect(() => {
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    } else {
      localStorage.removeItem('ACCESS_TOKEN')
    }
  }, [token])

  return (
    <AuthContext.Provider
      value={{
        profile,
        token,
        isLoading,
        setIsLoading,
        setProfile,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
