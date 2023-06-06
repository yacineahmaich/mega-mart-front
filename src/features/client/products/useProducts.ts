import api from '../../../utils/api/client'
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

const getProductsByIds = async (idsParam: string) => {
  const response = await api.get(`/products?${idsParam}`)
  return response.data
}

export const useProductsByIds = (
  ids: object,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['products', { ids }],
    queryFn: () =>
      getProductsByIds(
        queryString.stringify(ids, {
          arrayFormat: 'comma',
          arrayFormatSeparator: ',',
        })
      ),
    keepPreviousData: true,
    ...options,
  })
}
