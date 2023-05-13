import { isAxiosError } from 'axios'
import api from '../../utils/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type Data = {
  token: string
  profile: Customer
}

type loginCredentials = {
  email: string
  password: string
}

const login = async (credentials: loginCredentials) => {
  try {
    const response = await api.post('/login', credentials)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useLogin = (
  options?: UseMutationOptions<Data, Error, loginCredentials>
) => {
  return useMutation<Data, Error, loginCredentials>({
    mutationFn: login,
    retry: false,
    ...options,
  })
}
