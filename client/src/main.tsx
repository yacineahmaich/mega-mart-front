import './index.css'
import './global.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import queryClient from './query-client.ts'
import { Suspense } from 'react'
import Spinner from './components/ui/Spinner.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Spinner fullpage />}>
      <App />
    </Suspense>
    <Toaster
      position="top-center"
      toastOptions={{
        className: 'rounded-none text-sm font-medium',
      }}
    />
    <ReactQueryDevtools />
  </QueryClientProvider>
  // </React.StrictMode>
)
