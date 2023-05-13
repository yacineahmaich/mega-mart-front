import api from '../../../../utils/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getCategories = async () => {
  const response = await api.get(`/categories`)
  return response.data
}

export const useCategories = (options?: UseQueryOptions<Category[]>) => {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
    ...options,
  })
}
