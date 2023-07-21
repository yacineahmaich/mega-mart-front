import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { useNavigate } from 'react-router-dom'

type Varaibales = {
  offerData: {
    end: string
    backdrop: File | null
  }
  offerId: number
}

const updateOffer = async ({
  offerData,
  offerId,
}: Varaibales): Promise<Offer> => {
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

export const useUpdateOffer = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateOffer,
    onSuccess() {
      queryClient.invalidateQueries(['admin', 'offers'])
      navigate('/dashboard/offers')
    },
  })
}
