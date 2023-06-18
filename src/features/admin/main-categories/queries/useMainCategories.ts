import api from '../../../../utils/api/admin'
import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

type Data = {
  mainCategories: MainCategory[]
  meta?: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getMainCategories = async (page: string) => {
  const response = await api.get(`/main-categories?page=${page}`)
  return response.data
}

export const useMainCategories = (
  page?: string,
  options?: UseQueryOptions<Data>
) => {
  const queryClient = useQueryClient()

  return useQuery<Data>({
    queryKey: ['admin', 'main-categories', { page }],
    queryFn: () => getMainCategories(page),
    keepPreviousData: true,
    onSuccess(data) {
      // PREFETCH NEXT PAGE
      if (data.meta.current_page < data.meta.last_page) {
        const nextPage = (1 + +page).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'main-categories', { page: nextPage }],
          queryFn: () => getMainCategories(nextPage),
        })
      }
      // PREFETCH PREVIOUS PAGE
      if (data.meta.current_page > 1) {
        const prevPage = (+page - 1).toString()
        queryClient.prefetchQuery({
          queryKey: ['admin', 'main-categories', { page: prevPage }],
          queryFn: () => getMainCategories(prevPage),
        })
      }
    },
    ...options,
  })
}