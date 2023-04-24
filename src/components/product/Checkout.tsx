import { useEffect, useRef } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'

const Checkout = () => {
  const product = {
    price: 345.86,
    hasDiscount: true,
    discountValue: 16,
    originalPrice: 435,
  }
  const [price, priceDecimal] = product.price.toString().split('.')

  const checkoutRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const headerEl = document.getElementById('header')
    if (!headerEl) return

    const options = {
      root: null,
      threshold: 0,
    }

    const headerObserver = new IntersectionObserver(entries => {
      if (!checkoutRef.current) return

      if (entries[0].isIntersecting) {
        checkoutRef.current.classList.remove('top-0')
      } else {
        checkoutRef.current.classList.add('top-0')
      }
    }, options)

    headerObserver.observe(headerEl)

    return () => headerObserver.disconnect()
  }, [])

  return (
    <div ref={checkoutRef} className="fixed w-64 right-6">
      <article className="w-full p-4 bg-white border divide-y rounded-lg divide-gray border-gray">
        <header className="pb-6 space-y-3">
          <div className="flex items-center justify-center gap-1 text-primary-600">
            <p className="text-4xl font-bold ">{price}</p>

            <p className="text-sm font-bold leading-4">
              <span className="block">{priceDecimal}</span>
              <span className="block">USD</span>
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <p className="text-sm text-dark-500">
              <s>{product.originalPrice} USD</s>
            </p>
            <span className="px-4 py-0.5 text-xs rounded-lg bg-pink-400 font-medium text-light pointer-events-none">
              -{product.discountValue}%
            </span>
          </div>
        </header>

        <div className="flex justify-center py-6">
          <button className="px-4 border rounded-l-md border-light text-primary-400">
            <PlusSmallIcon className="w-4 h-4" />
          </button>
          <input
            defaultValue={1}
            type="number"
            className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 focus:border-light font-medium text-dark-600 text-center  border-light"
          />
          <button className="px-4 border rounded-r-md border-light text-danger-400">
            <MinusSmallIcon className="w-4 h-4 " />
          </button>
        </div>

        <div className="flex flex-col justify-center gap-2 pt-6">
          <button className="px-8 py-2 text-sm font-medium text-white border rounded-full bg-primary-700 border-primary-700 active:ring active:ring-primary-600 ring-offset-1">
            Add To Cart
          </button>
          <button className="px-8 py-2 text-sm font-medium transition-colors border rounded-full hover:text-white border-primary-700 hover:bg-primary-700 text-primary-700 active:ring active:ring-primary-600 ring-offset-1">
            Buy Now
          </button>
        </div>
      </article>
    </div>
  )
}

export default Checkout
