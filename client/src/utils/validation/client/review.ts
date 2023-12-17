import * as Yup from 'yup'

export const createReviewSchema = Yup.object({
  rating: Yup.number().min(1).max(5).required('please select how much stars '),
  comment: Yup.string().max(255).required(),
})
