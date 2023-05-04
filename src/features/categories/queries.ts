import api from '../../utils/api'
import { useQuery } from '@tanstack/react-query'

const getCategories = async () => {
  const response = await api.get(`/categories`)
  return response.data
}

export const useCategories = (
  onSuccess?: (data: { data: Category[] }) => void,
  onError?: (err) => void
) => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    onSuccess,
    onError,
  })
}
