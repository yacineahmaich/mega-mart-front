import { createContext, useContext } from 'react'

export enum PaymentMethods {
  DEBITCARD = 'debit-card',
  PAYPAL = 'paypal',
  CASH = 'cash',
}

type CheckoutCtx = {
  delivery: {
    data: DeliveryData
    procedCheckout: (deliveryData: DeliveryData) => void
    isValid: boolean
  }
  paymentMethod: {
    method: PaymentMethods
    selectMethod: (method: PaymentMethods) => void
    isValid: boolean
  }
}

const CheckoutContext = createContext<CheckoutCtx>({
  delivery: {
    data: {
      name: '',
      phone: '',
      email: '',
      shippingAddress: '',
      note: '',
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
