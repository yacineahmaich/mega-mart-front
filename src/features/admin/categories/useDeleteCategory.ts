import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Variables = {
  categoryId: number
}

const deleteCategory = async ({ categoryId }: Variables) => {
  const response = await api.delete(`/categories/${categoryId}`)

  return response.data
}

export const useDeleteCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'categories'])
    },
  })
}
