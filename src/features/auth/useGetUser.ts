import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../context/Auth'
import api from '../../utils/api'

const getUser = async () => {
  await new Promise(resolve => setTimeout(resolve, 10000))
  const response = await api.get('/me')
  return response.data
}

export const useGetUser = () => {
  const { setUser, setToken, token } = useAuth()

  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: false,
    enabled: !!token,
    onSuccess(user: User) {
      setUser(user)
    },
    onError() {
      setToken(null)
      setUser(null)
    },
  })
}
