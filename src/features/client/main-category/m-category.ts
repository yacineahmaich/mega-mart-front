import api from '../../../utils/api/client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getMCategory = async (slug: string) => {
  const response = await api.get(`/mc/${slug}`)
  return response.data
}

export const query = (slug: string) => ({
  queryKey: ['m-categories', slug],
  queryFn: () => getMCategory(slug),
})

export const useMCategory = (
  slug: string,
  options?: UseQueryOptions<MainCategory>
) => {
  return useQuery({
    ...query(slug),
    ...options,
  })
}
