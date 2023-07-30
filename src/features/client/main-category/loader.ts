import { QueryClient } from '@tanstack/react-query'
import { query as mainCategoryFeedQuery } from './feed'
import { query as offersQuery } from '../offer/offer'

const loader =
  (queryClient: QueryClient) =>
  async ({ params }) => {
    return Promise.allSettled([
      queryClient.ensureQueryData(mainCategoryFeedQuery(params.slug)),
      queryClient.ensureQueryData(offersQuery()),
    ])
  }

export default loader
