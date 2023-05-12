import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import api from '../../../utils/api'
import { useAuth } from '../../../context/Auth'

type Data = {
  name: string
  password?: string
  passwordConfirmation?: string
}

const updateProfile = async (data: Data) => {
  try {
    const response = await api.post('/profile/edit', data)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response.data : error
  }
}

export const useUpdateProfile = (
  onSuccess?: (data) => void,
  onError?: (err) => void
) => {
  const { setUser } = useAuth()

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: data => {
      setUser(data as object)
      onSuccess && onSuccess(data)
    },
    onError,
    retry: false,
  })
}
