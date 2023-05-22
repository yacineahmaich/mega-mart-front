import spinner from '../../../assets/icons/spinner.svg'
import {
  Link,
  ScrollRestoration,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik'
import { productSchema } from '../../../utils/validation/admin/product'

import { useQueryClient } from '@tanstack/react-query'
import { useProduct } from '../../../features/admin/products/queries/useProduct'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import { useUpdateProduct } from '../../../features/admin/products/mutations/useUpdateProduct'

import Loader from '../Loader'
import Error from '../Error'

const EditProduct = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useProduct(id)

  const {
    data,
    isLoading: isCategoriesLoading,
    isError: isCatgeoriesError,
  } = useCategories()

  const { mutate: updateProduct, isLoading } = useUpdateProduct({
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
      navigate('/dashboard/products')
    },
  })

  const initialValues = {
    name: product?.name ?? '',
    price: product?.price ?? '',
    quantity: product?.quantity ?? '',
    category: product?.category.id,
    description: product?.description ?? '',
    images: ['zdzdzdzdzd'],
  }

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    updateProduct({
      id: product.id,
      // eslint-disable-next-line
      // @ts-ignore
      product: values,
    })
  }

  if (isCategoriesLoading || isProductLoading) return <Loader />
  if (isCatgeoriesError || isProductError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Edit Product
      </h2>

      <section>
        <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
          <Formik
            initialValues={initialValues}
            validationSchema={productSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
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
                      placeholder="Product name here..."
                    />
                    <ErrorMessage
                      component="span"
                      name="name"
                      className="absolute mt-1 text-sm font-medium top-full text-danger-500 animate-drop"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium"
                    >
                      Price
                    </label>
                    <Field
                      type="number"
                      id="price"
                      name="price"
                      className="bg-white form-input border-gray focus:ring-primary-600 text-sm rounded-lg p-2.5 block w-full"
                      placeholder="Product price here..."
                    />
                    <ErrorMessage
                      component="span"
                      name="price"
                      className="absolute mt-1 text-sm font-medium top-full text-danger-500 animate-drop"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="quantity"
                      className="block mb-2 text-sm font-medium"
                    >
                      Quantity
                    </label>
                    <Field
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="bg-white form-input border-gray focus:ring-primary-600 text-sm rounded-lg p-2.5 block w-full"
                      placeholder="Product quantity here..."
                    />
                    <ErrorMessage
                      component="span"
                      name="quantity"
                      className="absolute mt-1 text-sm font-medium top-full text-danger-500 animate-drop"
                    />
                  </div>
                  <div className="relative col-span-2">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium"
                    >
                      category
                    </label>
                    <Field
                      as="select"
                      id="category"
                      name="category"
                      className="bg-white form-select border-gray focus:ring-primary-600 text-sm rounded-lg p-2.5 block w-full"
                      placeholder="Product category here..."
                      defaultValue={product.category.id}
                    >
                      {data.categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      component="span"
                      name="category"
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
                    to="/dashboard/products"
                    className="px-4 py-2 text-white rounded-lg bg-danger-300"
                  >
                    <span className="text-sm font-medium">Cancel</span>
                  </Link>
                  <button
                    type="submit"
                    className="px-8 py-2 text-white rounded-lg bg-info-600"
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
                    <span className="text-sm font-medium">Update Product</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <ScrollRestoration />
    </div>
  )
}

export default EditProduct
