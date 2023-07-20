import CustomersChart from '../../components/admin/dashboard/CustomersChart'
import Heading from '../../components/admin/dashboard/Heading'
import LatestOrders from '../../components/admin/dashboard/LatestOrders'
import WeekSalesChart from '../../components/admin/dashboard/WeekSalesChart'
import SalesContributionChart from '../../components/admin/dashboard/SalesContributionChart'
import Stats from '../../components/admin/dashboard/Stats'

const Dashboard = () => {
  return (
    <>
      <Heading />
      <Stats />
      <div className="grid grid-cols-5 gap-6 my-10">
        <div className="col-span-3">
          <WeekSalesChart />
        </div>
        <div className="col-span-2">
          <SalesContributionChart />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2">
          <CustomersChart />
        </div>
        <div className="col-span-3">
          <LatestOrders />
        </div>
      </div>
    </>
  )
}

export default Dashboard
