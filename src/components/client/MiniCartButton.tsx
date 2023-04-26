import { useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import MiniCart from './MiniCart'

const MiniCartButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <button
      className="relative flex flex-col items-center space-y-1 text-sm font-medium cursor-pointer text-primary-600 hover:text-primary-500"
      onClick={onOpen}
    >
      <ShoppingBagIcon className="w-6 h-6 sm:h-6 sm:w-6" />
      <span className="hidden sm:block">Cart</span>
      <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full text-dark-600 bg-warning-500 translate-x-1/3 -translate-y-1/3">
        2
      </span>
      <MiniCart isOpen={isOpen} onClose={onClose} />
    </button>
  )
}

export default MiniCartButton
