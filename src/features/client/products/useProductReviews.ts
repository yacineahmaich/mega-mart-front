import api from '../../../utils/api/client'
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

const getProductReviews = async (id: number, limit: number) => {
  const response = await api.get(`/products/${id}/reviews?limit=${limit}`)
  return response.data.reviews
}

export const useProductReviews = (
  id: number,
  limit: number,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['products', id, 'reviews'],
    queryFn: () => getProductReviews(id, limit),
    keepPreviousData: true,
    ...options,
  })
}
