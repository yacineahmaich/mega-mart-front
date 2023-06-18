import { createContext, useContext } from 'react'

export enum PaymentMethods {
  DEBITCARD = 'debit-card',
  PAYPAL = 'paypal',
  CASH = 'cash',
}

type CheckoutCtx = {
  delevery: {
    data: Checkout
    procedCheckout: (checkout: Checkout) => void
    isValid: boolean
  }
  paymentMethod: {
    method: PaymentMethods
    selectMethod: (method: PaymentMethods) => void
    isValid: boolean
  }
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
  paymentMethod: {
    method: PaymentMethods.DEBITCARD,
    selectMethod: () => null,
    isValid: false,
  },
})

export const useCheckout = () => useContext(CheckoutContext)
export default CheckoutContext
