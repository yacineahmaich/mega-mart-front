import CustomersTable from '../../../components/admin/customers/CustomersTable'
import { useCustomers } from '../../../features/admin/customers/useCustomers'
import Loader from '../Loader'
import Error from '../Error'

const Customers = () => {
  const { isLoading, isError } = useCustomers()

  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Customers</h2>
      </div>

      {isLoading ? <Loader /> : <CustomersTable />}
    </div>
  )
}

export default Customers
