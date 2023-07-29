import api from '../../../utils/api/admin'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

type Variables = {
  name: string
  description: string
  category: string | number
  image: File | null
}

const createCategory = async (categoryData: Variables): Promise<Product> => {
  const response = await api.post('/categories', categoryData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const useCreateCategory = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: createCategory,
    onSuccess() {
      navigate('/dashboard/categories')
      toast.success('Category created')
    },
    onError() {
      window.scrollTo({ top: 0 })
      toast.error('Could not create Category')
    },
  })
}
