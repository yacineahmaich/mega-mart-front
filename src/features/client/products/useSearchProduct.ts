import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

const searchProduct = async (query = ''): Promise<Product[]> => {
  const response = await api.get(`/search?q=${query}`)

  return response.data.products
}

export const useSearchProducts = (query: string) => {
  return useQuery({
    queryKey: ['search', 'products', query],
    queryFn: () => searchProduct(query),
  })
}
