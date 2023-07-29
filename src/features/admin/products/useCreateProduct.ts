import api from '../../../utils/api/admin'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

type Variables = {
  name: string
  price: string
  quantity: string
  category: string
  description: string
  images: File[]
}

const createProduct = async (productData: Variables): Promise<Product> => {
  const response = await api.post('/products', productData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const useCreateProduct = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: createProduct,
    onSuccess() {
      navigate('/dashboard/products')
      toast.success('Product created successfully')
    },
    onError() {
      window.scrollTo({ top: 0 })
      toast.error('Could not create Product')
    },
  })
}
