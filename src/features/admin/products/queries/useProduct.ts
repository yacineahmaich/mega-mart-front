import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getProduct = async (id: string) => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const useProduct = (id: string, options?: UseQueryOptions<Product>) => {
  return useQuery<Product>({
    queryKey: ['admin', 'products', id],
    queryFn: () => getProduct(id),
    keepPreviousData: true,
    ...options,
  })
}
