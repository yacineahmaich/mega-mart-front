import { Outlet } from 'react-router'
import Statistcis from '../../../components/admin/categories/CategoriesStatistcis'

const CategoryLayout = () => {
  return (
    <div>
      <Statistcis />
      <Outlet />
    </div>
  )
}

export default CategoryLayout
