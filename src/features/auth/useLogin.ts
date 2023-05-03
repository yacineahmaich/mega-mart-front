import { isAxiosError } from 'axios'
import api from '../../utils/api'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../../context/Auth'

type loginCredentials = {
  email: string
  password: string
}

const login = async (credentials: loginCredentials) => {
  try {
    const response = await api.post('/login', credentials)

    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response.data
    }

    throw error
  }
}

export const useLogin = () => {
  const { setToken, setUser } = useAuth()

  return useMutation({
    mutationFn: login,
    onSuccess: data => {
      setToken(data.token)
      setUser(data.user)
    },
    onError: (err: any) => {
      setToken(null)
      setUser(null)
    },
    retry: false,
  })
}
