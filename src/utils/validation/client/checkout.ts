import * as Yup from 'yup'
import { PaymentMethods } from '../../../context/Checkout'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const checkoutSchema = Yup.object({
  name: Yup.string().required(),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  email: Yup.string().email().required(),
  shippingAddress: Yup.string().required().label('Shipping Address'),
  note: Yup.string().required('Please leave a note here'),
})

export const paymentMethodSchema = Yup.object({
  method: Yup.string<PaymentMethods>()
    .oneOf(Object.values(PaymentMethods))
    .required('Please select a payment method'),
})
