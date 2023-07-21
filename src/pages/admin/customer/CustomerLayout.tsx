import { Outlet } from 'react-router'
import Statistcis from '../../../components/admin/customers/CustomersStatistics'

const CustomerLayout = () => {
  return (
    <div>
      <Statistcis />
      <Outlet />
    </div>
  )
}

export default CustomerLayout
