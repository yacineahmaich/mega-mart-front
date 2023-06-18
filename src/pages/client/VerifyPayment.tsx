import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useGetUser } from '../../features/auth/useGetUser'
import { useVerifyCheckoutStatus } from '../../features/client/checkout/useVerifyCheckoutStatus'
import loader from '../../assets/icons/loader.svg'
import { useCart } from '../../context/Cart'
import Button from '../../components/client/ui/Button'
import Error from '../../components/client/ui/Error'

function VerifyPayment() {
  const navigate = useNavigate()
  const { session } = useParams()
  const { data: user } = useGetUser()
  const { clear } = useCart()

  const {
    data: order,
    isLoading,
    isError,
    refetch: retry,
  } = useVerifyCheckoutStatus(session, {
    onSuccess: clear,
  })

  if (!user) return <Navigate to=".." replace />

  if (isError)
    return (
      <div className="mt-5">
        <Error
          retry={retry}
          message="Cannot find payment! Please try again later"
        />
      </div>
    )

  if (isLoading)
    return (
      <div className="p-3 mx-auto mt-4 rounded w-fit bg-primary-500">
        <img src={loader} alt="loader" className="w-6 h-6 animate-spin" />
      </div>
    )

  return (
    <section className="max-w-md p-6 mx-auto">
      <span className="flex justify-center mb-4">
        <svg
          viewBox="0 0 133 133"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-14 h-14"
        >
          <g
            id="check-group"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <circle
              id="filled-circle"
              className="fill-primary-500"
              cx="66.5"
              cy="66.5"
              r="54.5"
            />
            <circle
              id="white-circle"
              fill="#FFFFFF"
              cx="66.5"
              cy="66.5"
              r="55.5"
            />
            <circle
              id="outline"
              className="stroke-primary-500"
              strokeWidth="4"
              cx="66.5"
              cy="66.5"
              r="54.5"
            />
            <polyline
              id="check"
              stroke="#FFFFFF"
              strokeWidth="5.5"
              points="41 70 56 85 92 49"
            />
          </g>
        </svg>
      </span>
      <p className="font-medium text-center text-dark-600">
        Congratulation You Order
        <Link
          to={`/account/profile/my-orders/${order.id}`}
          className="mx-1 underline text-primary-600"
        >
          #{order.id}
        </Link>
        Paid succeflly.
      </p>

      <div className="flex gap-2">
        <Button
          variant="small"
          className="mt-4"
          onClick={() =>
            navigate('/account/profile/my-orders', { replace: true })
          }
        >
          My Orders
        </Button>
        <Button
          variant="small"
          className="mt-4"
          onClick={() => navigate('/', { replace: true })}
        >
          Continue Shopping
        </Button>
      </div>
    </section>
  )
}

export default VerifyPayment
