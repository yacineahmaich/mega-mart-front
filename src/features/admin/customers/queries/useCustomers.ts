import api from '../../../../utils/api/admin'
import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

type Data = {
  customers: User[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getCustomers = async (page: string) => {
  const reponse = await api.get('/customers?page=' + page)

  return reponse.data
}

export const useCustomers = (
  page?: string,
  options?: UseQueryOptions<Data>
) => {
  const queryClient = useQueryClient()

  return useQuery<Data>({
    queryKey: ['admin', 'customers', { page }],
    queryFn: () => getCustomers(page),
    keepPreviousData: true,
    onSuccess(data) {
      // PREFETCH NEXT PAGE
      if (data.meta.current_page < data.meta.last_page) {
        const nextPage = (1 + +page).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'customers', { page: nextPage }],
          queryFn: () => getCustomers(nextPage),
        })
      }
      // PREFETCH PREVIOUS PAGE
      if (data.meta.current_page > 1) {
        const prevPage = (+page - 1).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'customers', { page: prevPage }],
          queryFn: () => getCustomers(prevPage),
        })
      }
    },
    ...options,
  })
}
