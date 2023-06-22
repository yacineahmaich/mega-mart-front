import { isAxiosError } from 'axios'
import api from '../../utils/api/client'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type Data = {
  token: string
  user: User
}

type loginCredentials = {
  email: string
  password: string
}

const login = async (credentials: loginCredentials) => {
  const response = await api.post('/login', credentials)

  return response.data
}

export const useLogin = (
  options?: UseMutationOptions<Data, Error, loginCredentials>
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation<Data, Error, loginCredentials>({
    mutationFn: login,
    retry: false,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user)
      localStorage.setItem('ACCESS_TOKEN', data.token)

      // navigate admin users to dashboard
      data.user.isAdmin && navigate('/dashboard/products')
    },
    ...options,
  })
}
