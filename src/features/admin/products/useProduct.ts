import api from '../../../utils/api/admin'
import { useQuery } from '@tanstack/react-query'

const getProduct = async (id: string): Promise<Product> => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['admin', 'products', id],
    queryFn: () => getProduct(id),
  })
}
