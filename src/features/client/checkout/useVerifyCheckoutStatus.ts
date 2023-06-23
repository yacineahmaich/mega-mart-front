import api from '../../../utils/api/client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const verifyPaiment = async (session: string) => {
  const response = await api.get('/checkout/success', {
    params: {
      session,
    },
  })

  return response.data
}

export const useVerifyCheckoutStatus = (
  session: string,
  options?: UseQueryOptions<Order>
) => {
  return useQuery<Order>({
    queryKey: ['checkout', { session }],
    queryFn: () => verifyPaiment(session),
    ...options,
  })
}
