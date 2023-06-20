import { QueryClient } from '@tanstack/react-query'
import { query as mCategoryQuery } from './m-category'

const loader =
  (queryClient: QueryClient) =>
  async ({ params }) => {
    return Promise.all([
      queryClient.ensureQueryData(mCategoryQuery(params.slug)),
    ])
  }

export default loader
