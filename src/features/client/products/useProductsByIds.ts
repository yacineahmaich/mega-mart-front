import api from '../../../utils/api/client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

const getProductsByIds = async (idsParam: string) => {
  const response = await api.get(`/products?${idsParam}`)
  return response.data.products
}

export const useProductsByIds = (
  ids: object,
  options?: UseQueryOptions<Product[]>
) => {
  return useQuery<Product[]>({
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
