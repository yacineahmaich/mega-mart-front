import spinner from '../../../assets/icons/spinner.svg'
import { Link, useParams } from 'react-router-dom'
import { Formik, Form, FormikValues } from 'formik'
import { createOfferSchema } from '../../../utils/validation/admin/offer'
import Loader from '../Loader'
import Error from '../Error'
import ErrorMsg from '../ErrorMsg'
import FormErrors from '../FormErrors'
import ImageInput from '../../../components/admin/ui/ImageInput'
import FieldGroup from '../../../components/admin/ui/FieldGroup'
import { useCreateOffer } from '../../../features/admin/offers/useCreateOffer'
import { useProduct } from '../../../features/admin/products/queries/useProduct'

const CreateOffer = () => {
  const { productId } = useParams()

  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useProduct(productId)

  const {
    mutate: createOffer,
    isLoading: isCreatingOffer,
    isError,
    error,
  } = useCreateOffer({
    onError() {
      window.scrollTo({ top: 0 })
    },
  })

  const initialValues = {
    start: '',
    end: '',
    backdrop: null,
  }
  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    createOffer({
      ...values,
      product: product.id,
    })
  }

  if (isProductLoading) return <Loader />
  if (isProductError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Make Offer For # {product.id}
      </h2>

      <section className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
        {isError && <FormErrors error={error} />}
        <Formik
          initialValues={initialValues}
          validationSchema={createOfferSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form>
              <div className="grid grid-cols-2 gap-8">
                <FieldGroup
                  input={{
                    type: 'datetime-local',
                  }}
                  label="Start"
                  name="start"
                  placeholder="Offer start date here..."
                />

                <FieldGroup
                  input={{
                    type: 'datetime-local',
                  }}
                  label="End"
                  name="end"
                  placeholder="Offer end date here..."
                />

                <div className="relative col-span-2 mt-6">
                  <div className="flex items-center mb-3">
                    <label className="mr-2 text-sm font-medium">
                      Backdrop Image
                    </label>
                    <ErrorMsg name="backdrop" position="right" />
                  </div>
                  <ImageInput
                    id="backdrop"
                    onChange={image => formik.setFieldValue('backdrop', image)}
                  />
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
                  disabled={isCreatingOffer}
                >
                  {isCreatingOffer && (
                    <span className="h-4 text-white ">
                      <img
                        src={spinner}
                        alt="spinner"
                        className="inline w-4 mr-2 animate-spin"
                      />
                    </span>
                  )}
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  )
}

export default CreateOffer
