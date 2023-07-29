import api from '../../../utils/api/admin'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

type Variables = {
  name: string
  description: string
  image: File | null
}

const createMainCategory = async (
  categoryData: Variables
): Promise<MainCategory> => {
  const response = await api.post('/main-categories', categoryData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const useCreateMainCategory = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: createMainCategory,
    onSuccess() {
      navigate('/dashboard/main-categories')
      toast.success('Main Category created successfully')
    },
    onError() {
      window.scrollTo({ top: 0 })
      toast.error('Could not create Main Category')
    },
  })
}
