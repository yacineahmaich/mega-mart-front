import api from '../../../../utils/api/client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getProduct = async (slug: string) => {
  const response = await api.get(`/products/${slug}`)
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
