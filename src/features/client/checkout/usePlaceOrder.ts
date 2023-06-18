import api from '../../../utils/api/client'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type Variables = {
  cart: object
}

type Data = {
  session_url: string
}

const placeOrder = async (data: Variables) => {
  const response = await api.post('/checkout/place-order', data.cart)

  return response.data
}

export const usePlaceOrder = (
  options?: UseMutationOptions<Data, unknown, Variables>
) => {
  return useMutation<Data, unknown, Variables>({
    mutationFn: placeOrder,
    ...options,
  })
}
