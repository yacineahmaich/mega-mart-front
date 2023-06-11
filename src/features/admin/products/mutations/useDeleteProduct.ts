import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type Variables = {
  productId: number
}

const deleteProduct = async ({ productId }: Variables) => {
  const response = await api.delete(`/products/${productId}`)

  return response.data
}

export const useDeleteProduct = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  return useMutation<unknown, unknown, Variables>({
    mutationFn: deleteProduct,
    ...options,
  })
}
