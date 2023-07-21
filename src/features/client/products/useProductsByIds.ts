import api from '../../../utils/api/client'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

const getProductsByIds = async (idsParam: string): Promise<Product[]> => {
  const response = await api.get(`/products?${idsParam}`)
  return response.data.products
}

export const useProductsByIds = (ids: object) => {
  return useQuery({
    queryKey: ['products', { ids }],
    queryFn: () =>
      getProductsByIds(
        queryString.stringify(ids, {
          arrayFormat: 'comma',
          arrayFormatSeparator: ',',
        })
      ),
    keepPreviousData: true,
  })
}
