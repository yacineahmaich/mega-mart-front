import { FC, useEffect, useState } from 'react'
import DisclosureItem from '../../../UI/DisclosureItem'
import { useSearchParams } from 'react-router-dom'

const PriceFilter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [minPrice, setMinPrice] = useState<string | null>(
    searchParams.get('min_price') ?? ''
  )
  const [maxPrice, setMaxPrice] = useState<string | null>(
    searchParams.get('max_price') ?? ''
  )

  useEffect(() => {
    setSearchParams(sp => {
      if (minPrice.trim() === '') sp.delete('min_price')
      else sp.set('min_price', minPrice)

      if (maxPrice.trim() === '') sp.delete('max_price')
      else sp.set('max_price', maxPrice)

      return sp
    })
  }, [minPrice, maxPrice, setSearchParams])

  return (
    <DisclosureItem title="Price">
      <div className="flex items-center gap-2">
        <div className="relative">
          <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
            USD
          </span>
          <input
            type="text"
            placeholder="Min"
            className="w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input"
            onChange={e => setMinPrice(e.target.value)}
            value={minPrice}
          />
        </div>
        <div>-</div>
        <div className="relative">
          <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
            USD
          </span>
          <input
            type="text"
            placeholder="Max"
            className="w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input"
            onChange={e => setMaxPrice(e.target.value)}
            value={maxPrice}
          />
        </div>
      </div>
    </DisclosureItem>
  )
}

export default PriceFilter
