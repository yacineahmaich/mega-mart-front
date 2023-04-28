import { Outlet } from 'react-router-dom'
import Statistics from '../../../components/admin/products/Statistics'

const ProductsLayout = () => {
  return (
    <div>
      <main>
        <Statistics />
        <Outlet />
      </main>
    </div>
  )
}

export default ProductsLayout
