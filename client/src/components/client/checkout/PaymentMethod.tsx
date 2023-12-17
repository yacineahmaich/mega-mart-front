import { Formik, Form } from 'formik'
import Radio from '../../../components/client/ui/Radio'
import Button from '../../../components/client/ui/Button'
import { paymentMethodSchema } from '../../../utils/validation/client/checkout'
import useCheckoutStore, { PaymentMethods } from '../../../store/checkout'

function PaymentMethod() {
  const {
    paymentMethod,
    procedPaymentMethod,
    steps: { changeActiveStep },
  } = useCheckoutStore()

  const initialValues = {
    method: paymentMethod,
  }

  const onSubmit = (values: typeof initialValues) => {
    procedPaymentMethod(values.method)
    changeActiveStep(2)
  }

  return (
    <section>
      <div className="max-w-sm p-6 mx-auto border rounded-lg border-gray">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={paymentMethodSchema}
        >
          {formik => (
            <Form className="space-y-6">
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
                className="w-full"
                variant="medium"
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
