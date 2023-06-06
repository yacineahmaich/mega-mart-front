import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query'
import api from '../../../utils/api/client'

type Data = {
  products: Product[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
  }
}

const getMainCategoryProducts = async (
  mCategoryId: number,
  pageParam: number
) => {
  const response = await api.get(
    `/m-categories/${mCategoryId}/products?page=${pageParam}`
  )

  return response.data
}

export const useMainCategoryProducts = (
  mCategoryId: number,
  options?: UseInfiniteQueryOptions<Data>
) => {
  return useInfiniteQuery<Data>({
    queryKey: ['m-categories', mCategoryId, 'products'],
    queryFn: ({ pageParam = 1 }) =>
      getMainCategoryProducts(mCategoryId, pageParam),
    getNextPageParam: ({ meta }) => {
      const { current_page: currentPage, last_page: lastPage } = meta
      return currentPage < lastPage ? currentPage + 1 : undefined
    },
    ...options,
  })
}
