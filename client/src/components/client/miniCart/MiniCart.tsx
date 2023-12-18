import { FC } from 'react'
import spinner from '../../../assets/icons/loader.gif'
import Sheet from '../ui/Sheet'
import MiniCartFooter from './MiniCartFooter'
import MinicartItems from './MinicartItems'
import { useProductsByIds } from '../../../services/product/useProductsByIds'
import Message from '../ui/Message'
import Spinner from '../ui/Spinner'
import useCartStore from '../../../store/cart'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Cart: FC<Props> = ({ isOpen, onClose }) => {
  const { items } = useCartStore()

  const {
    data: products,
    isLoading,
    isFetching,
  } = useProductsByIds({
    productIds: items.map(i => i.id),
  })

  const totalProducts = products?.length ?? 0

  return (
    <Sheet title="Cart" isOpen={isOpen} onClose={onClose}>
      {isLoading ? (
        <Spinner className="mt-8" />
      ) : (
        <>
          {totalProducts === 0 ? (
            <Message message="You cart is empty right now!" />
          ) : (
            <>
              <div className="relative px-5 py-3 overflow-x-hidden overflow-y-auto">
                {isFetching && (
                  <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-white/60">
                    <img src={spinner} alt="spinner" className="mx-auto mt-4" />
                  </div>
                )}
                <MinicartItems products={products || []} onClose={onClose} />
              </div>
            </>
          )}
          <MiniCartFooter products={products || []} onClose={onClose} />
        </>
      )}
    </Sheet>
  )
}

export default Cart
