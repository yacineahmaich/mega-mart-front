import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { useNavigate } from 'react-router-dom'

type Varaibales = {
  offerData: {
    end: string
    backdrop: File | null
  }
  offerId: number
}

const updateOffer = async ({ offerData, offerId }: Varaibales) => {
  const response = await api.post(`/offers/${offerId}`, offerData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      _method: 'PUT',
    },
  })

  return response.data
}

export const useUpdateOffer = (
  options: UseMutationOptions<Offer, unknown, Varaibales>
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation<Offer, unknown, Varaibales>({
    mutationFn: updateOffer,
    retry: false,
    onSuccess(_, { offerId }) {
      queryClient.invalidateQueries(['admin', 'offers', offerId.toString()])
      navigate('/dashboard/offers')
    },
    ...options,
  })
}
