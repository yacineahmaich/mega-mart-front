import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

const getOrder = async (order: string) => {
  const response = await api.get(`/orders/${order}`)

  return response.data
}

export const useOrder = (order: string, options?: UseQueryOptions<Order>) => {
  return useQuery({
    queryKey: ['orders', order],
    queryFn: () => getOrder(order),
    ...options,
  })
}
