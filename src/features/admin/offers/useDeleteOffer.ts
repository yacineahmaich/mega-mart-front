import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Variables = {
  offerId: number
}

const deleteOffer = async ({ offerId }: Variables) => {
  const response = await api.delete(`/offers/${offerId}`)

  return response.data
}

export const useDeleteOffer = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteOffer,
    onSuccess: async () => queryClient.invalidateQueries(['admin', 'offers']),
  })
}
