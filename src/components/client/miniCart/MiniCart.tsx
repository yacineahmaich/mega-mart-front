import { FC } from 'react'
import spinner from '../../../assets/icons/spinner.png'
import Sheet from '../../ui/Sheet'
import MiniCartFooter from './MiniCartFooter'
import MinicartItems from './MinicartItems'
import { useCart } from '../../../context/Cart'
import { useProductsByIds } from '../../../features/client/products/useProducts'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Cart: FC<Props> = ({ isOpen, onClose }) => {
  const { items } = useCart()
  const { data, isLoading, isFetching } = useProductsByIds({
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
        <div className="flex flex-col h-full">
          {data?.products?.length === 0 ? (
            <div className="p-2 bg-warning-400">
              <p className="text-sm font-semibold text-danger-500">
                You cart is empty right now!
              </p>
            </div>
          ) : (
            <>
              <div className="relative flex-1 px-5 py-3 overflow-x-hidden overflow-y-auto">
                {isFetching && (
                  <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-white/60">
                    <img
                      src={spinner}
                      alt="spinner"
                      className="w-12 h-12 animate-spin"
                    />
                  </div>
                )}
                <MinicartItems products={data?.products} onClose={onClose} />
              </div>
              <MiniCartFooter products={data?.products} onClose={onClose} />
            </>
          )}
        </div>
      )}
    </Sheet>
  )
}

export default Cart
