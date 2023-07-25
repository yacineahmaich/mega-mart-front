import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Variables = {
  order: number
}

const toggleDeliveredStatus = async (data: Variables) => {
  const response = await api.post(`/orders/${data.order}/delivered`)

  return response.data
}

export const useToggleDelivered = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: toggleDeliveredStatus,
    onSuccess: (_, { order }) =>
      queryClient.invalidateQueries(['admin', 'orders', order]),
  })
}
