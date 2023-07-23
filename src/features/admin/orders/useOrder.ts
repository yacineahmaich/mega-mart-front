import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

const getOrder = async (orderId: string): Promise<Order> => {
  const response = await api.get(`/orders/${orderId}`)

  return response.data
}

export const useOrder = (orderId: string) => {
  return useQuery({
    queryKey: ['admin', 'orders', orderId],
    queryFn: () => getOrder(orderId),
  })
}
