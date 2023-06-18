import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'
import { useGetUser } from '../../auth/useGetUser'

const getMyOrders = async (user: number) => {
  const response = await api.get(`/users/${user}/orders`)

  return response.data.orders
}

export const useMyOrders = (options?: UseQueryOptions<Order[]>) => {
  const { data: user } = useGetUser()

  return useQuery<Order[]>({
    queryKey: ['users', user.id, 'orders'],
    queryFn: () => getMyOrders(user.id),
    ...options,
  })
}
