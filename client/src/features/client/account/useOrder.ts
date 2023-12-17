import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api'

const getOrder = async (order: string): Promise<Order> => {
  const response = await api.get(`/orders/${order}`)

  return response.data
}

export const useOrder = (order: string) => {
  return useQuery({
    queryKey: ['orders', order],
    queryFn: () => getOrder(order),
  })
}
