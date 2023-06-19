import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

const getLatestOrders = async () => {
  const response = await api.get('/latest-orders')

  return response.data
}

export const useStoreStats = (options?: UseQueryOptions<Order[]>) => {
  return useQuery<Order[]>({
    queryKey: ['admin', 'latest-orders'],
    queryFn: getLatestOrders,
    ...options,
  })
}
