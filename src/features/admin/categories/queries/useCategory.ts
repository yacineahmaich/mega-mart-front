import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getCategory = async (id: string) => {
  const response = await api.get(`/categories/${id}`)
  return response.data
}

export const useCategory = (
  id: string,
  options?: UseQueryOptions<Category>
) => {
  return useQuery<Category>({
    queryKey: ['admin', 'categories', id],
    queryFn: () => getCategory(id),
    keepPreviousData: true,
    refetchOnMount: true,
    ...options,
  })
}
