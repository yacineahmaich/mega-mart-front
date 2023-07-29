import { toast } from 'react-hot-toast'
import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Variables = {
  mainCategoryId: number
}

const deleteMainCategory = async ({ mainCategoryId }: Variables) => {
  const response = await api.delete(`/main-categories/${mainCategoryId}`)

  return response.data
}

export const useDeleteMainCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteMainCategory,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['admin', 'main-categories'])
      toast.success('Main Category deleted successfully')
    },
    onError: () => {
      toast.error('Could not delete Main Category')
    },
  })
}
