import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type Data = {
  products: Product[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getProducts = async (page: string) => {
  const response = await api.get(`/products?page=${page}`)
  return response.data
}

export const useProducts = (page?: string, options?: UseQueryOptions<Data>) => {
  return useQuery<Data>({
    queryKey: ['products', { page }],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
    refetchOnMount: true,
    ...options,
  })
}
