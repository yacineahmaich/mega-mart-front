import { FC } from 'react'
import spinner from '../../../assets/icons/spinner.png'
import Sheet from '../ui/Sheet'
import MiniCartFooter from './MiniCartFooter'
import MinicartItems from './MinicartItems'
import { useCart } from '../../../context/Cart'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'
import Message from '../ui/Message'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Cart: FC<Props> = ({ isOpen, onClose }) => {
  const { items } = useCart()
  const {
    data: products,
    isLoading,
    isFetching,
  } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  return (
    <Sheet title="Cart" isOpen={isOpen} onClose={onClose}>
      {isLoading ? (
        <div>
          <img
            src={spinner}
            alt="spinner"
            className="w-4 h-4 mx-auto animate-spin"
          />
        </div>
      ) : (
        <>
          {products?.length === 0 ? (
            <Message message="You cart is empty right now!" />
          ) : (
            <>
              <div className="relative px-5 py-3 overflow-x-hidden overflow-y-auto">
                {isFetching && (
                  <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-white/60">
                    <img
                      src={spinner}
                      alt="spinner"
                      className="w-12 h-12 animate-spin"
                    />
                  </div>
                )}
                <MinicartItems products={products} onClose={onClose} />
              </div>
            </>
          )}
          <MiniCartFooter products={products} onClose={onClose} />
        </>
      )}
    </Sheet>
  )
}

export default Cart
