import api from '../../../utils/api/client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getCategories = async () => {
  const response = await api.get(`/categories`)
  return response.data.categories
}

export const useCategories = (options?: UseQueryOptions<Category[]>) => {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
    ...options,
  })
}
