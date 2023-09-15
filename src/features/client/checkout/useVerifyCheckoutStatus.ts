import useCartStore from '../../../store/cart'
import api from '../../../utils/api/client'
import { useQuery } from '@tanstack/react-query'

type Data = {
  processed: boolean
  order: Order
}

const verifyPaiment = async (session: string): Promise<Data> => {
  const response = await api.get('/checkout/status', {
    params: {
      session,
    },
  })

  return response.data
}

export const useVerifyCheckoutStatus = (session: string) => {
  const { clear } = useCartStore()

  return useQuery({
    queryKey: ['checkout', { session }],
    queryFn: () => verifyPaiment(session),
    refetchInterval: 5 * 1000,
    retry: 5,
    onSuccess: clear,
  })
}
