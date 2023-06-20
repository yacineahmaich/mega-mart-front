import React from 'react'
import './index.css'
import './global.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartProvider from './context/Cart/CartProvider.tsx'

import queryClient from './query-client.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <App />
    </CartProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        className: 'rounded-none text-sm font-medium',
      }}
    />
    <ReactQueryDevtools />
  </QueryClientProvider>
  // </React.StrictMode>
)
