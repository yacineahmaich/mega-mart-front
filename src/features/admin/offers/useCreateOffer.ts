import api from '../../../utils/api/admin'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type Variables = {
  start: string
  end: string
  product: number
}

const createOffer = async (data: Variables): Promise<Offer> => {
  const response = await api.post('/offers', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const useCreateOffer = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: createOffer,
    onSuccess() {
      navigate('/dashboard/offers')
    },
    onError() {
      window.scrollTo({ top: 0 })
    },
  })
}
