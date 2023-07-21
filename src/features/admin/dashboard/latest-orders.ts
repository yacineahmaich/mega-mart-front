import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

const getLatestOrders = async (): Promise<Order[]> => {
  const response = await api.get('/latest-orders')
  return response.data.orders
}

export const query = () => ({
  queryKey: ['admin', 'latest-orders'],
  queryFn: getLatestOrders,
})

export const useLatestOrders = () => {
  return useQuery({
    ...query(),
  })
}
