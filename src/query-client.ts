import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retryOnMount: false },
    mutations: {
      retry: false,
    },
  },
})

export default queryClient
