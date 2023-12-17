import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api'

const getMCategories = async (): Promise<MainCategory[]> => {
  const response = await api.get('/m-categories')
  return response.data.mainCategories
}

export const query = () => ({
  queryKey: ['m-categories'],
  queryFn: getMCategories,
  staleTime: Infinity,
})

export const useMcategories = () => {
  return useQuery({
    ...query(),
  })
}
