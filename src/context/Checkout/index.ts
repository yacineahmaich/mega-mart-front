import { createContext, useContext } from 'react'

type CheckoutCtx = {
  delevery: {
    data: Checkout
    procedCheckout: (checkout: Checkout) => void
    isValid: boolean
  }
  placeOrder: { isValid: boolean }
  complete: { isValid: boolean }
}

const CheckoutContext = createContext<CheckoutCtx>({
  delevery: {
    data: {
      name: '',
      phone: '',
      email: '',
      shippingAddress: '',
      customerNote: '',
    },
    procedCheckout: () => null,
    isValid: false,
  },
  placeOrder: {
    isValid: false,
  },
  complete: {
    isValid: false,
  },
})

export const useCheckout = () => useContext(CheckoutContext)
export default CheckoutContext
