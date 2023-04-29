import CustomersTable from '../../../components/admin/customers/CustomersTable'
const Customers = () => {
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
