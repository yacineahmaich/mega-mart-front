import api from '../../../utils/api/admin'
import { useMutation } from '@tanstack/react-query'
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
    },
    onError() {
      window.scrollTo({ top: 0 })
    },
  })
}
