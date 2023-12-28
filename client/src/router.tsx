import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import DefaultLayout from './pages/DefaultLayout'
// Auth
import AuthLayout from './pages/auth/AuthLayout'
// import Login from './pages/auth/Login'
const Login = lazy(() => import('./pages/auth/Login'))
const Signup = lazy(() => import('./pages/auth/Signup'))
// Client
const Cart = lazy(() => import('./pages/Cart'))
import ClientLayout from './pages/ClientLayout'
const Home = lazy(() => import('./pages/Home'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Category = lazy(() => import('./pages/Category'))
const Checkout = lazy(() => import('./pages/Checkout'))
const MainCategory = lazy(() => import('./pages/MainCategory'))
const EditProfile = lazy(() => import('./pages/Profile/EditProfile'))
const MyOrders = lazy(() => import('./pages/Profile/MyOrders'))
const Order = lazy(() => import('./pages/Profile/Order'))
const Profile = lazy(() => import('./pages/Profile/Profile'))
const ProfileLayout = lazy(() => import('./pages/Profile/ProfileLayout'))
const VerifyPayment = lazy(() => import('./pages/VerifyPayment'))

const ErrorPage = lazy(() => import('./pages/ErrorPage'))
const Favorite = lazy(() => import('./pages/Favorite'))

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
