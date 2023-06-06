import { FC } from 'react'
import DisclosureItem from '../../../ui/DisclosureItem'
import { useSearchParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { filterByPriceSchema } from '../../../../utils/validation/client/filter'
import clsx from 'clsx'

const PriceFilter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const selectedMinPrice = searchParams.get('min_price') ?? ''
  const selectedMaxPrice = searchParams.get('max_price') ?? ''

  const initialValues = {
    minPrice: selectedMinPrice,
    maxPrice: selectedMaxPrice,
  }

  const handleApplyFilters = (values: typeof initialValues) => {
    const { minPrice, maxPrice } = values

    setSearchParams(sp => {
      if (minPrice === '') sp.delete('min_price')
      else sp.set('min_price', minPrice)

      if (maxPrice === '') sp.delete('max_price')
      else sp.set('max_price', maxPrice)

      sp.delete('page')
      return sp
    })
  }

  return (
    <DisclosureItem title="Price">
      <Formik
        initialValues={initialValues}
        onSubmit={handleApplyFilters}
        validationSchema={filterByPriceSchema}
      >
        {formik => (
          <Form>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
                    USD
                  </span>
                  <Field
                    type="number"
                    name="minPrice"
                    placeholder="Min"
                    autoComplete="off"
                    className={clsx(
                      'w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input'
                    )}
                  />
                </div>
                <div>-</div>
                <div className="relative">
                  <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
                    USD
                  </span>
                  <Field
                    type="number"
                    name="maxPrice"
                    placeholder="Max"
                    autoComplete="off"
                    className={clsx(
                      'w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input'
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                {(selectedMinPrice || selectedMaxPrice) && (
                  <button
                    type="button"
                    className="px-4 py-0.5 text-sm font-semibold border rounded bg-slate-100 text-dark-500"
                    onClick={() => {
                      // reset values
                      formik.setFieldValue('minPrice', '')
                      formik.setFieldValue('maxPrice', '')

                      setSearchParams(sp => {
                        sp.delete('min_price')
                        sp.delete('max_price')

                        // reset Pagination
                        sp.delete('page')
                        return sp
                      })
                    }}
                  >
                    clear
                  </button>
                )}
                <button
                  type="submit"
                  className={clsx(
                    'px-4 py-0.5 text-sm font-semibold border rounded bg-primary-600 text-white'
                  )}
                  disabled={!!formik.errors.maxPrice}
                >
                  apply
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </DisclosureItem>
  )
}

export default PriceFilter
