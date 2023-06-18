import { Navigate, useNavigate } from 'react-router-dom'
import { PaymentMethods, useCheckout } from '../../../context/Checkout'
import { Formik, Form } from 'formik'
import Radio from '../../../components/client/ui/Radio'
import Button from '../../../components/client/ui/Button'
import { paymentMethodSchema } from '../../../utils/validation/client/checkout'

function PaymentMethod() {
  const navigate = useNavigate()
  // check if previous step isValid
  const {
    delivery: { isValid: isDeleveryValid },
    paymentMethod: { selectMethod, method },
  } = useCheckout()
  if (!isDeleveryValid) return <Navigate to="/checkout" />

  const initialValues = {
    method,
  }

  const onSubmit = (values: typeof initialValues) => {
    selectMethod(values.method as PaymentMethods)
    navigate('/checkout/place-order')
  }

  return (
    <section>
      <div className="max-w-sm p-6 mx-auto mt-5 border rounded-lg shadow-lg border-gray">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={paymentMethodSchema}
        >
          {formik => (
            <Form className="space-y-6">
              <div className="relative">
                <label className={'block mb-2 font-bold w-fit text-dark-500'}>
                  Select Payment Method
                </label>
              </div>
              <Radio
                label="Debit Card"
                name="method"
                value={PaymentMethods.DEBITCARD}
              />
              <Radio
                label="Paypal"
                name="method"
                value={PaymentMethods.PAYPAL}
                disabled
              />
              <Radio
                label="Cash ON Delevery"
                name="method"
                value={PaymentMethods.CASH}
                disabled
              />

              <Button
                button={{
                  type: 'submit',
                }}
                disabled={!formik.values.method}
              >
                Proced
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default PaymentMethod
