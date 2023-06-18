import { useSearchParams } from 'react-router-dom'
import Loader from '../Loader'
import Error from '../Error'
import { useDiscounts } from '../../../features/admin/discounts/useDiscounts'
import DiscountsTable from '../../../components/admin/discounts/DiscountsTable'

function Discounts() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { isLoading, isError } = useDiscounts(page)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Discounts</h2>
      </div>

      <DiscountsTable />
    </div>
  )
}

export default Discounts