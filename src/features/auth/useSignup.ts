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
    await new Promise(resolve => setTimeout(resolve, 5000))
    const response = await api.post('/signup', credentials)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response.data : error
  }
}

export const useSignup = () => {
  const { setToken, setUser } = useAuth()

  return useMutation({
    mutationFn: signup,
    retry: false,
    onSuccess: data => {
      setToken(data.token)
      setUser(data.user)
    },
    onError: (_: any) => {
      setToken(null)
      setUser(null)
    },
  })
}
