import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../../utils/api/admin'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

type Varaibales = {
  discountData: {
    end: string
    percentage: number
  }
  discountId: number
}

const updateDiscount = async ({
  discountData,
  discountId,
}: Varaibales): Promise<Discount> => {
  const response = await api.put(`/discounts/${discountId}`, discountData)

  return response.data
}

export const useUpdateDiscount = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateDiscount,
    onSuccess() {
      queryClient.invalidateQueries(['admin', 'discounts'])
      navigate('/dashboard/discounts')
      toast.success('Discount updated successfully')
    },
    onError() {
      window.scrollTo({ top: 0 })
      toast.error('Could not update Discount')
    },
  })
}
