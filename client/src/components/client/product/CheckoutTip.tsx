import { FC, useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import useCartStore from '../../../store/cart'

const CheckoutTip: FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate()
  const { items, updateQty, addItem } = useCartStore()
  const productInCart = items.find(i => i.id === product?.id)
  const [quantity, setQuantity] = useState<number>(productInCart?.quantity ?? 1)

  const increaseQty = () => {
    if (quantity === product.quantity) return
    setQuantity(q => {
      return q + 1
    })
  }
  const decreaseQty = () => {
    if (quantity === 1) return
    setQuantity(q => {
      return q - 1
    })
  }

  const handleUpdateCart = () => {
    updateQty({ id: product.id, quantity })
    navigate('/cart')
  }

  const handleAddToCart = () => {
    addItem({ id: product.id, quantity })
    navigate('/cart')
  }
  return (
    <div className="fixed bottom-0 left-0 z-20 flex items-center w-full gap-2 px-3 bg-white md:hidden">
      <div className="flex justify-center py-3 lg:py-6">
        <button
          className="px-4 border rounded-l-md border-gray text-primary-400"
          onClick={increaseQty}
        >
          <PlusSmallIcon className="w-4 h-4" />
        </button>
        <input
          value={quantity}
          type="number"
          className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 focus:border-light font-medium text-dark-600 text-center  border-gray"
          onChange={() => null}
        />
        <button
          className="px-4 border rounded-r-md border-gray text-danger-400"
          onClick={decreaseQty}
        >
          <MinusSmallIcon className="w-4 h-4 " />
        </button>
      </div>

      {productInCart ? (
        <button
          className="flex-1 py-2.5 text-sm font-medium text-white border rounded-full bg-primary-700 hover:bg-primary-600 active:ring active:ring-primary-600"
          onClick={handleUpdateCart}
        >
          Update Cart
        </button>
      ) : (
        <button
          className="flex-1 py-2.5 text-sm font-medium text-white border rounded-full bg-primary-700 hover:bg-primary-600 active:ring active:ring-primary-600"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      )}
    </div>
  )
}

export default CheckoutTip
