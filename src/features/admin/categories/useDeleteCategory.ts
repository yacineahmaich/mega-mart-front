import { toast } from 'react-hot-toast'
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
    onSuccess: async () => {
      await queryClient.invalidateQueries(['admin', 'categories'])
      toast.success('Category deleted')
    },
    onError: () => {
      toast.error('Could not delete Category')
    }
  })
}
