import { Link } from 'react-router-dom'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Formik, Form } from 'formik'
import { signupSchema } from '../../utils/validation/auth'
import { useSignup } from '../../features/auth/useSignup'
import { isError } from '@tanstack/react-query'
import FieldGroup from '../../components/client/ui/FieldGroup'
import Button from '../../components/client/ui/Button'
import FormErrors from '../../components/common/FormErrors'

const Signup = () => {
  const { mutate: signup, error, isLoading } = useSignup()

  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  const handleSubmit = (values: typeof initialValues) => {
    signup(values)
  }

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-center text-primary-500">
        Create your Account Now
      </h4>

      <div>
        {isError && <FormErrors error={error} />}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signupSchema}
        >
          <Form>
            <FieldGroup label="Name" name="name" placeholder="Your Name" />
            <FieldGroup
              input={{ type: 'email' }}
              label="Email"
              name="email"
              placeholder="Your Email"
              disabled={isLoading}
            />

            <FieldGroup
              input={{ type: 'password' }}
              label="Password"
              name="password"
              placeholder="******"
              disabled={isLoading}
            />
            <FieldGroup
              input={{ type: 'password' }}
              label="Confirm Password"
              name="passwordConfirmation"
              placeholder="******"
              disabled={isLoading}
            />
            <Button className="mt-2" isLoading={isLoading}>
              Signup
            </Button>
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
