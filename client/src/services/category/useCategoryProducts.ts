import api from '../../utils/api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import queryString from 'query-string'

type Data = {
  products: Product[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
  }
}

const getCategoryProducts = async (
  slug: string,
  searchParams: string
): Promise<Data> => {
  const response = await api.get(`/categories/${slug}/products?${searchParams}`)
  return response.data
}

export const query = (slug: string, p?: object) => {
  const searchParams = new URL(location.href).search
  const params =
    p ??
    queryString.parse(searchParams.toString(), {
      arrayFormat: 'comma',
    })

  return {
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
  }
}

export const useCategoryProducts = (slug: string) => {
  const queryClient = useQueryClient()
  const searchParams = new URL(location.href).search
  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })

  return useQuery({
    ...query(slug, params),
    onSuccess(data) {
      // PREFETCH NEXT PAGE
      if (data.meta.current_page < data.meta.last_page) {
        const nextPage = (1 + data.meta.current_page).toString()
        queryClient.prefetchQuery(query(slug, { ...params, page: nextPage }))
      }
      // PREFETCH PREVIOUS PAGE
      if (data.meta.current_page > 1) {
        const prevPage = (data.meta.current_page - 1).toString()
        queryClient.prefetchQuery(query(slug, { ...params, page: prevPage }))
      }
    },
  })
}
