import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <section className="px-3">
      <div className="px-12 py-8 mx-auto my-10 bg-white border rounded-lg shadow-lg md:px-16 lg:px-20 md:my-20 w-fit border-gray">
        <Outlet />
      </div>
    </section>
  )
}

export default AuthLayout
