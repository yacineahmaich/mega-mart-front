import { Form, Formik, FormikValues } from 'formik'
import spinner from '../../../assets/icons/spinner.svg'
import FormErrors from '../../../components/common/FormErrors'
import ErrorMsg from '../ErrorMsg'
import { Link, useParams } from 'react-router-dom'
import { useMainCategory } from '../../../features/admin/main-categories/queries/useMainCategory'
import { useUpdateMainCategory } from '../../../features/admin/main-categories/mutations/useUpdateMainCategory'
import { editMainCategorySchema } from '../../../utils/validation/admin/main-category'
import Loader from '../Loader'
import Error from '../Error'
import ImageInput from '../../../components/admin/ui/ImageInput'
import FieldGroup from '../../../components/admin/ui/FieldGroup'

function EditMainCategory() {
  const { id } = useParams()

  const { data: mainCategory, isLoading, isError } = useMainCategory(id)

  const initialValues = {
    name: mainCategory?.name ?? '',
    description: mainCategory?.description ?? '',
    image: null,
  }

  const {
    mutate: updateMainCategory,
    isLoading: isUpdating,
    isError: isUpdateError,
    error,
  } = useUpdateMainCategory()

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    updateMainCategory({ mainCategory: values, id })
  }

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Edit Main Category
      </h2>

      <section>
        <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
          {isUpdateError && <FormErrors error={error} />}
          <Formik
            initialValues={initialValues}
            validationSchema={editMainCategorySchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <div className="grid grid-cols-2 gap-8">
                  {
                    // name
                  }
                  <div className="relative col-span-2">
                    <FieldGroup
                      label="Name"
                      name="name"
                      placeholder="Name here ..."
                    />
                  </div>

                  {
                    // description
                  }
                  <div className="relative col-span-2">
                    <FieldGroup
                      input={{
                        as: 'textarea',
                        row: 5,
                      }}
                      label="Description"
                      name="description"
                      placeholder="Description here ..."
                    />
                  </div>

                  {
                    // image
                  }
                  <div className="relative col-span-2">
                    <div className="flex items-center mb-3">
                      <label className="mr-2 text-sm font-medium">Image</label>
                      <ErrorMsg name="image" position="right" />
                    </div>
                    <ImageInput
                      id="image"
                      defaultPreview={mainCategory.image.url}
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
                    {isUpdating && (
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

export default EditMainCategory
