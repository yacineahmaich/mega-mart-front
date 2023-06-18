import { useNavigate } from 'react-router-dom'
import { useGetUser } from '../../../features/auth/useGetUser'
import { Formik, Form } from 'formik'
import { checkoutSchema } from '../../../utils/validation/client/checkout'
import FieldGroup from '../../../components/client/ui/FieldGroup'
import Button from '../../../components/client/ui/Button'
import { useCheckout } from '../../../context/Checkout'

const Delevery = () => {
  const navigate = useNavigate()
  const { data: user } = useGetUser()
  const {
    delevery: { procedCheckout, data },
  } = useCheckout()

  const initialValues = {
    name: user?.name,
    phone: data?.phone,
    email: user?.email,
    shippingAddress: data?.shippingAddress,
    customerNote: data?.customerNote,
  }

  const onSubmit = (values: typeof initialValues) => {
    procedCheckout(values)
    navigate('payment-method')
  }

  return (
    <section className="relative max-w-3xl p-3 mx-auto md:p-6">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={checkoutSchema}
      >
        <Form>
          <div className="grid p-6 bg-white border-gray gap-y-1 gap-x-6 md:grid-cols-2">
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
                name="customerNote"
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

export default Delevery
