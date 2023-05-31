import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

const deleteCategory = async ({ categoryId }: { categoryId: number }) => {
  try {
    const response = await api.delete(`/categories/${categoryId}`)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useDeleteCategory = (
  options?: UseMutationOptions<unknown, unknown, { categoryId: number }>
) => {
  return useMutation<unknown, unknown, { categoryId: number }>({
    mutationFn: deleteCategory,
    ...options,
  })
}
