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

const getCategoryProducts = async (slug: string, searchParams: string) => {
  const response = await api.get(`/categories/${slug}/products?${searchParams}`)
  return response.data
}

export const useCategoryProducts = (
  slug: string,
  params: object,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['categories', slug, 'products', params],
    queryFn: () =>
      getCategoryProducts(
        slug,
        queryString.stringify(params, {
          arrayFormat: 'comma',
          arrayFormatSeparator: ',',
        })
      ),
    keepPreviousData: true,
    ...options,
  })
}
