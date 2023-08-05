import { FC } from 'react'
import { Formik, Form } from 'formik'
import FieldGroup from '../ui/FieldGroup'
import { createReviewSchema } from '../../../utils/validation/client/review'
import Button from '../ui/Button'
import StarRating from 'react-star-ratings'
import ErrorMsg from '../../../pages/admin/ErrorMsg'
import { useCreateReview } from '../../../features/client/products/useCreateReview'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../features/client/products/product'
import { useGetUser } from '../../../features/auth/useGetUser'
import useRequireAuthModalStore from '../../../store/requireAuth'

type Props = {
  children?: React.ReactNode
}
const CreateReview: FC<Props> = () => {
  const { data: user } = useGetUser()

  const { open: openRequireAuthModal } = useRequireAuthModalStore()

  const { slug } = useParams()
  const { data: product } = useProduct(slug)

  const { mutateAsync: createReview, isLoading } = useCreateReview()

  const initialValues = {
    rating: 1,
    comment: '',
  }

  const onSubmit = async (values: typeof initialValues, { resetForm }) => {
    await createReview({
      review: values,
      productId: product.id,
    })

    resetForm()
  }

  return (
    <div className="relative mb-5">
      {!user && (
        <div
          className="absolute inset-0 z-10"
          onClick={() => openRequireAuthModal()}
        ></div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={createReviewSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div className="relative flex justify-center">
              <ErrorMsg name="rating" position="bottom" className="text-x s" />
              <StarRating
                rating={formik.values.rating}
                starDimension="30"
                starSpacing="2"
                starEmptyColor="#e5e5e5"
                starRatedColor="#17a0ad"
                starHoverColor="#17a0ad"
                changeRating={rating => formik.setFieldValue('rating', rating)}
              />
            </div>

            <FieldGroup
              label="Comment"
              name="comment"
              input={{ as: 'textarea', rows: 3 }}
              placeholder="Your comment..."
            />
            <Button
              variant="medium"
              className="block px-20 ml-auto -mt-4"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateReview
