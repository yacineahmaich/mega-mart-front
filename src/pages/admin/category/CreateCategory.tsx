import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik'
import { categorySchema } from '../../../utils/validation/admin/category'
import { useCreateCategory } from '../../../features/admin/categories/mutations/useCreateCategory'
import spinner from '../../../assets/icons/spinner.svg'

const CreateCategory = () => {
  const navigate = useNavigate()
  const { mutate: createCategory, isLoading } = useCreateCategory({
    onSuccess: () => {
      navigate('/dashboard/categories')
    },
  })
  const initialValues = {
    name: '',
    description: '',
  }

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    createCategory(values)
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Create Product
      </h2>

      <section>
        <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
          <Formik
            initialValues={initialValues}
            validationSchema={categorySchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="bg-white form-input border-gray focus:ring-primary-600 text-sm rounded-lg p-2.5 block w-full"
                    placeholder="Category name here..."
                  />
                  <ErrorMessage
                    component="span"
                    name="name"
                    className="absolute mt-1 text-sm font-medium top-full text-danger-500 animate-drop"
                  />
                </div>

                <div className="relative col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium"
                  >
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    className="bg-white form-textarea border-gray focus:ring-primary-600 text-sm rounded-lg p-2.5 block w-full min-h-[150px]"
                    placeholder="Category description here..."
                  />
                  <ErrorMessage
                    component="span"
                    name="description"
                    className="absolute mt-1 text-sm font-medium top-full text-danger-500 animate-drop"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6">
                <Link
                  to="/dashboard/products"
                  className="px-4 py-2 text-white rounded-lg bg-danger-300"
                >
                  <span className="text-sm font-medium">Cancel</span>
                </Link>
                <button
                  type="submit"
                  className="px-6 py-2 text-white rounded-lg bg-info-600 focus:ring focus:ring-info-100 focus:ring-offset-1 hover:bg-info-800 disabled:hover:bg-info-600"
                >
                  {isLoading && (
                    <span className="h-4 text-white ">
                      <img
                        src={spinner}
                        alt="spinner"
                        className="inline w-4 mr-2 animate-spin"
                      />
                    </span>
                  )}
                  <span className="text-sm font-medium">Create Category</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  )
}

export default CreateCategory
