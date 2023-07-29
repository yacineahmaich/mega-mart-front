import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { toast } from 'react-hot-toast'

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
    onSuccess: async () => {
      await queryClient.invalidateQueries(['admin', 'offers'])
      toast.success('Offer deleted successfully')
    },
    onError: () => {
      toast.error('Could not delete Offer')
    },
  })
}
