import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getCategory = async (id: string) => {
  const response = await api.get(`/main-categories/${id}`)
  return response.data
}

export const useMainCategory = (
  id: string,
  options?: UseQueryOptions<MainCategory>
) => {
  return useQuery<MainCategory>({
    queryKey: ['admin', 'main-categories', id],
    queryFn: () => getCategory(id),
    keepPreviousData: true,
    ...options,
  })
}
