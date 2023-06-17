import { Navigate } from 'react-router-dom'
import { useGetUser } from '../../features/auth/useGetUser'
import { Formik, Form } from 'formik'
import { checkoutSchema } from '../../utils/validation/client/checkout'
import { useCart } from '../../context/Cart'
import FieldGroup from '../../components/client/ui/FieldGroup'
import Radio from '../../components/client/ui/Radio'
import Button from '../../components/client/ui/Button'

const Checkout = () => {
  const { data: user } = useGetUser()
  const { items } = useCart()

  const cartIsValid = Object.entries(items).length > 0

  // if (!user) return <Navigate to="/account/login" />
  if (!cartIsValid) return <Navigate to=".." />

  const initialValues = {
    name: user?.name,
    phone: '',
    email: user?.email,
    country: '',
    city: '',
    shippingAddress: '',
    customerNote: '',
    paymentMethod: 'online',
  }

  const onSubmit = (values: typeof initialValues) => {
    console.log(values)
  }

  return (
    <section className="relative p-3 pb-10 bg-light md:p-6 md:pb-14">
      <div className="max-w-6xl mx-auto ">
        <h2 className="block mb-2 font-bold w-fit text-dark-500">
          Delevery information
        </h2>

        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={checkoutSchema}
          >
            <Form>
              <div className="grid p-6 mb-6 bg-white border border-gray gap-y-2 gap-x-6 md:grid-cols-2">
                <FieldGroup label="Name" name="name" placeholder="Your Name" />
                <FieldGroup
                  label="Phone"
                  name="phone"
                  placeholder="Your Phone"
                />
                <FieldGroup
                  input={{ type: 'email' }}
                  label="Email"
                  name="email"
                  placeholder="Your Email"
                />
                <FieldGroup
                  label="Country"
                  name="country"
                  placeholder="Your Country"
                />
                <FieldGroup label="City" name="city" placeholder="Your City" />
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
                    placeholder="Your ZIP"
                  />
                </div>
              </div>

              <div className="relative col-span-2 mb-7">
                <h2 className="block mb-2 font-bold w-fit text-dark-500">
                  Payment Method
                </h2>
                <div className="flex flex-wrap items-center justify-around gap-3 py-8 my-4 bg-white border border-gray">
                  <Radio
                    label="Online Payment"
                    name="paymentMethod"
                    value="online"
                  />
                  <Radio
                    label="Cash on Delevery"
                    name="paymentMethod"
                    value="cash"
                  />
                  <Radio label="Cash on Delevery" name="" value="cash" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="max-w-xs ml-auto">Proced</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Checkout
