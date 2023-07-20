import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type Variables = {
  categoryId: number
}

const deleteCategory = async ({ categoryId }: Variables) => {
  const response = await api.delete(`/categories/${categoryId}`)

  return response.data
}

export const useDeleteCategory = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  return useMutation<unknown, unknown, Variables>({
    mutationFn: deleteCategory,
    ...options,
  })
}
