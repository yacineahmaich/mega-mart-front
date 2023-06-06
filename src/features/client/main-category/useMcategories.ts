import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

const getMCategories = async () => {
  const response = await api.get('/m-categories')

  return response.data
}

export const useMcategories = (options?: UseQueryOptions<MainCategory[]>) => {
  return useQuery<MainCategory[]>({
    queryKey: ['m-categories'],
    queryFn: getMCategories,
    staleTime: Infinity,
    ...options,
  })
}
