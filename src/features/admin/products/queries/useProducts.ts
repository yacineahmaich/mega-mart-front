import api from '../../../../utils/api/admin'
import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

type Data = {
  products: Product[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getProducts = async (page: string) => {
  const response = await api.get(`/products?page=${page}`)
  return response.data
}

export const useProducts = (page?: string, options?: UseQueryOptions<Data>) => {
  const queryClient = useQueryClient()

  return useQuery<Data>({
    queryKey: ['admin', 'products', { page }],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
    refetchOnMount: true,
    onSuccess(data) {
      // PREFETCH NEXT PAGE
      if (data.meta.current_page < data.meta.last_page) {
        const nextPage = (1 + +page).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'products', { page: nextPage }],
          queryFn: () => getProducts(nextPage),
        })
      }
      // PREFETCH PREVIOUS PAGE
      if (data.meta.current_page > 1) {
        const prevPage = (+page - 1).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'products', { page: prevPage }],
          queryFn: () => getProducts(prevPage),
        })
      }
    },
    ...options,
  })
}
