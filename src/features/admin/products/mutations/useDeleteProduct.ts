import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

const deleteProduct = async ({ productId }: { productId: string }) => {
  try {
    const response = await api.delete(`/products/${productId}`)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useDeleteProduct = (
  options?: UseMutationOptions<unknown, unknown, { productId: string }>
) => {
  return useMutation<unknown, unknown, { productId: string }>({
    mutationFn: deleteProduct,
    ...options,
  })
}
