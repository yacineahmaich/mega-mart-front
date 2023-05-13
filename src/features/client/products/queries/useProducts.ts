import api from '../../../../utils/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

type Data = {
  products: Product[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
  }
}

const getProducts = async (searchParams: string) => {
  const response = await api.get(`/products/?${searchParams}`)
  return response.data
}

export const useProducts = (
  params: object,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['products', params],
    queryFn: () =>
      getProducts(
        queryString.stringify(params, {
          arrayFormat: 'comma',
          arrayFormatSeparator: ',',
        })
      ),
    keepPreviousData: true,
    ...options,
  })
}
