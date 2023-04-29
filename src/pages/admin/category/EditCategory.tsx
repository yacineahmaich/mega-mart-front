import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik'
import { categorySchema } from '../../../lib/validation/category'

const category = {
  id: 1,
  name: 'category name',
  description: 'cat description...',
}

const EditProduct = () => {
  const initialValues = {
    name: category.name ?? '',
    description: category.description ?? '',
  }

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    console.log(values)
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Edit Category
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
                    placeholder="Product description here..."
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
                  to="/dashboard/categories"
                  className="px-4 py-2 text-white rounded-lg bg-danger-300"
                >
                  <span className="text-sm font-medium">Cancel</span>
                </Link>
                <button
                  type="submit"
                  className="px-8 py-2 text-white rounded-lg bg-info-600"
                >
                  <span className="text-sm font-medium">Update Product</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  )
}

export default EditProduct
