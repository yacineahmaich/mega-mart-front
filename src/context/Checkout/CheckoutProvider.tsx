import { useState, FC } from 'react'
import CheckoutContext, { PaymentMethods } from '.'

type Props = {
  children: React.ReactNode
}

const CheckoutProvider: FC<Props> = ({ children }) => {
  // DELEVERY
  const [deleveryInformationIsValid, setDeleveryInformationIsValid] =
    useState(false)
  const [deleveryData, setDeleveryData] = useState<Checkout>({
    name: '',
    phone: '',
    email: '',
    shippingAddress: '',
    customerNote: '',
  })
  const procedCheckout = (checkout: Checkout) => {
    setDeleveryData(checkout)
    setDeleveryInformationIsValid(true)
  }

  // PAYMENT METHOD
  const [paymentMethodIsValid, setPaymentMethodIsValid] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)

  const selectMethod = (method: PaymentMethods) => {
    setPaymentMethod(method)
    setPaymentMethodIsValid(true)
  }

  return (
    <CheckoutContext.Provider
      value={{
        delevery: {
          data: deleveryData,
          procedCheckout,
          isValid: deleveryInformationIsValid,
        },
        paymentMethod: {
          method: paymentMethod,
          selectMethod,
          isValid: paymentMethodIsValid,
        },
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
export default CheckoutProvider
