import spinner from '../../../assets/icons/spinner.svg'
import { Link, useParams } from 'react-router-dom'
import { Formik, Form, FormikValues } from 'formik'
import Loader from '../Loader'
import Error from '../Error'
import FormErrors from '../../../components/common/FormErrors'
import FieldGroup from '../../../components/admin/ui/FieldGroup'
import ImageInput from '../../../components/admin/ui/ImageInput'
import ErrorMsg from '../ErrorMsg'
import { editOfferSchema } from '../../../utils/validation/admin/offer'
import { useOffer } from '../../../features/admin/offers/useOffer'
import { useUpdateOffer } from '../../../features/admin/offers/useUpdateOffer'

const EditOffer = () => {
  const { id } = useParams()

  const {
    data: offer,
    isLoading: isOfferLoading,
    isError: isOfferError,
  } = useOffer(id)

  const {
    mutate: updateOffer,
    isLoading: isUpdatingOffer,
    isError,
    error,
  } = useUpdateOffer()

  const initialValues = {
    start: offer?.start,
    end: offer?.end,
    backdrop: null,
  }
  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    updateOffer(
      {
        offerData: values,
        offerId: offer.id,
      },
      {
        onError() {
          window.scrollTo({ top: 0 })
        },
      }
    )
  }

  if (isOfferLoading) return <Loader />
  if (isOfferError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Edit Offer For # {offer.product.id}
      </h2>

      <section className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
        {isError && <FormErrors error={error} />}
        <Formik
          initialValues={initialValues}
          validationSchema={editOfferSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form>
              <div className="grid grid-cols-2 gap-8">
                <FieldGroup
                  input={{
                    type: 'datetime-local',
                    disabled: true,
                  }}
                  label="Start"
                  name="start"
                />

                <FieldGroup
                  input={{
                    type: 'datetime-local',
                  }}
                  label="End"
                  name="end"
                  placeholder="Discount end date here..."
                />

                <div className="relative col-span-2">
                  <div className="flex items-center mb-3">
                    <label
                      className="mr-2 text-sm font-medium"
                      htmlFor="backdrop"
                    >
                      Backdrop
                    </label>
                    <ErrorMsg name="backdrop" position="right" />
                  </div>
                  <ImageInput
                    id="backdrop"
                    defaultPreview={offer.backdrop.url}
                    onChange={image => formik.setFieldValue('backdrop', image)}
                  />
                </div>
              </div>

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
                  disabled={isUpdatingOffer}
                >
                  {isUpdatingOffer && (
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
    </div>
  )
}

export default EditOffer
