import api from '../../../utils/api/admin'
import { useQuery } from '@tanstack/react-query'

const getAllMainCategories = async (): Promise<MainCategory[]> => {
  const response = await api.get(`/main-categories/all`)

  return response.data.mainCategories
}

export const useAllMainCategories = () => {
  return useQuery({
    queryKey: ['admin', 'main-categories', 'all'],
    queryFn: getAllMainCategories,
    keepPreviousData: true,
  })
}
