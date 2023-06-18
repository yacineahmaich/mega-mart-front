import * as Yup from 'yup'
import { PaymentMethods } from '../../../context/Checkout'

export const checkoutSchema = Yup.object({
  name: Yup.string().required(),
  phone: Yup.mixed().required(),
  email: Yup.string().email().required(),
  shippingAddress: Yup.string().required().label('Shipping Address'),
  customerNote: Yup.string().required('Please leave a note here'),
})

export const paymentMethodSchema = Yup.object({
  method: Yup.string<PaymentMethods>()
    .oneOf(Object.values(PaymentMethods))
    .required('Please select a payment method'),
})
