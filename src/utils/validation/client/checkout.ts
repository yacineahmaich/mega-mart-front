import * as Yup from 'yup'

export const checkoutSchema = Yup.object({
  name: Yup.string().required(),
  phone: Yup.mixed().required(),
  email: Yup.string().email().required(),
  shippingAddress: Yup.string().required(),
  customerNote: Yup.string().required('Please leave a note here'),
})
