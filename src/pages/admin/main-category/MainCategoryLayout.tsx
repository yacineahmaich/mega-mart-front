import { Outlet } from 'react-router'
import Statistcis from '../../../components/admin/main-categories/MainCategoriesStatistics'

const MainCategoryLayout = () => {
  return (
    <div>
      <main>
        <Statistcis />
        <Outlet />
      </main>
    </div>
  )
}

export default MainCategoryLayout
