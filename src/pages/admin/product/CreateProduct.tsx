import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import spinner from '../../../assets/icons/spinner.svg'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik'
import { createProductSchema } from '../../../utils/validation/admin/product'
import { useCreateProduct } from '../../../features/admin/products/mutations/useCreateProduct'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'
import Error from '../Error'

const CreateProduct = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState<string[]>([uuid()])
  const {
    data,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories()
  const {
    mutate: createProduct,
    isLoading: isCreatingProduct,
    isError,
    error,
  } = useCreateProduct({
    onSuccess: () => navigate('/dashboard/products'),
  })

  const initialValues = {
    name: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    images: [],
  }
  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    const productData = {
      ...values,
      images: Object.values(Object.fromEntries(values.images)),
    }

    // eslint-disable-next-line
    // @ts-ignore
    createProduct(productData)
  }

  if (isCategoriesLoading) return <Loader />
  if (isCategoriesError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Create Product
      </h2>

      <section className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
        {isError && error?.errors && (
          <ul className="p-4 mb-4 border rounded-lg border-danger-700">
            {Object.values(error.errors)
              .flat()
              .map((err: string, idx) => (
                <li key={idx} className="text-sm font-semibold text-danger-300">
                  <ExclamationTriangleIcon className="inline w-5 h-5" />
                  &nbsp;<span>{err}</span>
                </li>
              ))}
          </ul>
        )}
        <fieldset disabled={isCreatingProduct}>
          <Formik
            initialValues={initialValues}
            validationSchema={createProductSchema}
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
                      name="name"
                      render={msg => (
                        <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                          <ExclamationTriangleIcon className="inline w-5 h-5" />
                          &nbsp;
                          <span>{msg}</span>
                        </p>
                      )}
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
                      name="price"
                      render={msg => (
                        <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                          <ExclamationTriangleIcon className="inline w-5 h-5" />
                          &nbsp;
                          <span>{msg}</span>
                        </p>
                      )}
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
                      name="quantity"
                      render={msg => (
                        <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                          <ExclamationTriangleIcon className="inline w-5 h-5" />
                          &nbsp;
                          <span>{msg}</span>
                        </p>
                      )}
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
                    >
                      <option value="" disabled>
                        select category
                      </option>
                      {data.categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      render={msg => (
                        <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                          <ExclamationTriangleIcon className="inline w-5 h-5" />
                          &nbsp;
                          <span>{msg}</span>
                        </p>
                      )}
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
                      name="description"
                      render={msg => (
                        <p className="absolute mt-1 text-xs font-bold duration-200 top-full animate-in slide-in-from-top-1 text-danger-400">
                          <ExclamationTriangleIcon className="inline w-5 h-5" />
                          &nbsp;
                          <span>{msg}</span>
                        </p>
                      )}
                    />
                  </div>

                  <div className="col-span-2">
                    <div className="flex items-center mb-3">
                      <label className="mr-2 text-sm font-medium">images</label>
                      <button
                        type="button"
                        className="px-2 py-1 text-xs text-white rounded bg-primary-600"
                        onClick={() => setImages(prev => [...prev, uuid()])}
                      >
                        + image
                      </button>
                      <ErrorMessage
                        name="images"
                        render={msg => (
                          <p className="ml-3 text-xs font-bold duration-200 left-full animate-in slide-in-from-left-1 text-danger-400">
                            <ExclamationTriangleIcon className="inline w-5 h-5" />
                            &nbsp;
                            <span>{msg}</span>
                          </p>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {images.map((imageId, idx) => (
                        <div className="flex items-center" key={imageId}>
                          <input
                            type="file"
                            name="images"
                            onChange={event => {
                              const image = event.target.files?.[0]

                              if (!image) return

                              formik.setFieldValue('images', [
                                ...formik.values.images,
                                [imageId, image],
                              ])
                            }}
                            className="rounded-lg form-input border-gray focus:ring-primary-600"
                          />
                          {idx === 0 ? (
                            <p className="ml-2 text-sm font-bold text-primary-800">
                              Thumbnail *
                            </p>
                          ) : (
                            <button
                              type="button"
                              className="ml-2"
                              onClick={() => {
                                formik.setFieldValue(
                                  'images',
                                  formik.values.images.filter(
                                    ([id]) => id !== imageId
                                  )
                                )
                                setImages(prev =>
                                  prev.filter(id => id !== imageId)
                                )
                              }}
                            >
                              <XMarkIcon className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {
                  // actions
                }

                <div className="flex items-center justify-end gap-3 mt-6">
                  <Link
                    to="/dashboard/products"
                    className="px-4 py-1.5 border rounded-lg border-gray text-dark-500 bg-light  hover:border-dark-500"
                  >
                    <span className="text-sm font-medium">Cancel</span>
                  </Link>
                  <button
                    type="submit"
                    className="px-8 py-1.5 border border-gray text-white rounded-lg bg-info-600"
                  >
                    {isCreatingProduct && (
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
        </fieldset>
        <div className="p-3 mt-8 space-y-1 text-sm rounded text-dark-500 bg-light">
          <h4 className="font-bold text-primary-500">&gt;&nbsp;Notes</h4>
          <p>
            <span className="mr-3 font-bold">Supported image types:</span>
            jpeg,jpg,png
          </p>
          <p>
            <span className="mr-3 font-bold">Supported image dimensions:</span>
            600 / 800 - 600 / 800
          </p>
        </div>
      </section>
    </div>
  )
}

export default CreateProduct
