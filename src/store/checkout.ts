import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export enum PaymentMethods {
  DEBITCARD = 'debit-card',
  PAYPAL = 'paypal',
  CASH = 'cash',
}

export type DeliveryData = {
  name: string
  email: string
  phone: string
  shippingAddress: string
  note: string
}

type CheckoutState = {
  deliverey: DeliveryData | null
  procedDeliverey: (data: DeliveryData) => void
  paymentMethod: PaymentMethods | null
  procedPaymentMethod: (method: PaymentMethods) => void
  steps: {
    active: number
    changeActiveStep: (step: number) => void
  }
}

const useCheckoutStore = create<CheckoutState>()(
  devtools(set => ({
    deliverey: null,
    paymentMethod: null,
    procedDeliverey: data => set({ deliverey: data }),
    procedPaymentMethod: method => set({ paymentMethod: method }),
    steps: {
      active: 0,
      changeActiveStep: step =>
        set(state => {
          if (step === 1 && !state.deliverey) {
            return state
          }
          if (step === 2 && !state.paymentMethod) {
            return state
          }

          return { steps: { ...state.steps, active: step } }
        }),
    },
  }))
)

export default useCheckoutStore
