import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages'
import DefaultLayout from './pages/Layouts/DefaultLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export default router
