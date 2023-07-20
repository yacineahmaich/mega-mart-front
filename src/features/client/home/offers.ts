import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/client'

const getOffers = async () => {
  const response = await api.get('/offers')
  return response.data.offers
}

export const query = () => ({
  queryKey: ['offers'],
  queryFn: getOffers,
  staleTime: Infinity,
})

export const useOffers = (options?: UseQueryOptions<Offer[]>) => {
  return useQuery<Offer[]>({
    ...query(),
    ...options,
  })
}
