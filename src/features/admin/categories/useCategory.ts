import api from '../../../utils/api/admin'
import { useQuery } from '@tanstack/react-query'

const getCategory = async (id: string): Promise<Category> => {
  const response = await api.get(`/categories/${id}`)
  return response.data
}

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ['admin', 'categories', id],
    queryFn: () => getCategory(id),
    keepPreviousData: true,
  })
}
