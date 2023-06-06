import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import api from '../../../utils/api/client'

type UpdateProfileData = {
  email?: string
  name: string
  password?: string
  passwordConfirmation?: string
}

const updateProfile = async (data: UpdateProfileData) => {
  const response = await api.post('/profile/edit', data)

  return response.data
}

export const useUpdateProfile = (
  options?: UseMutationOptions<User, unknown, UpdateProfileData>
) => {
  const queryClient = useQueryClient()

  return useMutation<User, unknown, UpdateProfileData>({
    mutationFn: updateProfile,
    retry: false,
    onSuccess: user => {
      queryClient.setQueryData(['user'], user)
    },
    ...options,
  })
}
