import { useSearchParams } from 'react-router-dom'
import CustomersTable from '../../../components/admin/customers/CustomersTable'
import { useCustomers } from '../../../features/admin/customers/queries/useCustomers'
import Loader from '../Loader'
import Error from '../Error'

const Customers = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { isLoading, isError } = useCustomers(page)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Customers</h2>
      </div>

      <CustomersTable />
    </div>
  )
}

export default Customers
