import api from '../../../../utils/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type Data = { data: Category[] }

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
