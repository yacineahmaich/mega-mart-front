import * as Yup from 'yup'

export const createMainCategorySchema = Yup.object({
  name: Yup.string().min(4).max(255).required(),
  description: Yup.string().min(20, 'Please give more detailed description'),
  image: Yup.mixed().required(),
})

export const editMainCategorySchema = Yup.object({
  name: Yup.string().min(4).max(255).required(),
  description: Yup.string()
    .min(20, 'Please give more detailed description')
    .nullable(),
  image: Yup.mixed().nullable(),
})
