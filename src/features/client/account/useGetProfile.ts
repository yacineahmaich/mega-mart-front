import api from '../../../utils/api/client'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

type Data = {
  name: string
  email: string
  identifier: string
  totalOrders: number
  spentedAmount: number
  joinAt: string
}

const getProfile = async () => {
  const response = await api.get('/profile')

  return response.data
}

export const useProfile = (options?: UseQueryOptions<Data>) => {
  return useQuery<Data>({
    queryKey: ['profile'],
    queryFn: getProfile,
    ...options,
  })
}
