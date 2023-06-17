import { useState, FC } from 'react'
import CheckoutContext from '.'

type Props = {
  children: React.ReactNode
}

const CheckoutProvider: FC<Props> = ({ children }) => {
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

  return (
    <CheckoutContext.Provider
      value={{
        delevery: {
          data: deleveryData,
          procedCheckout,
          isValid: deleveryInformationIsValid,
        },
        placeOrder: { isValid: false },
        complete: { isValid: false },
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
export default CheckoutProvider
