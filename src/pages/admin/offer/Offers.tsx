import { useSearchParams } from 'react-router-dom'
import OffersTable from '../../../components/admin/offers/OffersTable'
import { useOffers } from '../../../features/admin/offers/useOffers'
import Loader from '../Loader'
import Error from '../Error'

function Offers() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { isLoading, isError } = useOffers(page)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Offers</h2>
      </div>

      <OffersTable />
    </div>
  )
}

export default Offers
