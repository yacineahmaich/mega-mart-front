import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type Data = {
  categories: Category[]
  meta?: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getCategories = async (page: string) => {
  const response = await api.get(`/categories?page=${page}`)
  return response.data
}

export const useCategories = (
  page?: string,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['categories', { page }],
    queryFn: () => getCategories(page),
    keepPreviousData: true,
    refetchOnMount: true,
    ...options,
  })
}
