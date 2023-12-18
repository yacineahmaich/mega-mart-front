import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
// Auth
import AuthLayout from './pages/auth/AuthLayout'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
// Client
import Cart from './pages/client/Cart'
import ClientLayout from './pages/client/ClientLayout'
import Home from './pages/client/Home'
import ProductDetails from './pages/client/ProductDetails'
import NotFound from './pages/NotFound'
import Category from './pages/client/Category'
import Checkout from './pages/client/Checkout'
import MainCategory from './pages/client/MainCategory'
import EditProfile from './pages/client/Profile/EditProfile'
import MyOrders from './pages/client/Profile/MyOrders'
import Order from './pages/client/Profile/Order'
import Profile from './pages/client/Profile/Profile'
import ProfileLayout from './pages/client/Profile/ProfileLayout'
import VerifyPayment from './pages/client/VerifyPayment'

import categoryLoader from './features/client/category/loader'
import productLoader from './features/client/product/loader'
import ErrorPage from './pages/client/ErrorPage'
import Favorite from './pages/client/Favorite'
import queryClient from './query-client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // Client - Routes
      {
        path: '/',
        element: <ClientLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'mc/:slug',
            element: <MainCategory />,
          },
          {
            path: 'mc/:mcslug/category/:slug',
            element: <Category />,
            loader: categoryLoader(queryClient),
          },
          {
            path: 'products/:slug',
            element: <ProductDetails />,
            loader: productLoader(queryClient),
          },
          {
            path: 'cart',
            element: <Cart />,
          },
          {
            path: 'favorite',
            element: <Favorite />,
          },
          {
            path: 'cart/checkout/:session',
            element: <VerifyPayment />,
          },
          {
            path: 'account',
            children: [
              // Auth
              {
                element: <AuthLayout />,
                children: [
                  {
                    path: 'login',
                    element: <Login />,
                  },
                  {
                    path: 'signup',
                    element: <Signup />,
                  },
                ],
              },
              // Profile
              {
                path: 'profile',
                element: <ProfileLayout />,
                children: [
                  {
                    index: true,
                    element: <Profile />,
                  },
                  {
                    path: 'my-orders',
                    element: <MyOrders />,
                  },
                  {
                    path: 'my-orders/:id',
                    element: <Order />,
                  },
                  {
                    path: 'edit-profile',
                    element: <EditProfile />,
                  },
                ],
              },
            ],
          },
          {
            path: '*',
            element: <NotFound backUrl="/" backText="Back Home" />,
          },
        ],
      },
      // Checkout
      {
        path: 'checkout',
        element: <Checkout />,
      },
    ],
  },
])

export default router
