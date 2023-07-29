import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

type Variables = {
  id: string
  mainCategory: {
    name: string
    description: string
    image: File | null
  }
}

const updateMainCategory = async (
  categoryData: Variables
): Promise<MainCategory> => {
  const response = await api.post(
    `/main-categories/${categoryData.id}`,
    categoryData.mainCategory,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        _method: 'PUT',
      },
    }
  )

  return response.data
}

export const useUpdateMainCategory = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateMainCategory,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['admin', 'main-categories'],
      })
      navigate('/dashboard/main-categories')
      toast.success('Main Category updated successfully')
    },
    onError() {
      window.scrollTo({ top: 0 })
      toast.error('Could not update Main Category')
    },
  })
}
