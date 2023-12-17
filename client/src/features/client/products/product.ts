import api from '../../../utils/api'
import { useQuery } from '@tanstack/react-query'

const getProduct = async (slug: string): Promise<Product> => {
  const response = await api.get(`/products/${slug}`)
  return response.data
}

export const query = (slug: string) => ({
  queryKey: ['product', slug],
  queryFn: () => getProduct(slug),
  keepPreviousData: true,
})

export const useProduct = (slug: string) => {
  return useQuery(query(slug))
}
