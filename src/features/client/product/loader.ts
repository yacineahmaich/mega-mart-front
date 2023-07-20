import { QueryClient } from '@tanstack/react-query'
import { query as productQuery } from '../products/product'

const loader =
  (queryClient: QueryClient) =>
  async ({ params }) => {
    return await queryClient.ensureQueryData(productQuery(params.slug))
  }

export default loader
