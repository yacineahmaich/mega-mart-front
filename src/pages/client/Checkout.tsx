import { Navigate } from 'react-router-dom'
import { useGetUser } from '../../features/auth/useGetUser'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { checkoutSchema } from '../../utils/validation/client/checkout'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Checkout = () => {
  const { data: user } = useGetUser()
  if (!user) return <Navigate to="/account/login" />

  const initialValues = {
    name: user.name,
    phone: '',
    email: user.email,
    city: '',
    state: '',
    zipCode: '',
    adress: '',
    customerNote: '',
    paymentMethod: 'online',
  }

  const onSubmit = (values: typeof initialValues) => {
    console.log(values)
  }

  return (
    <section className="max-w-6xl px-3 mx-auto md:px-6">
      <div>
        <h2 className="mb-4 text-lg font-medium text-primary-600">
          Delevery information
        </h2>

        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={checkoutSchema}
          >
            <Form>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full transition-all rounded-none focus:ring-2 focus:ring-primary-800 border-slate-400 focus:border-transparent form-input"
                    placeholder="Your Name"
                    autoComplete="on"
                  />
                  <ErrorMessage
                    name="name"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>
                <div className="relative mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="phone"
                  >
                    Phone *
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className="block w-full transition-all rounded-none focus:ring-2 focus:ring-primary-800 border-slate-400 focus:border-transparent form-input"
                    placeholder="Your phone"
                    autoComplete="on"
                  />
                  <ErrorMessage
                    name="phone"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>
                <div className="relative mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full transition-all rounded-none focus:ring-2 focus:ring-primary-800 border-slate-400 focus:border-transparent form-input"
                    placeholder="Your Email"
                    autoComplete="on"
                  />
                  <ErrorMessage
                    name="email"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>
                <div className="relative mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="city"
                  >
                    City *
                  </label>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full transition-all rounded-none focus:ring-2 focus:ring-primary-800 border-slate-400 focus:border-transparent form-input"
                    placeholder="Your City"
                    autoComplete="on"
                  />
                  <ErrorMessage
                    name="city"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>
                <div className="relative mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="adress"
                  >
                    Adress *
                  </label>
                  <Field
                    type="text"
                    name="adress"
                    id="adress"
                    className="block w-full transition-all rounded-none focus:ring-2 focus:ring-primary-800 border-slate-400 focus:border-transparent form-input"
                    placeholder="Your Adress"
                    autoComplete="on"
                  />
                  <ErrorMessage
                    name="adress"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>
                <div className="relative mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="zipCode"
                  >
                    ZIP
                  </label>
                  <Field
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    className="block w-full transition-all rounded-none focus:ring-2 focus:ring-primary-800 border-slate-400 focus:border-transparent form-input"
                    placeholder="Your ZIP"
                    autoComplete="on"
                  />
                  <ErrorMessage
                    name="zipCode"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>
                <div className="relative col-span-2 mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="paymentMethod"
                  >
                    Payment Method
                  </label>
                  <div className="flex flex-wrap items-center justify-around gap-3 my-4">
                    <label
                      className="flex items-center gap-3 cursor-pointer"
                      htmlFor="online"
                    >
                      <Field
                        type="radio"
                        name="paymentMethod"
                        id="online"
                        value="online"
                        className="form-radio text-primary-500 focus:outline-primary-500"
                      />
                      <span className="font-medium text-dark-500">
                        Online Payment
                      </span>
                    </label>
                    <label
                      className="flex items-center gap-3 cursor-pointer"
                      htmlFor="cash"
                    >
                      <Field
                        type="radio"
                        name="paymentMethod"
                        id="cash"
                        value="cash"
                        className="form-radio text-primary-500 focus:outline-primary-500"
                      />
                      <span className="font-medium text-dark-500">
                        Cash on Delevery
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <Field
                        type="radio"
                        className="form-radio text-primary-500 focus:outline-primary-500"
                      />
                      <span className="font-medium text-dark-500">
                        Cash on Delevery
                      </span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="paymentMethod"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>
                <div className="relative col-span-2 mb-7">
                  <label
                    className="block mb-2 text-sm font-bold w-fit text-dark-500"
                    htmlFor="customerNote"
                  >
                    Note
                  </label>
                  <Field
                    as="textarea"
                    name="customerNote"
                    id="customerNote"
                    className="block w-full transition-all rounded-none focus:ring-2 focus:ring-primary-800 border-slate-400 focus:border-transparent form-textarea"
                    placeholder="Your Note"
                    autoComplete="on"
                    rows={5}
                  />
                  <ErrorMessage
                    name="customerNote"
                    render={msg => (
                      <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                        <ExclamationTriangleIcon className="inline w-5 h-5" />
                        &nbsp;
                        <span>{msg}</span>
                      </p>
                    )}
                  />
                </div>

                <div className="flex justify-end col-span-2">
                  <button
                    type="submit"
                    className="px-20 py-4 text-white bg-gradient-to-tr from-primary-700 to-primary-600"
                  >
                    <span>Confirm Order</span>
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Checkout
