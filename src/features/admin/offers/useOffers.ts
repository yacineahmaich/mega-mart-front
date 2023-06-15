import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Data = {
  offers: Offer[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getOffers = async (page = '1') => {
  const response = await api.get(`/offers?page=${page}`)

  return response.data
}

export const useOffers = (page?: string, options?: UseQueryOptions<Data>) => {
  const queryClient = useQueryClient()

  return useQuery<Data>({
    queryKey: ['admin', 'offers'],
    queryFn: () => getOffers(page),
    onSuccess(data) {
      // PREFETCH NEXT PAGE
      if (data.meta.current_page < data.meta.last_page) {
        const nextPage = (1 + +page).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'offers', { page: nextPage }],
          queryFn: () => getOffers(nextPage),
        })
      }
      // PREFETCH PREVIOUS PAGE
      if (data.meta.current_page > 1) {
        const prevPage = (+page - 1).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'offers', { page: prevPage }],
          queryFn: () => getOffers(prevPage),
        })
      }
    },
    ...options,
  })
}
