import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { useNavigate } from 'react-router-dom'

type Varaibales = {
  discountData: {
    end: string
    percentage: number
  }
  discountId: number
}

const updateDiscount = async ({ discountData, discountId }: Varaibales) => {
  const response = await api.put(`/discounts/${discountId}`, discountData)

  return response.data
}

export const useUpdateDiscount = (
  options: UseMutationOptions<Discount, unknown, Varaibales>
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation<Discount, unknown, Varaibales>({
    mutationFn: updateDiscount,
    retry: false,
    onSuccess(_, { discountId }) {
      queryClient.invalidateQueries([
        'admin',
        'discounts',
        discountId.toString(),
      ])
      navigate('/dashboard/discounts')
    },
    ...options,
  })
}
