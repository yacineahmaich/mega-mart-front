import api from '../../../../utils/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getProduct = async (slug: string) => {
  const response = await api.get(`/products/${slug}/slug`)
  return response.data
}

export const useProduct = (
  slug: string,
  options?: UseQueryOptions<Product>
) => {
  return useQuery<Product>({
    queryKey: ['product', slug],
    queryFn: () => getProduct(slug),
    keepPreviousData: true,
    ...options,
  })
}
