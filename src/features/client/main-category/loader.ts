import { QueryClient } from '@tanstack/react-query'
import { query as mainCategoryFeedQuery } from './feed'

const loader =
  (queryClient: QueryClient) =>
  async ({ params }) => {
    return Promise.allSettled([
      queryClient.ensureQueryData(mainCategoryFeedQuery(params.slug)),
    ])
  }

export default loader
