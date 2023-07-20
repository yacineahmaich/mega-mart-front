import api from '../../utils/api/client'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const logout = async () => {
  await api.post('/logout')
}

export const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    retry: false,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null)
      localStorage.removeItem('ACCESS_TOKEN')
      navigate('/account/login')
    },
  })
}
