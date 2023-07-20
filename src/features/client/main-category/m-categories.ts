import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

const getMCategories = async () => {
  const response = await api.get('/m-categories')
  return response.data.mainCategories
}

export const query = () => ({
  queryKey: ['m-categories'],
  queryFn: getMCategories,
  staleTime: Infinity,
})

export const useMcategories = (options?: UseQueryOptions<MainCategory[]>) => {
  return useQuery<MainCategory[]>({
    ...query(),
    ...options,
  })
}
