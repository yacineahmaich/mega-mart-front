import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { useNavigate } from 'react-router-dom'

type Varaibales = {
  start: string
  end: string
  percentage: number
  product: number
}

const applyDiscount = async (data: Varaibales) => {
  const response = await api.post('/apply-discount', data)

  return response.data
}

export const useApplyDiscount = (
  options: UseMutationOptions<Discount, unknown, Varaibales>
) => {
  const navigate = useNavigate()

  return useMutation<Discount, unknown, Varaibales>({
    mutationFn: applyDiscount,
    retry: false,
    onSuccess() {
      navigate('/dashboard/discounts')
    },
    ...options,
  })
}
