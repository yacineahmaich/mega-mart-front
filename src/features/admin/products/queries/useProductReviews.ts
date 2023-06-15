import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type Data = {
  reviews: Review[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getProductReviews = async (id: string) => {
  const response = await api.get(`/products/${id}/reviews`)
  return response.data
}

export const useProductReviews = (
  id?: string,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['admin', 'products', id, 'reviews'],
    queryFn: () => getProductReviews(id),
    keepPreviousData: true,
    ...options,
  })
}
