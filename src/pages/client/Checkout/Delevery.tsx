import { Navigate } from 'react-router-dom'
import { useGetUser } from '../../../features/auth/useGetUser'
import { Formik, Form } from 'formik'
import { checkoutSchema } from '../../../utils/validation/client/checkout'
import { useCart } from '../../../context/Cart'
import FieldGroup from '../../../components/client/ui/FieldGroup'
import Button from '../../../components/client/ui/Button'
import { useCheckout } from '../../../context/Checkout'
import { BoltIcon } from '@heroicons/react/24/outline'

const Delevery = () => {
  const { data: user } = useGetUser()
  const { items } = useCart()
  const {
    delevery: { procedCheckout, isValid },
  } = useCheckout()

  // navigate to place-order if  del info is valid
  if (isValid) return <Navigate to="place-order" />

  // check if cart isvalid (not empty)
  const cartIsValid = Object.entries(items).length > 0
  if (!cartIsValid) return <Navigate to=".." />

  const initialValues = {
    name: user?.name,
    phone: '',
    email: user?.email,
    shippingAddress: '',
    customerNote: '',
  }

  const onSubmit = (values: typeof initialValues) => {
    procedCheckout(values)
  }

  return (
    <section className="relative p-3 md:p-6">
      <div>
        <h2 className="block p-2 mb-2 font-bold border w-fit text-primary-500">
          <div className="space-x-2">
            <BoltIcon className="inline w-6 h-6" />
            <span>Step 1 / 3</span>
            <span className="text-sm font-medium text-dark-500">
              | Delevery information
            </span>
          </div>
        </h2>

        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={checkoutSchema}
          >
            <Form>
              <div className="grid p-6 bg-white border-gray gap-y-2 gap-x-6 md:grid-cols-2">
                <FieldGroup label="Name" name="name" placeholder="Your Name" />

                <FieldGroup
                  input={{ type: 'email' }}
                  label="Email"
                  name="email"
                  placeholder="Your Email"
                />

                <FieldGroup
                  label="Phone"
                  name="phone"
                  placeholder="Your Phone"
                />

                <FieldGroup
                  label="Shipping Address"
                  name="shippingAddress"
                  placeholder="Your Address"
                />
                <div className="col-span-2">
                  <FieldGroup
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
                <Button className="max-w-md ml-auto">Proced</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Delevery
