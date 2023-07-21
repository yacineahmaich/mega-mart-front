import { Link, useParams } from 'react-router-dom'
import { Formik, Form, FormikValues } from 'formik'
import spinner from '../../../assets/icons/spinner.svg'
import Loader from '../Loader'
import Error from '../Error'
import ErrorMsg from '../ErrorMsg'
import FormErrors from '../../../components/common/FormErrors'
import ImageInput from '../../../components/admin/ui/ImageInput'
import FieldGroup from '../../../components/admin/ui/FieldGroup'
import { useUpdateCategory } from '../../../features/admin/categories/mutations/useUpdateCategory'
import { editCategorySchema } from '../../../utils/validation/admin/category'
import { useCategory } from '../../../features/admin/categories/queries/useCategory'
import { useMcategories } from '../../../features/client/main-category/m-categories'

const EditProduct = () => {
  const { id } = useParams()

  const {
    data: maincategories,
    isLoading: isMcategoriesLoading,
    isError: isMcategoriesError,
  } = useMcategories()

  const {
    data: category,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useCategory(id)

  const {
    mutate: updateCategory,
    isLoading: isUpdating,
    error,
    isError: isUpdateCategoryError,
  } = useUpdateCategory()

  const initialValues = {
    name: category?.name ?? '',
    description: category?.description ?? '',
    category: category?.parentCategory?.id,
    image: null,
  }

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    updateCategory({
      id: category.id,
      category: values,
    })
  }
  if (isMcategoriesLoading || isCategoryLoading) return <Loader />
  if (isMcategoriesError || isCategoryError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Edit Category
      </h2>

      <section>
        <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
          {isUpdateCategoryError && <FormErrors error={error} />}
          <Formik
            initialValues={initialValues}
            validationSchema={editCategorySchema}
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
                      placeholder="Name here..."
                    />
                  </div>

                  {
                    // Main category
                  }
                  <div className="relative col-span-2">
                    <FieldGroup
                      input={{
                        as: 'select',
                      }}
                      label="Main Category"
                      name="category"
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
                    // description
                  }
                  <div className="relative col-span-2">
                    <FieldGroup
                      input={{
                        as: 'textarea',
                        rows: 5,
                      }}
                      label="Description"
                      name="description"
                      placeholder="Description here..."
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
                      defaultPreview={category.image.url}
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

export default EditProduct
