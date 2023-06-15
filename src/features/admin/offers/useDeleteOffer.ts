import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Variables = {
  offerId: number
}

const deleteOffer = async ({ offerId }: Variables) => {
  const response = await api.delete(`/offers/${offerId}`)

  return response.data
}

export const useDeleteOffer = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  return useMutation<unknown, unknown, Variables>({
    mutationFn: deleteOffer,
    retry: false,
    ...options,
  })
}
