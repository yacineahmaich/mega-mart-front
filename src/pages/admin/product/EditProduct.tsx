import { useState } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik'

// eslint-disable-next-line
// @ts-ignore
import { v4 as uuid } from 'uuid'
import { products } from '../../../lib/contants'
import { productSchema } from '../../../lib/validationSchemas/admin/product'

const EditProduct = () => {
  const product = products[0]

  // const [images, setImages] = useState<string[]>([])

  const initialValues = {
    title: product.name ?? '',
    price: product.price ?? '',
    quantity: product.quantity ?? 0,
    category: 1,
    description: 'some description',
    // images: [],
  }

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    console.log(values)
  }

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
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium"
                    >
                      Title
                    </label>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      className="bg-white form-input border-gray focus:ring-primary-600 text-sm rounded-lg p-2.5 block w-full"
                      placeholder="Product title here..."
                    />
                    <ErrorMessage
                      component="span"
                      name="title"
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
                    >
                      <option value="" disabled>
                        select category
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
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

                  {/* <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium">
                      images
                      <button
                        type="button"
                        className="px-2 py-1 ml-1 text-xs text-white rounded bg-primary-600"
                        onClick={() => setImages(prev => [...prev, uuid()])}
                      >
                        add image
                      </button>
                    </label>
                    <ErrorMessage
                      component="span"
                      name="images"
                      className="ml-1 text-sm font-medium pointer-events-none text-danger-500"
                    />
                    <div className="space-y-2">
                      {images.map((imageId, idx) => (
                        <div className="flex items-center" key={imageId}>
                          <input
                            type="file"
                            name="images"
                            onChange={event => {
                              const image = event.target.files
                                ? event.target.files[0]
                                : null

                              if (image === null) return

                              formik.setFieldValue('images', [
                                ...new Map(formik.values.images)
                                  .set(imageId, image)
                                  .entries(),
                              ])
                            }}
                            className="rounded-lg form-input border-gray focus:ring-primary-600"
                          />
                          {idx >= 1 && (
                            <button
                              type="button"
                              className="ml-2"
                              onClick={() => {
                                formik.setFieldValue('images', [
                                  ...new Map(
                                    Object.entries(formik.values.images).filter(
                                      ([key]) => key !== imageId
                                    )
                                  ),
                                ])
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
                  </div> */}
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
                    <span className="text-sm font-medium">Update Product</span>
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
