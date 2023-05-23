import { useQuery } from '@tanstack/react-query'
import api from '../../utils/api/client'

const TOKEN = localStorage.getItem('ACCESS_TOKEN')

const getProfile = async () => {
  if (!TOKEN) return null

  const response = await api.get('/me')
  return response.data
}

export const useGetUser = (enabled = false) => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: () => getProfile(),
    retry: false,
    enabled,
    staleTime: 1000,
  })
}
