import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Variables = {
  order: number
}

const toggleDeliveredStatus = async (data: Variables) => {
  const response = await api.post(`/orders/${data.order}/delivered`)

  return response.data
}

export const useToggleDelivered = (
  options?: UseMutationOptions<boolean, unknown, Variables>
) => {
  const queryClient = useQueryClient()

  return useMutation<boolean, unknown, Variables>({
    mutationFn: toggleDeliveredStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'orders'])
    },
    ...options,
  })
}
