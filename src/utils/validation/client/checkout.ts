import * as Yup from 'yup'

export const checkoutSchema = Yup.object({
  name: Yup.string().required(),
  phone: Yup.mixed().required(),
  email: Yup.string().email().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zipCode: Yup.string(),
  adress: Yup.string().required(),
  customerNote: Yup.string(),
  paymentMethod: Yup.string().oneOf(['online', 'cash']),
})
