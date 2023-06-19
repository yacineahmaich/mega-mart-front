import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

const getStoreStats = async () => {
  // await new Promise(resolve => setTimeout(resolve, 1000))
  const response = await api.get('/store-stats')

  return response.data
}

type Data = {
  sales: number
  orders: number
  customers: number
  retentionRate: number
}

export const useStoreStats = (options?: UseQueryOptions<Data>) => {
  return useQuery<Data>({
    queryKey: ['admin', 'store-stats'],
    queryFn: getStoreStats,
    ...options,
  })
}
