import * as Yup from 'yup'

export const createOfferSchema = Yup.object({
  end: Yup.date()
    .required('End date is required')
    .min(new Date(), 'End date cannot be in the past'),
  backdrop: Yup.mixed().required().label('backdrop image'),
})

export const editOfferSchema = Yup.object({
  end: Yup.date().required().min(new Date(), 'End date cannot be in the past'),
  backdrop: Yup.mixed().nullable(),
})
