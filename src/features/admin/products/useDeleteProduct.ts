import { toast } from 'react-hot-toast'
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
    onSuccess: async () => {
      await queryClient.invalidateQueries(['admin', 'products'])
      toast.success('Product deleted successfully')
    },
    onError: () => {
      toast.error('Could not delete Product')
    },
  })
}
