import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

type Variables = {
  id: number
  category: {
    name: string
    description: string
    category: string | number
    image: File | null
  }
}

const updateCategory = async (categoryData: Variables): Promise<Category> => {
  const response = await api.post(
    `/categories/${categoryData.id}`,
    categoryData.category,
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

export const useUpdateCategory = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateCategory,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['admin', 'categories'],
      })
      navigate('/dashboard/categories')
      toast.success('Category updated successfully')
    },
    onError() {
      window.scrollTo({ top: 0 })
      toast.error('Could not update Category')
    },
  })
}
