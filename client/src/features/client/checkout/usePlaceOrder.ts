import { DeliveryData } from '../../../store/checkout'
import api from '../../../utils/api'
import { useMutation } from '@tanstack/react-query'

type Variables = {
  cart: object
  delivery: DeliveryData
}

type Data = {
  session_url: string
}

const placeOrder = async (data: Variables): Promise<Data> => {
  const response = await api.post('/checkout/place-order', data)

  return response.data
}

export const usePlaceOrder = () => {
  return useMutation({
    mutationFn: placeOrder,
  })
}
