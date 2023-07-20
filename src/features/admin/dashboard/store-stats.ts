import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Data = {
  sales: number
  orders: number
  customers: number
  retentionRate: number
}

const getStoreStats = async () => {
  const response = await api.get('/store-stats')
  return response.data
}

export const query = () => ({
  queryKey: ['admin', 'store-stats'],
  queryFn: getStoreStats,
})

export const useStoreStats = (options?: UseQueryOptions<Data>) => {
  return useQuery<Data>({
    ...query(),
    ...options,
  })
}
