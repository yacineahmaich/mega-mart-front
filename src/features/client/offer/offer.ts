import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

const getOffers = async (): Promise<Offer[]> => {
  const response = await api.get('/offers')
  return response.data.offers
}

export const query = () => ({
  queryKey: ['offers'],
  queryFn: getOffers,
  staleTime: Infinity,
})

export const useOffers = () => {
  return useQuery({
    ...query(),
  })
}
