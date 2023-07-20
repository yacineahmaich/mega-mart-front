import api from '../../../utils/api/client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getCategoryHotProducts = async (slug: string) => {
  const response = await api.get(`/categories/${slug}/hot-products`)
  return response.data.products
}

export const useCategoryHotProducts = (
  slug: string,
  options?: UseQueryOptions<Product[]>
) => {
  return useQuery<Product[]>({
    queryKey: ['products', slug, 'hot-products'],
    queryFn: () => getCategoryHotProducts(slug),
    keepPreviousData: true,
    ...options,
  })
}
