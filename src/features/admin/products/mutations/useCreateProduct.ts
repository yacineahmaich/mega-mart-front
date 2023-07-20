import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type Variables = {
  name: string
  price: string
  quantity: string
  category: string
  description: string
  images: File[]
}

const createProduct = async (productData: Variables) => {
  const response = await api.post('/products', productData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const useCreateProduct = (
  options?: UseMutationOptions<Product, Error, Variables>
) => {
  const navigate = useNavigate()

  return useMutation<Product, Error, Variables>({
    mutationFn: createProduct,
    onSuccess() {
      navigate('/dashboard/products')
    },
    ...options,
  })
}
