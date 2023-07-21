import { useInfiniteQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

type Data = {
  reviews: Review[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
  }
}

const getProductReviews = async (
  productId: number,
  pageParam: number
): Promise<Data> => {
  const response = await api.get(
    `/products/${productId}/reviews?page=${pageParam}`
  )

  return response.data
}

export const useProductReviews = (productId: number) => {
  return useInfiniteQuery({
    queryKey: ['products', productId, 'reviews'],
    queryFn: ({ pageParam = 1 }) => getProductReviews(productId, pageParam),
    getNextPageParam: ({ meta }) => {
      const { current_page: currentPage, last_page: lastPage } = meta
      return currentPage < lastPage ? currentPage + 1 : undefined
    },
  })
}
