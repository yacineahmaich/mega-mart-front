import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useAuth } from '../../../context/Auth'
import { updateProfileSchema } from '../../../utils/validation/user'
import { toast } from 'react-hot-toast'
import { useUpdateProfile } from '../../../features/account/mutations'

const EditProfile = () => {
  const { user } = useAuth()
  const { mutateAsync: updateProfile } = useUpdateProfile()
  const initialValues = {
    name: user?.name,
    email: user?.email,
    password: '',
    passwordConfirmation: '',
  }

  const handleSublmit = (values: typeof initialValues) => {
    // filter empty proprties (password, passwordConf)
    //  (or we can do that in backend)

    const data = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v !== '')
    )

    toast.promise(updateProfile(data as typeof initialValues), {
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
          <Form>
            <div className="grid grid-cols-2 mt-8 gap-x-8">
              <div className="relative mb-10">
                <label
                  className="block mb-2 text-lg font-bold w-fit text-dark-500"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full py-5 rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                  placeholder="Your Name"
                  autoComplete="on"
                />
                <ErrorMessage
                  name="name"
                  render={msg => (
                    <p className="absolute mt-1 text-xs font-bold top-full text-danger-400">
                      <ExclamationTriangleIcon className="inline w-5 h-5" />
                      &nbsp;
                      <span>{msg}</span>
                    </p>
                  )}
                />
              </div>
              <div className="relative mb-10">
                <label
                  className="block mb-2 text-lg font-bold w-fit text-dark-500"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full py-5 rounded-md pointer-events-none focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input bg-light"
                  placeholder="Your Email"
                  autoComplete="on"
                  disabled={true}
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
              <div className="relative mb-10">
                <label
                  className="block mb-2 text-lg font-bold w-fit text-dark-500"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full py-5 rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                  placeholder="******"
                  autoComplete="on"
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
              <div className="relative mb-10">
                <label
                  className="block mb-2 text-lg font-bold w-fit text-dark-500"
                  htmlFor="passwordConfirmation"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  className="block w-full py-5 rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input"
                  placeholder="******"
                  autoComplete="on"
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  render={msg => (
                    <p className="absolute mt-1 text-xs font-bold top-full text-danger-400">
                      <ExclamationTriangleIcon className="inline w-5 h-5" />
                      &nbsp;
                      <span>{msg}</span>
                    </p>
                  )}
                />
              </div>

              <button
                type="submit"
                className="col-start-2 py-4 text-lg text-white rounded bg-primary-600"
              >
                Update Profile
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default EditProfile
