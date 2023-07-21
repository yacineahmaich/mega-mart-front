import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Variables = {
  productId: number
  imageId: number
}

const deleteProductImage = async ({ productId, imageId }: Variables) => {
  const response = await api.delete(`/products/${productId}/images/${imageId}`)

  return response.data
}

export const useDeleteProductImage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteProductImage,
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'products'])
    },
  })
}
