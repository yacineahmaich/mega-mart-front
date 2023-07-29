import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { toast } from 'react-hot-toast'

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
    onSuccess: async () => {
      await queryClient.invalidateQueries(['admin', 'discounts'])
      toast.success('Discount deleted successfully')
    },
    onError: () => {
      toast.error('Could not delete Discount')
    },
  })
}
