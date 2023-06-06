import api from '../../../utils/api/client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getMCategory = async (slug: string) => {
  const response = await api.get(`/mc/${slug}`)

  return response.data
}

export const useMCategory = (
  slug: string,
  options?: UseQueryOptions<MainCategory>
) => {
  return useQuery({
    queryKey: ['m-categories', slug],
    queryFn: () => getMCategory(slug),
    ...options,
  })
}
