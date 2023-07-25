import spinner from '../../../assets/icons/spinner.svg'
import { Link, useParams } from 'react-router-dom'
import { Formik, Form, FormikValues } from 'formik'
import Loader from '../Loader'
import Error from '../Error'
import FormErrors from '../../../components/common/FormErrors'
import FieldGroup from '../../../components/admin/ui/FieldGroup'
import { editDiscountSchema } from '../../../utils/validation/admin/discount'
import { useDiscount } from '../../../features/admin/discounts/useDiscount'
import { useUpdateDiscount } from '../../../features/admin/discounts/useUpdateDiscount'

const EditDiscount = () => {
  const { id } = useParams()

  const {
    data: discount,
    isLoading: isDiscountLoading,
    isError: isDiscountError,
  } = useDiscount(id)

  const {
    mutate: updateDiscount,
    isLoading: isUpdatingDiscount,
    isError,
    error,
  } = useUpdateDiscount()

  const initialValues = {
    end: discount?.end,
    percentage: discount?.percentage,
  }
  const handleSubmit = (values: FormikValues & typeof initialValues) => {
    updateDiscount({
      discountData: values,
      discountId: discount.id,
    })
  }

  if (isDiscountLoading) return <Loader />
  if (isDiscountError) return <Error />

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-center text-dark-500">
        Edit Discount For # {discount.product.id}
      </h2>

      <section className="max-w-2xl p-6 mx-auto bg-white rounded-lg text-dark-600">
        {isError && <FormErrors error={error} />}
        <Formik
          initialValues={initialValues}
          validationSchema={editDiscountSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="grid grid-cols-2 gap-8">
              <FieldGroup
                input={{
                  type: 'datetime-local',
                }}
                label="End"
                name="end"
                placeholder="Discount end date here..."
              />

              <FieldGroup
                input={{
                  type: 'number',
                }}
                label="Percentage"
                name="percentage"
                placeholder="Discount percentage here..."
              />
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
                disabled={isUpdatingDiscount}
              >
                {isUpdatingDiscount && (
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
        </Formik>
      </section>
    </div>
  )
}

export default EditDiscount
