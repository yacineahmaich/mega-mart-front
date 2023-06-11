import { useSearchParams } from 'react-router-dom'
import { useCustomers } from '../../../features/admin/customers/queries/useCustomers'
import CustomerRow from './CustomerRow'
import Pagination from '../ui/Pagination'

const CustomersTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { data } = useCustomers(page, { enabled: false })

  return (
    <section className="overflow-hidden border rounded-lg border-gray">
      <div className="relative overflow-hidden overflow-x-auto rounded-t-lg">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
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
            {data.customers.map(customer => (
              <CustomerRow key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination data={data} theme="danger-500" />
    </section>
  )
}

export default CustomersTable
