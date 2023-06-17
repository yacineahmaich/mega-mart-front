import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { useUpdateProfile } from '../../../features/client/account/useUpdateProfile'
import { toast } from 'react-hot-toast'
import { updateProfileSchema } from '../../../utils/validation/client/profile'
import { Formik, Form } from 'formik'
import { removeEmptyFields } from '../../../utils/helpers'
import { useGetUser } from '../../../features/auth/useGetUser'
import FieldGroup from '../../../components/client/ui/FieldGroup'
import Button from '../../../components/client/ui/Button'

const EditProfile = () => {
  const { data: user } = useGetUser()
  const { mutateAsync: updateProfile, isLoading } = useUpdateProfile()

  const initialValues = {
    name: user.name,
    email: user.email,
    password: '',
    passwordConfirmation: '',
  }

  const handleSublmit = (values: typeof initialValues) => {
    toast.promise(updateProfile(removeEmptyFields(values)), {
      loading: 'Updating profile ...',
      success: 'Profile Updated successfully',
      error: 'Failed to update profile',
    })
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">
        <PencilSquareIcon className="inline w-6 h-6 mr-2" />
        <span className="align-middle">Edit Profile</span>
      </h3>

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSublmit}
          validationSchema={updateProfileSchema}
        >
          <fieldset disabled={isLoading}>
            <Form>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <FieldGroup name="name" label="Name" placeholder="Your Name" />
                <FieldGroup
                  name="email"
                  label="Email"
                  placeholder="Your Email"
                  disabled={isLoading}
                />
                <FieldGroup
                  input={{
                    type: 'password',
                    autoComplete: 'current-password',
                  }}
                  name="password"
                  label="Password"
                  placeholder="******"
                  disabled={isLoading}
                />

                <FieldGroup
                  input={{
                    type: 'password',
                    autoComplete: 'current-password',
                  }}
                  name="passwordConfirmation"
                  label="Confirm Password"
                  placeholder="******"
                  disabled={isLoading}
                />

                <Button className="col-start-2" isLoading={isLoading}>
                  Update Profile
                </Button>
              </div>
            </Form>
          </fieldset>
        </Formik>
      </div>
    </div>
  )
}

export default EditProfile
