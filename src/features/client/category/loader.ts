import { QueryClient } from '@tanstack/react-query'
import { query as categoryProductsQuery } from '../products/category-products'

const loader =
  (queryClient: QueryClient) =>
  async ({ params }) => {
    return Promise.all([
      queryClient.ensureQueryData(categoryProductsQuery(params.slug)),
    ])
  }

export default loader
