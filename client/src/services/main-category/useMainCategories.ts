import { useQuery } from '@tanstack/react-query'
import api from '../../utils/api'

const getMainCategories = async (): Promise<MainCategory[]> => {
  const response = await api.get('/main-categories')
  return response.data.mainCategories
}

export const useMainCategories = () => {
  return useQuery({
    queryKey: ['main-categories'],
    queryFn: getMainCategories,
  })
}
