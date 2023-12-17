import api from '../../../utils/api'
import { useQuery } from '@tanstack/react-query'

type Data = {
  name: string
  email: string
  identifier: string
  totalOrders: number
  spentedAmount: number
  joinAt: string
}

const getProfile = async (): Promise<Data> => {
  const response = await api.get('/profile')

  return response.data
}

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
}
