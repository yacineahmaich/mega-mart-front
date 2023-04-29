import * as Yup from 'yup'

export const categorySchema = Yup.object({
  name: Yup.string().min(4).max(255).required(),
  description: Yup.string().min(20, 'Please give more detailed description'),
})
