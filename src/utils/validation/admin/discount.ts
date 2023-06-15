import * as Yup from 'yup'

export const createDiscountSchema = Yup.object({
  start: Yup.date()
    .required('Start date is required')
    .min(new Date(), 'Start date cannot be in the past'),
  end: Yup.date()
    .required('End date is')
    .min(Yup.ref('start'), 'End date cannot be earlier than start date'),
  percentage: Yup.number().min(1).max(100).required(),
})

export const editDiscountSchema = Yup.object({
  end: Yup.date()
    .required('End date is')
    .min(new Date(), 'End date cannot be in the past'),
  percentage: Yup.number().min(1).max(100).required(),
})
