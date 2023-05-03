import { Link } from 'react-router-dom'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginSchema } from '../../utils/validation/auth'

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values)
  }

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-bold text-center text-primary-500">
        Login To your Account
      </h4>

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <Form>
            <div className="relative mb-7">
              <label
                className="block mb-2 text-sm font-bold w-fit text-dark-500"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                placeholder="Username"
              />
              <ErrorMessage
                name="email"
                render={msg => (
                  <p className="absolute mt-1 text-xs font-bold top-full text-danger-400">
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
                htmlFor="password"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                placeholder="******"
              />
              <ErrorMessage
                name="password"
                render={msg => (
                  <p className="absolute mt-1 text-xs font-bold top-full text-danger-400">
                    <ExclamationTriangleIcon className="inline w-5 h-5" />
                    &nbsp;
                    <span>{msg}</span>
                  </p>
                )}
              />
            </div>
            <button className="w-full py-2 mt-3 text-white transition-colors rounded from-primary-600 to-primary-500 bg-gradient-to-tr hover:to-primary-600">
              Login
            </button>
          </Form>
        </Formik>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1 font-medium text-dark-600">
        <p>You don't have account yet?</p>
        <Link to="/account/signup" className="font-semibold text-primary-600">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Login
