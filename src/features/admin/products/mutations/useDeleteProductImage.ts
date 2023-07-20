import api from '../../../../utils/api/admin'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

type Variables = {
  productId: number
  imageId: number
}

const deleteProductImage = async ({ productId, imageId }: Variables) => {
  const response = await api.delete(`/products/${productId}/images/${imageId}`)

  return response.data
}

export const useDeleteProductImage = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  const queryClient = useQueryClient()

  return useMutation<unknown, unknown, Variables>({
    mutationFn: deleteProductImage,
    retry: false,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries([
        'admin',
        'products',
        variables.productId.toString(),
      ])
    },
    ...options,
  })
}
