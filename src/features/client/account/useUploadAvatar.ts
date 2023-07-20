import api from '../../../utils/api/client'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

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

export const useUploadAvatar = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  const queryClient = useQueryClient()

  return useMutation<unknown, unknown, Variables>({
    mutationFn: uploadAvatar,
    retry: false,
    onSuccess: () => {
      queryClient.fetchQuery(['user'])
    },
    ...options,
  })
}
