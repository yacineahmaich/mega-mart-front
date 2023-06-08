import * as Yup from 'yup'

export const createProductSchema = Yup.object({
  name: Yup.string().min(12).max(255).required(),
  price: Yup.number().min(0.1).required(),
  quantity: Yup.number().min(1).required(),
  category: Yup.number().required(),
  description: Yup.string().max(999),
  images: Yup.array().min(1, 'product thumbnail image is required').required(),
})

export const editProductSchema = Yup.object({
  name: Yup.string().min(12).max(255).required(),
  price: Yup.number().min(0.1).required(),
  quantity: Yup.number().min(1).required(),
  category: Yup.number().required(),
  description: Yup.string().max(999),
  images: Yup.array(),
})
