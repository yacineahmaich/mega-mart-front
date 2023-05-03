import { isAxiosError } from 'axios'
import api from '../../utils/api'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../../context/Auth'

type SignupCredentials = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const signup = async (credentials: SignupCredentials) => {
  try {
    const response = await api.post('/signup', credentials)

    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response.data
    }

    throw error
  }
}

export const useSignup = () => {
  const { setToken, setUser } = useAuth()

  return useMutation({
    mutationFn: signup,
    onSuccess: data => {
      setToken(data.token)
      setUser(data.user)
    },
    onError: (_: any) => {
      setToken(null)
      setUser(null)
    },
    retry: false,
  })
}
