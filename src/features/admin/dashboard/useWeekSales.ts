import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type SaleData = {
  day: string
  current: number
  prev: number
}

const getWeekSales = async () => {
  const response = await api.get('/week-sales')

  return response.data
}

export const useStoreStats = (options?: UseQueryOptions<SaleData[]>) => {
  return useQuery<SaleData[]>({
    queryKey: ['admin', 'week-sales'],
    queryFn: getWeekSales,
    ...options,
  })
}
