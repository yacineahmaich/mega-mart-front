import api from '../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getOffer = async (id: string) => {
  const response = await api.get(`/offers/${id}`)
  return response.data
}

export const useOffer = (id: string, options?: UseQueryOptions<Offer>) => {
  return useQuery<Offer>({
    queryKey: ['admin', 'offers', id],
    queryFn: () => getOffer(id),
    keepPreviousData: true,
    ...options,
  })
}
