import { FC, useState } from 'react'
import { BookOpenIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { HandThumbUpIcon, TruckIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom'
import AuthModal from '../ui/AuthModal'
import { useGetUser } from '../../../features/auth/useGetUser'

type Props = {
  totalProducts: number
  totalAmount: number
}

const Checkout: FC<Props> = ({ totalProducts, totalAmount }) => {
  const navigate = useNavigate()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { data: user } = useGetUser()

  const handleCheckout = () => {
    if (user) {
      navigate('checkout')
    } else {
      setIsAuthModalOpen(true)
    }
  }

  return (
    <div className="flex flex-col w-full gap-6 ml-auto md:w-1/3 right-6">
      <article className="p-3 bg-white border divide-y rounded-lg divide-gray border-gray">
        <div className="flex items-center justify-between py-3 text-dark-700">
          <span className="font-medium text-dark-600">Total products</span>
          <span className="text-lg font-bold text-dark-500">
            x{totalProducts}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 text-lg font-bold text-primary-500">
          <span>TOTAL</span>
          <span>${totalAmount}</span>
        </div>
      </article>
      <button
        className="py-3 font-semibold text-center text-white rounded-full hover:bg-primary-700 bg-primary-600"
        onClick={handleCheckout}
      >
        Checkout
      </button>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <article className="px-8 py-4 rounded-lg bg-primary-800">
        <ul className="space-y-4 font-medium">
          <li className="flex items-center gap-4 text-white">
            <HandThumbUpIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Client Satisfaction</p>
          </li>
          <li className="flex items-center gap-4 text-white">
            <BookOpenIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Exclusive offers</p>
          </li>
          <li className="flex items-center gap-4 text-white">
            <TruckIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Fast delivery</p>
          </li>
          <li className="flex items-center gap-4 text-white">
            <ShieldCheckIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Products 100% Secure</p>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default Checkout
