import * as Yup from 'yup'

export const createOfferSchema = Yup.object({
  start: Yup.date()
    .required()
    .min(new Date(), 'Start date cannot be in the past'),
  end: Yup.date()
    .required()
    .min(Yup.ref('start'), 'End date cannot be earlier than start date'),
  backdrop: Yup.mixed().required().label('backdrop image'),
})
