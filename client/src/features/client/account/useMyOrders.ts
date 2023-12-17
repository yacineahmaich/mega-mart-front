import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api'
import { useGetUser } from '../../auth/useGetUser'

const getMyOrders = async (user: number): Promise<Order[]> => {
  const response = await api.get(`/users/${user}/orders`)

  return response.data.orders
}

export const useMyOrders = () => {
  const { data: user } = useGetUser()

  return useQuery({
    queryKey: ['users', user.id, 'orders'],
    queryFn: () => getMyOrders(user.id),
  })
}
