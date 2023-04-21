import { createBrowserRouter } from 'react-router-dom'
import { Home, DefaultLayout } from './pages'

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
