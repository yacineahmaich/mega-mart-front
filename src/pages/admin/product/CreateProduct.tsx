import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import spinner from '../../../assets/icons/spinner.svg'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { Formik, Form, FormikValues } from 'formik'
import { createProductSchema } from '../../../utils/validation/admin/product'
import { useCreateProduct } from '../../../features/admin/products/mutations/useCreateProduct'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import Loader from '../Loader'
import Error from '../Error'
import ErrorMsg from '../ErrorMsg'
import FormErrors from '../FormErrors'
import ImageInput from '../../../components/admin/ui/ImageInput'
import FieldGroup from '../../../components/admin/ui/FieldGroup'

const CreateProduct = () => {
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
    onError() {
      window.scrollTo({ top: 0 })
    },
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
        {isError && <FormErrors error={error} />}
        <fieldset disabled={isCreatingProduct}>
          <Formik
            initialValues={initialValues}
            validationSchema={createProductSchema}
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
                      placeholder="Product name here..."
                    />
                  </div>

                  {
                    // PRICE
                  }
                  <FieldGroup
                    label="Price"
                    name="price"
                    placeholder="Price name here..."
                  />

                  {
                    // QUANTITY
                  }
                  <FieldGroup
                    label="Quantity"
                    name="quantity"
                    placeholder="Product name here..."
                  />

                  {
                    // CATEGORY
                  }
                  <div className="col-span-2">
                    <FieldGroup
                      input={{ as: 'select' }}
                      label="category"
                      name="category"
                    >
                      <option value="" disabled>
                        select category
                      </option>
                      {data.categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </FieldGroup>
                  </div>

                  {
                    // DESCRIPTION
                  }
                  <div className="col-span-2">
                    <FieldGroup
                      input={{
                        as: 'textarea',
                        rows: 5,
                      }}
                      label="Description"
                      name="description"
                      placeholder="Description name here..."
                    />
                  </div>

                  {
                    // upload images
                  }
                  <div className="relative col-span-2">
                    <div className="flex items-center mb-3">
                      <label className="mr-2 text-sm font-medium">images</label>
                      <button
                        type="button"
                        className="px-2 py-1 text-xs text-white rounded bg-primary-600"
                        onClick={() => setImages(prev => [...prev, uuid()])}
                      >
                        + image
                      </button>
                      <ErrorMsg name="images" position="right" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {images.map((imageId, idx) => (
                        <div className="relative">
                          <ImageInput
                            id={imageId}
                            key={imageId}
                            onChange={image => {
                              formik.setFieldValue('images', [
                                ...formik.values.images,
                                [imageId, image],
                              ])
                            }}
                          />
                          {idx > 0 && (
                            <button
                              type="button"
                              className="absolute top-1 right-1"
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
