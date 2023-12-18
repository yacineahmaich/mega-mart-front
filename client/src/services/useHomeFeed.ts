import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

type HomeFeed = {
  mainCategory: MainCategory
  products: Product[]
}[]

const getHomeFeed = async (): Promise<HomeFeed> => {
  const response = await api.get('/home-feed')

  return response.data
}

export const useHomeFeed = () => {
  return useQuery({
    queryKey: ['home-feed'],
    queryFn: getHomeFeed,
  })
}
