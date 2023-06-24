import api from '../../utils/api/client'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

type Data = {
  token: string
  user: User
}

type SignupCredentials = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const signup = async (credentials: SignupCredentials) => {
  const response = await api.post('/signup', credentials)

  return response.data
}

export const useSignup = (
  options?: UseMutationOptions<Data, Error, SignupCredentials>
) => {
  const queryClient = useQueryClient()

  return useMutation<Data, Error, SignupCredentials>({
    mutationFn: signup,
    retry: false,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user),
        localStorage.setItem('ACCESS_TOKEN', data.token)
    },
    ...options,
  })
}
