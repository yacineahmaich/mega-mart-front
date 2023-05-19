import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../context/Auth'
import api from '../../utils/api/client'

const getProfile = async () => {
  const response = await api.get('/me')
  return response.data
}

export const useGetUser = () => {
  const { setUser, setToken, token, user, setIsLoading } = useAuth()

  return useQuery({
    queryKey: ['user'],
    queryFn: () => {
      setIsLoading(true)
      return getProfile()
    },
    retry: false,
    enabled: !!token && !user,
    onSuccess(user: User) {
      setUser(user)
    },
    onError() {
      setToken(null)
      setUser(null)
    },
    onSettled() {
      setIsLoading(false)
    },
  })
}
