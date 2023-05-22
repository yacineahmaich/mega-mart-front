import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

const deleteCategory = async ({ categoryId }: { categoryId: string }) => {
  try {
    const response = await api.delete(`/categories/${categoryId}`)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useDeleteCategory = (
  options?: UseMutationOptions<unknown, unknown, { categoryId: string }>
) => {
  return useMutation<unknown, unknown, { categoryId: string }>({
    mutationFn: deleteCategory,
    ...options,
  })
}
