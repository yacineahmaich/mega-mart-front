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
    <div className="space-y-6 animate-in slide-in-from-right-5">
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
            <Button className="w-full mt-2" isLoading={isLoading}>
              Signup
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Signup
