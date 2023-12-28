import { Formik, Form } from 'formik'
import { checkoutSchema } from '../../utils/validation/client/checkout'
import FieldGroup from '../ui/FieldGroup'
import Button from '../ui/Button'
import useCheckoutStore from '../../store/checkout'
import { useGetUser } from '../../services/auth/useGetUser'

const Delivery = () => {
  const { data: user } = useGetUser()

  const {
    procedDeliverey,
    deliverey,
    steps: { changeActiveStep },
  } = useCheckoutStore()

  const initialValues = {
    name: user?.name ?? '',
    phone: deliverey?.phone ?? '',
    email: user?.email ?? '',
    shippingAddress: deliverey?.shippingAddress ?? '',
    note: deliverey?.note ?? '',
  }

  const onSubmit = (values: typeof initialValues) => {
    procedDeliverey(values)
    changeActiveStep(1)
  }

  return (
    <section className="relative max-w-xl p-3 mx-auto border rounded-lg border-gray">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={checkoutSchema}
      >
        <Form>
          <div className="grid-cols-1 p-2 bg-white border-gray">
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
            <Button variant="medium" className="block w-full">
              Proced
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  )
}

export default Delivery
