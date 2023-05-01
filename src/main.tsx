import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './global.css'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
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
