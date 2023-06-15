import api from '../../../../utils/api/admin'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type Variables = {
  id: number
  category: {
    name: string
    description: string
    category: string | number
    image: File | null
  }
}

const updateCategory = async (categoryData: Variables) => {
  const response = await api.post(
    `/categories/${categoryData.id}`,
    categoryData.category,
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

export const useUpdateCategory = (
  options?: UseMutationOptions<Category, Error, Variables>
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation<Category, Error, Variables>({
    mutationFn: updateCategory,
    onSuccess(_, { id }) {
      queryClient.invalidateQueries({
        queryKey: ['admin', 'categories', id.toString()],
      })
      navigate('/dashboard/categories')
    },
    onError() {
      window.scrollTo({ top: 0 })
    },
    ...options,
  })
}
