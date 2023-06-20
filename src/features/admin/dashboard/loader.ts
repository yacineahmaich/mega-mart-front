import { query as storeStatsQuery } from './store-stats'
import { query as weekSalesQuery } from './week-sales'
import { query as salesContributionQuery } from './sales-contribution'
import { query as latestOrdersQuery } from './latest-orders'
import { QueryClient } from '@tanstack/react-query'

const loader = (queryClient: QueryClient) => async () => {
  return Promise.all([
    queryClient.ensureQueryData(storeStatsQuery()),
    queryClient.ensureQueryData(weekSalesQuery()),
    queryClient.ensureQueryData(salesContributionQuery()),
    queryClient.ensureQueryData(latestOrdersQuery()),
  ])
}

export default loader
