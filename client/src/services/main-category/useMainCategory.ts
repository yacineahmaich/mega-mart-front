import { useQuery } from '@tanstack/react-query'
import api from '../../utils/api'

const getMainCatgeory = async (slug: string): Promise<MainCategory> => {
  const response = await api.get(`/main-categories/${slug}`)

  return response.data
}

export const useMainCategory = (slug: string) => {
  return useQuery({
    queryKey: ['main-categories', slug],
    queryFn: () => getMainCatgeory(slug),
  })
}
