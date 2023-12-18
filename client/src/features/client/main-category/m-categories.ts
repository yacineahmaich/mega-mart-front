import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api'

const getMCategories = async (): Promise<MainCategory[]> => {
  const response = await api.get('/main-categories')
  return response.data.mainCategories
}

export const useMcategories = () => {
  return useQuery({
    queryKey: ['main-categories'],
    queryFn: getMCategories,
  })
}
