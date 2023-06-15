import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../../context/Cart'

type Props = {
  products: Product[]
  onClose: () => void
}

const MiniCartFooter: FC<Props> = ({ products, onClose }) => {
  const navigate = useNavigate()
  const { calcProductsTotalPrice } = useCart()
  const totalAmount = calcProductsTotalPrice(products)

  const goToCart = () => {
    navigate('/cart')
    onClose()
  }

  return (
    <div className="p-6 space-y-4 bg-opacity-50 border-t border-gray bg-gray">
      <div className="flex items-center justify-between pb-3 text-sm font-medium text-dark-500">
        <span>
          Products: <span>{products.length}</span>
        </span>
        <span>
          Total: $<span>{totalAmount}</span>
        </span>
      </div>
      <div className="flex">
        <button
          className="w-full py-2 font-medium text-center text-white transition-colors duration-200 text-md bg-primary-600 hover:bg-primary-800"
          onClick={goToCart}
        >
          Go To Cart
        </button>
      </div>
    </div>
  )
}

export default MiniCartFooter
