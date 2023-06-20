import { QueryClient } from '@tanstack/react-query'

import { query as offersQuery } from './offers'
import { query as mCategoriesQuery } from '../main-category/m-categories'

const loader = (queryClient: QueryClient) => async () => {
  return Promise.all([
    queryClient.ensureQueryData(offersQuery()),
    queryClient.ensureQueryData(mCategoriesQuery()),
  ])
}

export default loader
