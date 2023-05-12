import api from '../../../utils/api'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

const getProducts = async (searchParams: string) => {
  const response = await api.get(`/products/?${searchParams}`)
  return response.data
}

export const useProducts = (
  params: object,
  onSuccess?: (data: {
    data: Product[]
    meta: {
      current_page: number
      per_page: number
      last_page: number
    }
  }) => void,
  onError?: (err) => void
) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () =>
      getProducts(
        queryString.stringify(params, {
          arrayFormat: 'comma',
          arrayFormatSeparator: ',',
        })
      ),
    onSuccess,
    onError,
    keepPreviousData: true,
  })
}
