import { useCustomers } from '../../../features/admin/customers/useCustomers'
import CustomerRow from './CustomerRow'
import Pagination from '../ui/Pagination'
import Empty from '../ui/Empty'

const CustomersTable = () => {
  const { data } = useCustomers()

  return (
    <section className="pb-40 overflow-x-auto">
      <div className="border rounded-b-lg border-gray">
        <table className="w-full text-sm text-left border text-dark-600 border-light">
          <thead className="text-xs text-white uppercase bg-danger-600">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Customer
              </th>
              <th scope="col" className="px-6 py-4">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {data.customers.length === 0 && <Empty resource="customers" />}
            {data.customers.map(customer => (
              <CustomerRow key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
        <Pagination data={data} theme="danger-500" />
      </div>
    </section>
  )
}

export default CustomersTable
