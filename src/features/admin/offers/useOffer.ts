import api from '../../../utils/api/admin'
import { useQuery } from '@tanstack/react-query'

const getOffer = async (id: string): Promise<Offer> => {
  const response = await api.get(`/offers/${id}`)
  return response.data
}

export const useOffer = (id: string) => {
  return useQuery({
    queryKey: ['admin', 'offers', id],
    queryFn: () => getOffer(id),
    keepPreviousData: true,
  })
}
