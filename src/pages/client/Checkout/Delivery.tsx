import { useNavigate } from 'react-router-dom'
import { useGetUser } from '../../../features/auth/useGetUser'
import { Formik, Form } from 'formik'
import { checkoutSchema } from '../../../utils/validation/client/checkout'
import FieldGroup from '../../../components/client/ui/FieldGroup'
import Button from '../../../components/client/ui/Button'
import { useCheckout } from '../../../context/Checkout'

const Delivery = () => {
  const navigate = useNavigate()
  const { data: user } = useGetUser()
  const {
    delivery: { procedCheckout, data },
  } = useCheckout()

  const initialValues = {
    name: user?.name,
    phone: data?.phone,
    email: user?.email,
    shippingAddress: data?.shippingAddress,
    note: data?.note,
  }

  const onSubmit = (values: typeof initialValues) => {
    procedCheckout(values)
    navigate('payment-method')
  }

  return (
    <section className="relative max-w-3xl p-3 mx-auto my-5 border rounded-lg shadow-lg md:p-6 border-gray">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={checkoutSchema}
      >
        <Form>
          <div className="grid p-2 bg-white border-gray gap-x-6 md:grid-cols-2">
            <FieldGroup
              variant="small"
              label="Name"
              name="name"
              placeholder="Your Name"
            />

            <FieldGroup
              variant="small"
              input={{ type: 'email' }}
              label="Email"
              name="email"
              placeholder="Your Email"
            />

            <FieldGroup
              variant="small"
              label="Phone"
              name="phone"
              placeholder="Your Phone"
            />

            <FieldGroup
              variant="small"
              label="Shipping Address"
              name="shippingAddress"
              placeholder="Your Address"
            />
            <div className="col-span-2">
              <FieldGroup
                variant="small"
                input={{
                  as: 'textarea',
                  rows: 5,
                }}
                label="Note"
                name="note"
                placeholder="Your Note"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="medium" className="max-w-xs">
              Proced
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  )
}

export default Delivery
