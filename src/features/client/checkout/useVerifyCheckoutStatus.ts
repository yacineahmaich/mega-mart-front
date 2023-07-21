import { useCart } from '../../../context/Cart'
import api from '../../../utils/api/client'
import { useQuery } from '@tanstack/react-query'

const verifyPaiment = async (session: string): Promise<Order> => {
  const response = await api.get('/checkout/success', {
    params: {
      session,
    },
  })

  return response.data
}

export const useVerifyCheckoutStatus = (session: string) => {
  const { clear } = useCart()

  return useQuery({
    queryKey: ['checkout', { session }],
    queryFn: () => verifyPaiment(session),
    onSuccess: clear,
  })
}
