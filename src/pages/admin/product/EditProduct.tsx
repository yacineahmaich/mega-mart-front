import spinner from '../../../assets/icons/spinner.svg'
import { Link, ScrollRestoration, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { Formik, Form, FormikValues } from 'formik'
import { editProductSchema } from '../../../utils/validation/admin/product'

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
  ArrowTopRightOnSquareIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'
import { Swiper, SwiperSlide } from 'swiper/react'
import ErrorMsg from '../ErrorMsg'
import FormErrors from '../../../components/common/FormErrors'
import ImageInput from '../../../components/admin/ui/ImageInput'
import FieldGroup from '../../../components/admin/ui/FieldGroup'

const EditProduct = () => {
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
        {isError && <FormErrors error={error} />}
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
                <div className="col-span-2">
                  <FieldGroup
                    label="Name"
                    name="name"
                    placeholder="Product name here..."
                  />
                </div>

                {
                  // price
                }
                <FieldGroup
                  label="Price"
                  name="price"
                  placeholder="Price here..."
                />

                {
                  // quantity
                }
                <FieldGroup
                  label="Quantity"
                  name="quantity"
                  placeholder="Quantity here..."
                />

                {product.discount && (
                  <div className="col-span-2 p-3 italic border rounded text-slate-400">
                    <ExclamationTriangleIcon className="inline w-5 h-5 mr-2" />
                    <p className="inline text-sm font-medium">
                      This product has a {product.discount.percentage}% discount
                      applyed. current price is{' '}
                      <span className="font-bold text-md text-primary-600">
                        ${product.discount.price}
                      </span>
                      <Link
                        to={`/dashboard/discounts/${product.discount.id}/edit`}
                      >
                        <ArrowTopRightOnSquareIcon className="inline w-4 h-4 ml-2 -mt-1 text-primary-600" />
                      </Link>
                    </p>
                  </div>
                )}

                {
                  // category
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
                  // description
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
                  // delete images
                }
                <div className="w-full col-span-2">
                  <Swiper slidesPerView={6} spaceBetween={20}>
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
                    <ErrorMsg name="images" position="right" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {images.map((imageId, idx) => (
                      <div className="relative" key={imageId}>
                        <ImageInput
                          id={imageId}
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
