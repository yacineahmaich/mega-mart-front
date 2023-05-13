import { isAxiosError } from 'axios'
import api from '../../utils/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type Data = {
  token: string
  profile: Customer
}

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
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useSignup = (
  options?: UseMutationOptions<Data, Error, SignupCredentials>
) => {
  return useMutation<Data, Error, SignupCredentials>({
    mutationFn: signup,
    retry: false,
    ...options,
  })
}
