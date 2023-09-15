import OffersTable from '../../../components/admin/offers/OffersTable'
import { useOffers } from '../../../features/admin/offers/useOffers'
import Loader from '../Loader'
import Error from '../Error'

function Offers() {
  const { isLoading, isError } = useOffers()

  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Offers</h2>
      </div>

      {isLoading ? <Loader /> : <OffersTable />}
    </div>
  )
}

export default Offers
