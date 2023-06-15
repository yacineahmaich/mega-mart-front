import api from '../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const getDiscount = async (id: string) => {
  const response = await api.get(`/discounts/${id}`)
  return response.data
}

export const useDiscount = (
  id: string,
  options?: UseQueryOptions<Discount>
) => {
  return useQuery<Discount>({
    queryKey: ['admin', 'discounts', id],
    queryFn: () => getDiscount(id),
    keepPreviousData: true,
    refetchOnMount: true,
    ...options,
  })
}
