import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type SaleData = {
  day: string
  current: number
  prev: number
}

const getSalesContribution = async () => {
  const response = await api.get('/sales-contribution')

  return response.data
}

export const useSalesContribution = (options?: UseQueryOptions<SaleData[]>) => {
  return useQuery<SaleData[]>({
    queryKey: ['admin', 'sales-contribution'],
    queryFn: getSalesContribution,
    ...options,
  })
}
