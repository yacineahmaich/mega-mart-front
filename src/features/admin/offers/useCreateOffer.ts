import api from '../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type Variables = {
  start: string
  end: string
  product: number
}

const createOffer = async (data: Variables) => {
  const response = await api.post('/offers', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const useCreateOffer = (
  options?: UseMutationOptions<Offer, Error, Variables>
) => {
  const navigate = useNavigate()

  return useMutation<Offer, Error, Variables>({
    mutationFn: createOffer,
    onSuccess() {
      navigate('/dashboard/offers')
    },
    ...options,
  })
}
