import { FC, useMemo } from 'react'
import spinner from '../../../assets/icons/loader.gif'
import { useCart } from '../../../context/Cart'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'
import Item from './Item'
import Error from '../ui/Error'
type Props = {
  children?: React.ReactNode
}
const Products: FC<Props> = () => {
  const { items } = useCart()

  const {
    data: products,
    isFetching,
    isError,
    refetch,
  } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  const sortedProducts = useMemo(() => products?.slice().reverse(), [products])

  if (isError)
    return <Error message="Failed to load products!" retry={refetch} />

  return (
    <div
      className="relative flex flex-col flex-1 order-2 gap-3 p-6 rounded md:order-2 bg-light h-fit"
      id="cart-products"
    >
      <div className="flex justify-between">
        <p>&nbsp;</p>
        <p>{products.length} products</p>
      </div>
      {isFetching && (
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-white/60">
          <img src={spinner} alt="spinner" className="mx-auto mt-4" />
        </div>
      )}
      {sortedProducts?.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
