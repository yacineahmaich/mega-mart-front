import { FC } from 'react'
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
} from 'recharts'
type Props = {
  children?: React.ReactNode
}

const data = [
  {
    name: '06-12',
    current: 2390,
    previous: 2390,
    amt: 2500,
  },
  {
    name: '06-13',
    current: 3490,
    previous: 4300,
    amt: 2100,
  },
  {
    name: '06-14',
    current: 4000,
    previous: 2400,
    amt: 2400,
  },
  {
    name: '06-15',
    current: 3000,
    previous: 1398,
    amt: 2210,
  },
  {
    name: '06-16',
    current: 2000,
    previous: 4000,
    amt: 2290,
  },
  {
    name: '06-17',
    current: 2780,
    previous: 3908,
    amt: 2000,
  },
  {
    name: '06-18',
    current: 1890,
    previous: 4800,
    amt: 2181,
  },
  // {
  //   name: '06-19',
  //   current: 2390,
  //   previous: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: '06-20',
  //   current: 3490,
  //   previous: 4300,
  //   amt: 2100,
  // },
  // {
  //   name: '06-21',
  //   current: 3000,
  //   previous: 1398,
  //   amt: 2210,
  // },
  // {
  //   name: '06-12',
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: 'Page B',
  //   uv: 3000,
  //   pv: 1398,
  //   amt: 2210,
  // },
]
const SalesChart: FC<Props> = () => {
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip labelClassName="text-xl font-medium text-dark-500" />
          <Legend />
          <Bar
            dataKey="previous"
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

export default SalesChart
