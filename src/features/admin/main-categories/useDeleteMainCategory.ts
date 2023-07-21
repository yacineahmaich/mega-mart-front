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
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'main-categories'])
    },
  })
}
