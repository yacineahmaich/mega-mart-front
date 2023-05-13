import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../context/Auth'
import api from '../../utils/api'

const getCustomer = async () => {
  const response = await api.get('/me')
  return response.data
}

export const useGetCustomer = () => {
  const { setProfile, setToken, token, profile, setIsLoading } = useAuth()

  return useQuery({
    queryKey: ['customer'],
    queryFn: () => {
      setIsLoading(true)
      return getCustomer()
    },
    retry: false,
    enabled: !!token && !profile,
    onSuccess(customer: Customer) {
      setProfile(customer)
    },
    onError() {
      setToken(null)
      setProfile(null)
    },
    onSettled() {
      setIsLoading(false)
    },
  })
}
