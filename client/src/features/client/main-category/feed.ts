import api from '../../../utils/api'
import { useQuery } from '@tanstack/react-query'

type Data = {
  mainCategory: MainCategory
  feed: {
    category: Category
    products: Product[]
  }[]
}

const getFeed = async (slug: string): Promise<Data> => {
  const response = await api.get(`/mc/${slug}/feed`)
  return response.data
}

export const query = (slug: string) => ({
  queryKey: ['m-category', 'feed', slug],
  queryFn: () => getFeed(slug),
})

export const useMainCategoryFeed = (slug: string) => {
  return useQuery({
    ...query(slug),
  })
}
