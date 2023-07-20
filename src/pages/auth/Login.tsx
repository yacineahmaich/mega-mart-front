import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Formik, Form } from 'formik'
import { loginSchema } from '../../utils/validation/auth'
import { useLogin } from '../../features/auth/useLogin'
import FieldGroup from '../../components/client/ui/FieldGroup'
import Button from '../../components/client/ui/Button'

const Login = () => {
  const { mutate: login, isError, error, isLoading } = useLogin()

  const initialValues = {
    email: '',
    password: '',
  }

  const handleSubmit = (values: typeof initialValues) => {
    login(values)
  }

  return (
    <div className="space-y-4 animate-in slide-in-from-left-5">
      <div>
        {isError && error?.message && (
          <ul className="p-4 mb-4 border rounded-lg border-danger-700">
            <li className="text-sm font-semibold text-danger-300">
              <ExclamationTriangleIcon className="inline w-5 h-5" />
              &nbsp;<span>{error.message}</span>
            </li>
          </ul>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <Form>
            <FieldGroup
              input={{ type: 'email' }}
              name="email"
              label="Email"
              placeholder="Your Email"
              disabled={isLoading}
            />
            <FieldGroup
              input={{ type: 'password' }}
              name="password"
              label="Password"
              placeholder="Your Password"
              disabled={isLoading}
            />
            <Button className="w-full mt-2" isLoading={isLoading}>
              Login
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
