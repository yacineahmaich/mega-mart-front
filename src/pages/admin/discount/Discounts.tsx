import Loader from '../Loader'
import Error from '../Error'
import { useDiscounts } from '../../../features/admin/discounts/useDiscounts'
import DiscountsTable from '../../../components/admin/discounts/DiscountsTable'

function Discounts() {
  const { isLoading, isError } = useDiscounts()

  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Discounts</h2>
      </div>

      {isLoading ? <Loader /> : <DiscountsTable />}
    </div>
  )
}

export default Discounts
