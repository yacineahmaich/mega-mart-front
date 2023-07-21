import { Outlet } from 'react-router-dom'
import Statistics from '../../../components/admin/products/ProductsStatistics'

const ProductLayout = () => {
  return (
    <div>
      <Statistics />
      <Outlet />
    </div>
  )
}

export default ProductLayout
