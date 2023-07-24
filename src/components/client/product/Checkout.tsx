import { useEffect, useRef, useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'
import { useProduct } from '../../../features/client/products/product'
import { useNavigate, useParams } from 'react-router-dom'
import useCartState from '../../../store/cart'
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useFavoriteState from '../../../store/favorite'

const Checkout = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const { data: product } = useProduct(slug)

  const { getItem, saveItem, unsaveItem } = useFavoriteState()

  const { items, updateQty, addItem } = useCartState()
  const productInCart = items[product.id]
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
    updateQty(product.id, quantity)
    navigate('/cart')
  }

  const handleAddToCart = () => {
    addItem({ id: product.id, quantity })
    navigate('/cart')
  }

  const checkoutRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const navigationEl = document.getElementById('navigation')
    if (!navigationEl) return
    const options = {
      root: null,
      threshold: 0,
    }
    const headerObserver = new IntersectionObserver(entries => {
      if (!checkoutRef.current) return
      if (entries[0].isIntersecting) {
        checkoutRef.current.classList.remove('top-6')
      } else {
        checkoutRef.current.classList.add('top-6')
      }
    }, options)
    headerObserver.observe(navigationEl)
    return () => headerObserver.disconnect()
  }, [])

  const price = product.discount ? product.discount.price : product.price

  return (
    <div ref={checkoutRef} className="fixed z-10 w-52 lg:w-64 right-6">
      <article className="hidden w-full p-4 bg-white border divide-y rounded-lg md:block divide-gray border-gray">
        <header className="pb-3 space-y-3 lg:pb-6">
          <div className="flex items-center justify-center gap-1 text-primary-600">
            <p className="text-3xl font-bold lg:text-4xl ">${price}</p>
          </div>
          {product?.discount && (
            <div className="flex justify-center gap-2">
              <p className="text-sm text-dark-500">
                <s>${product.price}</s>
              </p>
              <span className="px-4 py-0.5 text-xs rounded-lg bg-pink-400 font-medium text-light pointer-events-none">
                -{product.discount.percentage}%
              </span>
            </div>
          )}
        </header>

        <div className="flex justify-center py-3 lg:py-6">
          <button
            className="px-4 border rounded-l-md border-light text-primary-400"
            onClick={increaseQty}
          >
            <PlusSmallIcon className="w-4 h-4" />
          </button>
          <input
            value={quantity}
            type="number"
            className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 focus:border-light font-medium text-dark-600 text-center  border-light"
            onChange={() => null}
          />

          <button
            className="px-4 border rounded-r-md border-light text-danger-400"
            onClick={decreaseQty}
          >
            <MinusSmallIcon className="w-4 h-4 " />
          </button>
        </div>

        <div className="flex flex-col justify-center gap-2 pt-3 lg:pt-6">
          {productInCart ? (
            <button
              className="px-8 py-2 text-sm font-medium text-white border rounded-full bg-primary-700 border-primary-700 active:ring active:ring-primary-600 ring-offset-1"
              onClick={handleUpdateCart}
            >
              Update Cart
            </button>
          ) : (
            <button
              className="px-8 py-2 text-sm font-medium text-white border rounded-full bg-primary-700 border-primary-700 active:ring active:ring-primary-600 ring-offset-1"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}
          <button
            className="flex items-center justify-center gap-2 px-8 py-2 text-sm font-medium transition-colors border rounded-full border-primary-700 text-primary-700 active:ring active:ring-primary-600 ring-offset-1"
            onClick={() =>
              getItem(product.id)
                ? unsaveItem(product.id)
                : saveItem(product.id)
            }
          >
            {getItem(product.id) ? (
              <>
                <XMarkIcon className="w-5 h-5" />
                <span>Unsave</span>
              </>
            ) : (
              <>
                <HeartIcon className="w-5 h-5" />
                <span>Save for later</span>
              </>
            )}
          </button>
        </div>
      </article>
    </div>
  )
}

export default Checkout
