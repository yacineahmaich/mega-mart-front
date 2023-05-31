import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

const deleteProduct = async ({ productId }: { productId: number }) => {
  try {
    const response = await api.delete(`/products/${productId}`)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useDeleteProduct = (
  options?: UseMutationOptions<unknown, unknown, { productId: number }>
) => {
  return useMutation<unknown, unknown, { productId: number }>({
    mutationFn: deleteProduct,
    ...options,
  })
}
