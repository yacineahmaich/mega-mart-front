import api from '../../utils/api'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

const getProducts = async (searchParams: string): Promise<Product[]> => {
  // await new Promise(resolve => setTimeout(resolve, 5000))
  const response = await api.get(`/products/?${searchParams}`)
  return response.data
}

export const useProducts = (
  params: object,
  onSuccess?: (data: Product[]) => void,
  onError?: (err) => void
) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(queryString.stringify(params)),
    onSuccess,
    onError,
    keepPreviousData: true,
  })
}
