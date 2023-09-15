import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

const getSharedStats = async (): Promise<{
  totalSales: number
  totalProducts: number
  totalOrders: number
}> => {
  const response = await api.get('/shared-stats')

  return response.data
}

export const useSharedStats = () =>
  useQuery({
    queryKey: ['admin', 'shared-stats'],
    queryFn: getSharedStats,
  })
