import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Variables = {
  discountId: number
}

const deleteDiscount = async ({ discountId }: Variables) => {
  const response = await api.delete(`/discounts/${discountId}`)

  return response.data
}

export const useDeleteDiscount = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  return useMutation<unknown, unknown, Variables>({
    mutationFn: deleteDiscount,
    retry: false,
    ...options,
  })
}
