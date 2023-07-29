import { useMutation } from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

type Varaibales = {
  end: string
  percentage: number
  product: number
}

const applyDiscount = async (data: Varaibales): Promise<Discount> => {
  const response = await api.post('/apply-discount', data)

  return response.data
}

export const useApplyDiscount = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: applyDiscount,
    onSuccess() {
      navigate('/dashboard/discounts')
      toast.success('Discount applyed successfully')
    },
    onError() {
      window.scrollTo({ top: 0 })
      toast.error('Could not apply Dicount')
    },
  })
}
