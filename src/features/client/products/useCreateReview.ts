import api from '../../../utils/api/client'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

type Variables = {
  review: {
    rating: number
    comment: string
  }
  productId: number
}

const createReview = async (data: Variables) => {
  const response = await api.post(
    `/products/${data.productId}/reviews`,
    data.review
  )

  return response.data
}

export const useCreateReview = (
  options?: UseMutationOptions<Review, Error, Variables>
) => {
  const queryClient = useQueryClient()

  return useMutation<Review, Error, Variables>({
    mutationFn: createReview,
    onSuccess(_, { productId }) {
      queryClient.invalidateQueries(['products', productId, 'reviews'])
    },
    ...options,
  })
}
