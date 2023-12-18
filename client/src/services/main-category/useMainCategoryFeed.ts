import { useQuery } from '@tanstack/react-query'
import api from '../../utils/api'

type MainCategoryFeed = {
  category: Category
  products: Product[]
}[]

const getMainCatgeory = async (slug: string): Promise<MainCategoryFeed> => {
  const response = await api.get(`/main-categories/${slug}/feed`)

  return response.data
}

export const useMainCategoryFeed = (slug: string) => {
  return useQuery({
    queryKey: ['main-categories', slug, 'feed'],
    queryFn: () => getMainCatgeory(slug),
  })
}
