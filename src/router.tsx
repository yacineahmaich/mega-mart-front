import { createBrowserRouter } from 'react-router-dom'
import { Home, DefaultLayout } from './pages'
import ProductDetails from './pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:slug',
        element: <ProductDetails />,
      },
    ],
  },
])

export default router
