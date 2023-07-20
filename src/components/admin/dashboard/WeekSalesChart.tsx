import BlockLayout from './BlockLayout'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LabelList,
} from 'recharts'
import { useWeekSales } from '../../../features/admin/dashboard/week-sales'

const WeekSalesChart = () => {
  const { data } = useWeekSales()

  return (
    <BlockLayout title="Income">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <LabelList dataKey="name" position="insideTop" angle={45} />
          <Tooltip labelClassName="text-xl font-medium text-dark-500" />
          <Legend />
          <Bar
            dataKey="prev"
            name="prev week"
            stackId="current"
            fill="#8884d8"
          />
          <Bar
            dataKey="current"
            name="this week"
            stackId="previous"
            fill="#82ca9d"
          />
        </BarChart>
      </ResponsiveContainer>
    </BlockLayout>
  )
}

export default WeekSalesChart
