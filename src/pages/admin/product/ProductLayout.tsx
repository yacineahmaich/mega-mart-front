import { Outlet } from 'react-router-dom'
import Statistics from '../../../components/admin/products/ProductsStatistics'

const ProductLayout = () => {
  return (
    <div>
      <main>
        <Statistics />
        <Outlet />
      </main>
    </div>
  )
}

export default ProductLayout
