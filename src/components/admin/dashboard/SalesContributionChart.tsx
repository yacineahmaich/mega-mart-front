import { FC, useState } from 'react'
import BlockLayout from './BlockLayout'

import { ResponsiveContainer, PieChart, Pie, Sector } from 'recharts'

type Props = {
  children?: React.ReactNode
}

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group A', value: 400 },
  { name: 'Group D', value: 200 },
  { name: 'Group B', value: 300 },
]

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 5) * cos
  const sy = cy + (outerRadius + 5) * sin
  const mx = cx + (outerRadius + 20) * cos
  const my = cy + (outerRadius + 20) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 6}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}
const SalesContributionChart: FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }

  return (
    <BlockLayout title="sales distrubtion">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            width={'100%'}
            height={'100%'}
          />
        </PieChart>
      </ResponsiveContainer>
    </BlockLayout>
  )
}

export default SalesContributionChart
