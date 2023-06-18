import api from '../../../utils/api/admin'
import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

type Data = {
  orders: Order[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getOrders = async (page: string) => {
  const response = await api.get(`/orders?page=${page}`)
  return response.data
}

export const useOrders = (page?: string, options?: UseQueryOptions<Data>) => {
  const queryClient = useQueryClient()

  return useQuery<Data>({
    queryKey: ['admin', 'orders', { page }],
    queryFn: () => getOrders(page),
    keepPreviousData: true,
    onSuccess(data) {
      // PREFETCH NEXT PAGE
      if (data.meta.current_page < data.meta.last_page) {
        const nextPage = (1 + +page).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'orders', { page: nextPage }],
          queryFn: () => getOrders(nextPage),
        })
      }
      // PREFETCH PREVIOUS PAGE
      if (data.meta.current_page > 1) {
        const prevPage = (+page - 1).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'orders', { page: prevPage }],
          queryFn: () => getOrders(prevPage),
        })
      }
    },
    ...options,
  })
}
