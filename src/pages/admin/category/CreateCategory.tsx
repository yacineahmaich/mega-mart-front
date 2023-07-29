import spinner from '../../../assets/icons/spinner.svg'
import { Link } from 'react-router-dom'
import { Formik, Form, FormikValues } from 'formik'
import Loader from '../Loader'
import Error from '../Error'
import FormErrors from '../../../components/common/FormErrors'
import ImageInput from '../../../components/admin/ui/ImageInput'
import FieldGroup from '../../../components/admin/ui/FieldGroup'
import ErrorMsg from '../ErrorMsg'
import { createCategorySchema } from '../../../utils/validation/admin/category'
import { useCreateCategory } from '../../../features/admin/categories/useCreateCategory'
import { useAllMainCategories } from '../../../features/admin/main-categories/useAllMainCategories'

const CreateCategory = () => {
  const {
    data: maincategories,
    isLoading: isMcategoriesLoading,
    isError: isMcategoriesError,
  } = useAllMainCategories()

  const {
    mutate: createCategory,
    isLoading,
    isError,
    error,
  } = useCreateCategory()
  const initialValues = {
    name: '',
    description: '',
    category: '',
    image: null,
  }

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    // eslint-disable-next-line
    //@ts-ignore
    createCategory(values)
  }

  if (isMcategoriesLoading) return <Loader />
  if (isMcategoriesError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Create Category
      </h2>

      <section>
        <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
          {isError && <FormErrors error={error} />}
          <Formik
            initialValues={initialValues}
            validationSchema={createCategorySchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <div className="grid grid-cols-2 gap-8">
                  {
                    // NAME
                  }
                  <div className="col-span-2">
                    <FieldGroup
                      label="Name"
                      name="name"
                      placeholder="Name here..."
                    />
                  </div>

                  {
                    // PARENT CATEGORY
                  }
                  <div className="col-span-2">
                    <FieldGroup
                      input={{
                        as: 'select',
                      }}
                      label="Parent Category"
                      name="category"
                      placeholder="Name here..."
                    >
                      <option value="" disabled>
                        select category
                      </option>
                      {maincategories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </FieldGroup>
                  </div>

                  {
                    // Description
                  }
                  <div className="col-span-2">
                    <FieldGroup
                      input={{
                        as: 'textarea',
                        rows: 5,
                      }}
                      label="Description"
                      name="description"
                      placeholder="Name here..."
                    />
                  </div>

                  {
                    // IMAGE
                  }
                  <div className="relative col-span-2">
                    <div className="flex items-center mb-3">
                      <label className="mr-2 text-sm font-medium">Image</label>
                      <ErrorMsg name="image" position="right" />
                    </div>
                    <ImageInput
                      id="image"
                      onChange={image => formik.setFieldValue('image', image)}
                    />
                  </div>
                </div>

                {
                  // actions
                }
                <div className="flex items-center justify-end gap-3 mt-6">
                  <Link
                    to=".."
                    className="px-4 py-1.5 border rounded-lg border-gray text-dark-500 bg-light  hover:border-dark-500"
                  >
                    <span className="text-sm font-medium">Cancel</span>
                  </Link>
                  <button
                    type="submit"
                    className="px-8 py-1.5 border border-gray text-white rounded-lg bg-info-600"
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
                    <span className="text-sm font-medium">Save changes</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  )
}

export default CreateCategory
