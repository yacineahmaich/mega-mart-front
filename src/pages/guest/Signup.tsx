import { Link } from 'react-router-dom'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signupSchema } from '../../utils/validation/user'
import { useSignup } from '../../features/auth/useSignup'
import { toast } from 'react-hot-toast'
import { isError } from '@tanstack/react-query'
import { useAuth } from '../../context/Auth'

const Signup = () => {
  const { setProfile, setToken } = useAuth()
  const {
    mutateAsync: signup,
    error,
    isLoading,
  } = useSignup({
    onSuccess: data => {
      setProfile(data.profile)
      setToken(data.token)
    },
  })

  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  const handleSubmit = (values: typeof initialValues) => {
    toast.promise(signup(values), {
      loading: 'Signup ...',
      success: 'Signed up successefully',
      error: 'Failed to signup',
    })
  }

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-center text-primary-500">
        Create your Account Now
      </h4>

      <div>
        {isError && error?.errors && (
          <ul className="p-4 mb-4 border rounded-lg border-danger-700">
            {Object.values(error.errors)
              .flat()
              .map((err: string, idx) => (
                <li key={idx} className="text-sm font-semibold text-danger-300">
                  <ExclamationTriangleIcon className="inline w-5 h-5" />
                  &nbsp;<span>{err}</span>
                </li>
              ))}
          </ul>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signupSchema}
        >
          <Form>
            <div className="relative mb-7">
              <label
                className="block mb-2 text-sm font-bold w-fit text-dark-500"
                htmlFor="name"
              >
                Username
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="block w-full transition-all rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                placeholder="Username"
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
                htmlFor="email"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                placeholder="Email Address"
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
                autoComplete="on"
              />
              <ErrorMessage
                name="password"
                render={msg => (
                  <p className="absolute mt-1 text-xs font-bold duration-200 animate-in slide-in-from-top-1 top-full text-danger-400">
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
                htmlFor="passwordConfirmation"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                className="block w-full rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                placeholder="******"
                autoComplete="on"
              />
              <ErrorMessage
                name="passwordConfirmation"
                render={msg => (
                  <p className="absolute mt-1 text-xs font-bold duration-200 animate-in slide-in-from-top-1 top-full text-danger-400">
                    <ExclamationTriangleIcon className="inline w-5 h-5" />
                    &nbsp;
                    <span>{msg}</span>
                  </p>
                )}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-3 text-white transition-colors rounded from-primary-600 to-primary-500 bg-gradient-to-tr hover:to-primary-600 disabled:cursor-auto disabled:hover:hover:to-primary-500"
              disabled={isLoading}
            >
              Signup
            </button>
          </Form>
        </Formik>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 font-medium text-dark-600">
        <p>Already have an account?</p>
        <Link to="/account/login" className="font-semibold text-primary-600">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Signup
