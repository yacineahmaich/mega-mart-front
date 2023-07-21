import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Variables = {
  productId: number
}

const deleteProduct = async ({ productId }: Variables) => {
  const response = await api.delete(`/products/${productId}`)

  return response.data
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: async () => queryClient.invalidateQueries(['admin', 'products']),
  })
}
