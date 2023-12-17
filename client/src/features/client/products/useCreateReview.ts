import api from '../../../utils/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Variables = {
  review: {
    rating: number
    comment: string
  }
  productId: number
}

const createReview = async (data: Variables): Promise<Review> => {
  const response = await api.post(
    `/products/${data.productId}/reviews`,
    data.review
  )

  return response.data
}

export const useCreateReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createReview,
    onSuccess(_, { productId }) {
      queryClient.invalidateQueries(['products', productId, 'reviews'])
    },
  })
}
