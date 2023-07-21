import api from '../../../utils/api/admin'
import { useQuery } from '@tanstack/react-query'

const getCategory = async (id: string): Promise<MainCategory> => {
  const response = await api.get(`/main-categories/${id}`)
  return response.data
}

export const useMainCategory = (id: string) => {
  return useQuery({
    queryKey: ['admin', 'main-categories', id],
    queryFn: () => getCategory(id),
    keepPreviousData: true,
  })
}
