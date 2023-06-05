import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../utils/api/client'

const TOKEN = localStorage.getItem('ACCESS_TOKEN')

const getProfile = async (): Promise<User> => {
  if (!TOKEN) return null

  const response = await api.get('/me')
  return response.data
}

export const useGetUser = (options?: UseQueryOptions<User>) => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: () => getProfile(),
    retry: false,
    enabled: false,
    staleTime: 1000 * 60 * 60 * 24,
    onSuccess: () => {
      // hide page loader
      document.querySelector('#loader')?.remove()
      document.body.style.overflow = 'auto'
    },
    ...options,
  })
}
