import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Data = {
  discounts: Discount[]
  meta?: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getDiscounts = async (page = '1') => {
  const response = await api.get(`/discounts?page=${page}`)

  return response.data
}

export const useDiscounts = (
  page?: string,
  options?: UseQueryOptions<Data>
) => {
  const queryClient = useQueryClient()

  return useQuery<Data>({
    queryKey: ['admin', 'discounts', { page }],
    queryFn: () => getDiscounts(page),
    keepPreviousData: true,
    onSuccess(data) {
      // PREFETCH NEXT PAGE
      if (data.meta.current_page < data.meta.last_page) {
        const nextPage = (1 + +page).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'discounts', { page: nextPage }],
          queryFn: () => getDiscounts(nextPage),
        })
      }
      // PREFETCH PREVIOUS PAGE
      if (data.meta.current_page > 1) {
        const prevPage = (+page - 1).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'discounts', { page: prevPage }],
          queryFn: () => getDiscounts(prevPage),
        })
      }
    },
    ...options,
  })
}
