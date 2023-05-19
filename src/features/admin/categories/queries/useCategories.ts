import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type Data = {
  categories: Category[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getCategories = async () => {
  const response = await api.get(`/categories`)
  return response.data
}

export const useCategories = (options?: UseQueryOptions<Data>) => {
  return useQuery<Data>({
    queryKey: ['categories'],
    queryFn: getCategories,
    ...options,
  })
}
