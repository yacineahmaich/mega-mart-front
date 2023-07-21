import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Variables = {
  discountId: number
}

const deleteDiscount = async ({ discountId }: Variables) => {
  const response = await api.delete(`/discounts/${discountId}`)

  return response.data
}

export const useDeleteDiscount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteDiscount,
    onSuccess: async () =>
      queryClient.invalidateQueries(['admin', 'discounts']),
  })
}
