import api from '../../../../utils/api/admin'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type Variables = {
  id: string
  mainCategory: {
    name: string
    description: string
    image: File | null
  }
}

const updateMainCategory = async (categoryData: Variables) => {
  const response = await api.post(
    `/main-categories/${categoryData.id}`,
    categoryData.mainCategory,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        _method: 'PUT',
      },
    }
  )

  return response.data
}

export const useUpdateMainCategory = (
  options?: UseMutationOptions<MainCategory, Error, Variables>
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation<MainCategory, Error, Variables>({
    mutationFn: updateMainCategory,
    onSuccess(_, { id }) {
      queryClient.invalidateQueries({
        queryKey: ['admin', 'main-categories', id],
      })
      navigate('/dashboard/main-categories')
    },
    onError() {
      window.scrollTo({ top: 0 })
    },
    ...options,
  })
}
