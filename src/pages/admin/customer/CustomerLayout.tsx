import { Outlet } from 'react-router'
import Statistcis from '../../../components/admin/customers/CustomersStatistics'

const CustomerLayout = () => {
  return (
    <div>
      <main>
        <Statistcis />
        <Outlet />
      </main>
    </div>
  )
}

export default CustomerLayout
