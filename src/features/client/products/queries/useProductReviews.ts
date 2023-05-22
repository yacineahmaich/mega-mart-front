import api from '../../../../utils/api/client'
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

const getProductReviews = async (slug: string, limit: number) => {
  const response = await api.get(`/products/${slug}/reviews?limit=${limit}`)
  return response.data
}

export const useProductReviews = (
  slug: string,
  limit: number,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['products', slug, 'reviews'],
    queryFn: () => getProductReviews(slug, limit),
    keepPreviousData: true,
    ...options,
  })
}
