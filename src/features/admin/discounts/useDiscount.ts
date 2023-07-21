import api from '../../../utils/api/admin'
import { useQuery } from '@tanstack/react-query'

const getDiscount = async (id: string): Promise<Discount> => {
  const response = await api.get(`/discounts/${id}`)
  return response.data
}

export const useDiscount = (id: string) => {
  return useQuery({
    queryKey: ['admin', 'discounts', id],
    queryFn: () => getDiscount(id),
  })
}
