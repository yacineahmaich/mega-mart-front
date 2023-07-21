import { Outlet } from 'react-router'
import Statistcis from '../../../components/admin/main-categories/MainCategoriesStatistics'

const MainCategoryLayout = () => {
  return (
    <div>
      <Statistcis />
      <Outlet />
    </div>
  )
}

export default MainCategoryLayout
