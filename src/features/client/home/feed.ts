import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

type Data = {
  feed: {
    mainCategory: MainCategory
    products: Product[]
  }[]
}

const getFeed = async (): Promise<Data> => {
  const response = await api.get('/feed')
  return response.data
}

export const query = () => ({
  queryKey: ['feed'],
  queryFn: getFeed,
  staleTime: Infinity,
})

export const useFeed = () => {
  return useQuery({
    ...query(),
  })
}
