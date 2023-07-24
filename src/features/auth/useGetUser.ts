import { useQuery } from '@tanstack/react-query'
import api from '../../utils/api/client'

const TOKEN = localStorage.getItem('ACCESS_TOKEN')

const getUser = async (): Promise<User> => {
  console.log(TOKEN)
  if (!TOKEN) return null

  const response = await api.get('/me')
  console.log(response.data)
  return response.data
}

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: Infinity,
    onSuccess: () => {
      // hide page loader
      document.querySelector('#loader')?.remove()
      document.body.style.overflow = 'auto'
    },
  })
}
