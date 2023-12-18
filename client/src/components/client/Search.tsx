import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import spinner from '../../assets/icons/loader.gif'
import clsx from 'clsx'
import { useSearchProducts } from '../../services/product/useSearchProduct'

function Search() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const { pathname } = useLocation()

  // Debounce query
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [query])

  // reset search when navigating between pages
  useEffect(() => {
    setQuery('')
    setDebouncedQuery('')
  }, [pathname])

  const { data: products, isLoading } = useSearchProducts(debouncedQuery)

  const navigate = useNavigate()
  const goToProduct = (slug: string) => {
    setQuery('')
    navigate(`/products/${slug}`)
  }

  return (
    <div className="relative order-3 w-full mt-4 lg:mt-0 lg:w-1/2 lg:order-2">
      {query && (
        <div
          className="fixed inset-0 bg-black/20 z-[99]"
          onClick={() => setQuery('')}
        ></div>
      )}

      <form className="relative z-[101]">
        <input
          type="text"
          placeholder="Search your Jersy within thousands ..."
          className={clsx(
            'w-full px-6 py-2 transition-all rounded-lg outline-none peer focus:ring-0 placeholder:font-medium placeholder:text-dark-600 placeholder:text-sm',
            {
              'border-b border-gray': query,
            }
          )}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="absolute z-50 flex items-center gap-2 -translate-y-1/2 right-3 top-1/2 text-dark-500">
          {isLoading && (
            <img src={spinner} alt="spinner" className="w-6 grayscale" />
          )}
          {query ? (
            <button onClick={() => setQuery('')}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          ) : (
            <MagnifyingGlassIcon className="w-6 h-6" />
          )}
        </div>
      </form>

      {query && (
        <div className="absolute inset-x-0 z-[100] pt-2 -mt-2 duration-300 bg-white rounded-b shadow-lg animate-in slide-in-from-top-1">
          <ul className="divide-y divide-gray min-h-[4px]">
            {products?.map(product => (
              <li className="flex gap-4 px-6 py-2">
                <a
                  onClick={() => goToProduct(product.slug)}
                  className="w-20 h-20 cursor-pointer bg-gray"
                >
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].name}
                    className="w-20 h-20 bg-cover"
                  />
                </a>
                <div className="flex w-full gap-6 py-2">
                  <div className="flex flex-col justify-between">
                    <a
                      onClick={() => goToProduct(product.slug)}
                      className="cursor-pointer"
                    >
                      <span className="text-sm font-medium line-clamp-1 text-dark-500 hover:underline hover:text-primary-400">
                        {product.name}
                      </span>
                    </a>
                    {product.discount ? (
                      <div className="relative space-x-2 w-fit">
                        <span className="text-xs font-medium text-dark-500">
                          $<s>{product.price}</s>
                        </span>
                        <span className="text-sm font-bold text-primary-900">
                          ${product.discount.price}
                        </span>
                        <span className="left-full bottom-0 ml-1 absolute px-3 py-0.5 text-xs rounded bg-pink-600 self-end font-medium text-light pointer-events-none">
                          -{product.discount.percentage}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm font-bold text-primary-900">
                        $
                        {product.discount
                          ? product.discount.price
                          : product.price}
                      </span>
                    )}
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <StarIcon className="w-4 h-4 text-yellow-300" />
                      <span className="text-gray">{product.avgRating}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Search
