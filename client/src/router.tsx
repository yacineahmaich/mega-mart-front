import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
// Auth
import AuthLayout from './pages/auth/AuthLayout'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
// Client
import Cart from './pages/Cart'
import ClientLayout from './pages/ClientLayout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Category from './pages/Category'
import Checkout from './pages/Checkout'
import MainCategory from './pages/MainCategory'
import EditProfile from './pages/Profile/EditProfile'
import MyOrders from './pages/Profile/MyOrders'
import Order from './pages/Profile/Order'
import Profile from './pages/Profile/Profile'
import ProfileLayout from './pages/Profile/ProfileLayout'
import VerifyPayment from './pages/VerifyPayment'

import ErrorPage from './pages/ErrorPage'
import Favorite from './pages/Favorite'

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
          },
          {
            path: 'products/:slug',
            element: <ProductDetails />,
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
