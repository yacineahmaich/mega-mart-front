import { Outlet } from 'react-router'
import Statistcis from '../../../components/admin/categories/CategoriesStatistcis'

const CategoryLayout = () => {
  return (
    <div>
      <main>
        <Statistcis />
        <Outlet />
      </main>
    </div>
  )
}

export default CategoryLayout
