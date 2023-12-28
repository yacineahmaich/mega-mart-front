import { HeartIcon } from '@heroicons/react/24/outline'
import spinner from '../assets/icons/loader.gif'
import Navigation from '../components/Navigation'
import Message from '../components/ui/Message'
import ProductCard from '../components/ui/ProductCard'
import ProductCardSkeleton from '../components/ui/ProductCardSekeleton'
import { useProductsByIds } from '../services/product/useProductsByIds'
import useFavoriteStore from '../store/favorite'

function Favorite() {
  const { items } = useFavoriteStore()

  const {
    data: products,
    isLoading,
    isFetching,
  } = useProductsByIds({
    productIds: items.map(i => i.id),
  })

  return (
    <>
      <Navigation
        breadcrumb={[
          {
            label: 'Favorite',
            icon: HeartIcon,
          },
        ]}
      />
      <section className="min-h-screen p-3 mb-20 md:p-6">
        <h2 className="mb-4 text-3xl font-bold text-dark-700">My Favorite</h2>

        <div className="relative grid grid-cols-2 gap-2 mt-10 md:gap-8 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {isLoading ? (
            Array.from({ length: 6 }, (_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))
          ) : products.length === 0 ? (
            <Message
              message="You Fovorite is empty right now!"
              className="col-span-2"
            />
          ) : (
            products?.map(product => (
              <ProductCard favorite key={product.id} product={product} />
            ))
          )}

          {isFetching && items.length > 0 && !isLoading && (
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-white/60">
              <img src={spinner} alt="spinner" className="mx-auto mt-4" />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Favorite
