import spinner from '../../../assets/icons/spinner.svg'
import {
  Link,
  ScrollRestoration,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik'
import { editProductSchema } from '../../../utils/validation/admin/product'

import { useQueryClient } from '@tanstack/react-query'
import { useProduct } from '../../../features/admin/products/queries/useProduct'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import { useUpdateProduct } from '../../../features/admin/products/mutations/useUpdateProduct'

import Loader from '../Loader'
import Error from '../Error'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useDeleteProductImage } from '../../../features/admin/products/mutations/useDeleteProductImage'
import { FC, useState } from 'react'
import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'
import { Swiper, SwiperSlide } from 'swiper/react'

const EditProduct = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { id } = useParams()
  const [images, setImages] = useState<string[]>([uuid()])

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

  const {
    mutate: updateProduct,
    isLoading,
    isError,
    error,
  } = useUpdateProduct({
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
      // navigate('/dashboard/products')
    },
    onError() {
      window.scrollTo({ top: 0 })
    },
  })

  const initialValues = {
    name: product?.name ?? '',
    price: product?.price ?? '',
    quantity: product?.quantity ?? '',
    category: product?.category.id,
    description: product?.description ?? '',
    images: [],
  }

  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    const productData = {
      ...values,
      images: Object.values(Object.fromEntries(values.images)),
    }
    // console.log(productData.images)
    // return

    // eslint-disable-next-line
    // @ts-ignore
    updateProduct({ product: productData, id: product.id })
  }

  if (isCategoriesLoading || isProductLoading) return <Loader />
  if (isCatgeoriesError || isProductError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Edit Product
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
        <Formik
          initialValues={initialValues}
          validationSchema={editProductSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form>
              <div className="grid grid-cols-2 gap-8">
                {
                  // name
                }
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

                {
                  // price
                }
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

                {
                  // quantity
                }
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

                {
                  // category
                }
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
                    // defaultValue={product.category.id}
                  >
                    {data.categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
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

                {
                  // description
                }
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

                {
                  // delete images
                }
                <div className="w-full col-span-2">
                  <Swiper slidesPerView={7} spaceBetween={20}>
                    {product.images.map((img, idx) => (
                      <SwiperSlide key={img.id}>
                        <div className="relative w-20 h-24 rounded-lg bg-light">
                          <ProductImg
                            key={img.id}
                            idx={idx}
                            image={img}
                            productId={product.id}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
                  <div className="flex flex-wrap gap-3">
                    {images.map(imageId => (
                      <div className="relative flex items-center" key={imageId}>
                        <label htmlFor={imageId}>
                          <div className="flex items-center justify-center w-20 h-24 rounded-lg bg-light">
                            <PhotoIcon className="w-6 h-6" />
                            <input
                              id={imageId}
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
                              hidden
                            />
                          </div>
                        </label>
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
                            setImages(prev => prev.filter(id => id !== imageId))
                          }}
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </button>
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
      </section>
      <ScrollRestoration />
    </div>
  )
}

type Props = {
  image: Image
  productId: number
  idx: number
}

const ProductImg: FC<Props> = ({ image, productId, idx }) => {
  const { mutate: deleteImage, isLoading } = useDeleteProductImage()

  return (
    <>
      {idx > 0 && (
        <button
          type="button"
          className="absolute top-0 right-0 p-1 bg-white border rounded-full border-gray active:scale-95 translate-x-1/4 -translate-y-1/4"
          onClick={() =>
            deleteImage({
              productId: productId,
              imageId: image.id,
            })
          }
          disabled={isLoading}
        >
          {isLoading ? (
            <ArrowPathIcon className="w-4 h-4 animate-spin" />
          ) : (
            <XMarkIcon className="w-4 h-4" />
          )}
        </button>
      )}
      <img
        src={image.url}
        alt={image.name}
        className="object-cover w-full h-full rounded-lg"
      />
    </>
  )
}

export default EditProduct
