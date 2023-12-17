import api from '../../utils/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'

type Data = {
  token: string
  user: User
}

type loginCredentials = {
  email: string
  password: string
}

const login = async (credentials: loginCredentials): Promise<Data> => {
  const response = await api.post('/login', credentials)

  return response.data
}

export const useLogin = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const queryClient = useQueryClient()

  return useMutation<Data, Error, loginCredentials>({
    mutationFn: login,
    retry: false,
    onSuccess: data => {
      const redirect = searchParams.get('redirect')

      queryClient.setQueryData(['user'], data.user)
      localStorage.setItem('ACCESS_TOKEN', data.token)

      navigate(redirect ?? '/account/profile')
    },
  })
}
