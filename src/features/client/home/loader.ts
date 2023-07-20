import { QueryClient } from '@tanstack/react-query'

import { query as feedQuery } from './feed'

const loader = (queryClient: QueryClient) => async () => {
  return Promise.allSettled([queryClient.ensureQueryData(feedQuery())])
}

export default loader
