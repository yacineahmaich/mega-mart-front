import * as Yup from 'yup'

export const checkoutSchema = Yup.object({
  name: Yup.string().required(),
  phone: Yup.mixed().required(),
  email: Yup.string().email().required(),
  country: Yup.string().required(),
  city: Yup.string().required(),
  shippingAddress: Yup.string().required(),
  customerNote: Yup.string().required('Please leave a note here'),
  paymentMethod: Yup.string().oneOf(['online', 'cash']),
})
