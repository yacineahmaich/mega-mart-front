import api from '../../utils/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Variables = {
  avatar: File
}

const uploadAvatar = async (data: Variables) => {
  const response = await api.post(
    '/profile/avatar',
    { image: data.avatar },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )
  return response.data
}

export const useUploadAvatar = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: uploadAvatar,
    onSuccess: async () => queryClient.refetchQueries(['user']),
  })
}
