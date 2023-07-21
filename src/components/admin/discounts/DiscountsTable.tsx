import DiscountRow from './DiscountRow'
import Pagination from '../ui/Pagination'
import { useDiscounts } from '../../../features/admin/discounts/useDiscounts'

const DiscountsTable = () => {
  const { data } = useDiscounts()

  return (
    <section className="pb-40 overflow-x-auto">
      <div className="border rounded-b-lg border-gray">
        <table className="w-full text-sm text-left border text-dark-600 border-light">
          <thead className="text-xs text-white uppercase bg-orange-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Start date
              </th>
              <th scope="col" className="px-6 py-4">
                End date
              </th>
              <th scope="col" className="px-6 py-4">
                Product
              </th>
              <th scope="col" className="px-6 py-4">
                Discount Percentage
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {data.discounts.map(discount => (
              <DiscountRow key={discount.id} discount={discount} />
            ))}
          </tbody>
        </table>
        <Pagination data={data} />
      </div>
    </section>
  )
}

export default DiscountsTable
