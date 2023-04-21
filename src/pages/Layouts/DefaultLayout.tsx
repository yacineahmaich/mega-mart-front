import { Outlet } from 'react-router'
import Header from '../../components/Header'

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default DefaultLayout
