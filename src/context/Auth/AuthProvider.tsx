import { useState, useEffect, FC } from 'react'
import AuthContext from '.'

type Props = {
  children: React.ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState({})
  const [token, setToken] = useState(null)

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
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
