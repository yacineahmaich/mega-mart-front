import * as Yup from 'yup'

export const createDiscountSchema = Yup.object({
  end: Yup.date()
    .required('End date is required')
    .min(new Date(), 'End date cannot be in the past'),
  percentage: Yup.number().min(1).max(100).required(),
})

export const editDiscountSchema = Yup.object({
  end: Yup.date()
    .required('End date is required')
    .min(new Date(), 'End date cannot be in the past'),
  percentage: Yup.number().min(1).max(100).required(),
})
