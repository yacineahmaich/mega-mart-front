import api from '../../utils/api'
import { useQuery } from '@tanstack/react-query'

const getProduct = async (slug: string): Promise<Product> => {
  const response = await api.get(`/products/${slug}`)
  return response.data
}

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['products', slug],
    queryFn: () => getProduct(slug),
    keepPreviousData: true,
  })
}
