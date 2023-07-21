import OfferRow from './OfferRow'
import Pagination from '../ui/Pagination'
import { useOffers } from '../../../features/admin/offers/useOffers'
import Empty from '../ui/Empty'

const OffersTable = () => {
  const { data } = useOffers()

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
                Offer start
              </th>
              <th scope="col" className="px-6 py-4">
                Offer end
              </th>
              <th scope="col" className="px-6 py-4">
                Product
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {data.offers.length === 0 && <Empty resource="offers" />}

            {data.offers.map(offer => (
              <OfferRow key={offer.id} offer={offer} />
            ))}
          </tbody>
        </table>
        <Pagination data={data} />
      </div>
    </section>
  )
}

export default OffersTable
