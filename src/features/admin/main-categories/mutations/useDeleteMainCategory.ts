import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type Variables = {
  mainCategoryId: number
}

const deleteMainCategory = async ({ mainCategoryId }: Variables) => {
  const response = await api.delete(`/main-categories/${mainCategoryId}`)

  return response.data
}

export const useDeleteMainCategory = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  return useMutation<unknown, unknown, Variables>({
    mutationFn: deleteMainCategory,
    ...options,
  })
}
