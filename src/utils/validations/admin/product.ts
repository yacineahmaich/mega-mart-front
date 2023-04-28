import * as Yup from 'yup'

export const createProductValidation = Yup.object({
  title: Yup.string().min(12).max(255).required(),
  price: Yup.number().min(0.1).required(),
  quantity: Yup.number().min(1).required(),
  category: Yup.number().required(),
  description: Yup.string().max(999),
  images: Yup.array()
    .min(1, 'you should provide at least one image')
    .required(),
})
