import * as Yup from 'yup'

export const createCategorySchema = Yup.object({
  name: Yup.string().min(4).max(255).required(),
  description: Yup.string().min(20, 'Please give more detailed description'),
  category: Yup.number().required(),
  image: Yup.mixed().required(),
})

export const editCategorySchema = Yup.object({
  name: Yup.string().min(4).max(255).required(),
  description: Yup.string().min(20, 'Please give more detailed description'),
  category: Yup.number().required(),
  image: Yup.mixed().nullable(),
})
