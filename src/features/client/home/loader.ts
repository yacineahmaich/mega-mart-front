import { QueryClient } from '@tanstack/react-query'

import { query as feedQuery } from './feed'
import { query as offersQuery } from '../offer/offer'

const loader = (queryClient: QueryClient) => async () => {
  return Promise.allSettled([
    queryClient.ensureQueryData(feedQuery()),
    queryClient.ensureQueryData(offersQuery()),
  ])
}

export default loader
